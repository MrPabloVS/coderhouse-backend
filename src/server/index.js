import { express } from "express"
import cookieParser from "cookie-parser"
import { userRouter, infoRouter } from "./server/routes/index"
import db from './server/configs/mongoConfig';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import parseArgs from "minimist"
import compression from "compression"
import  log4js  from "log4js";
import cluster from "cluster"
import { cpus } from "os"

log4js.configure({
  appenders: {
    console: { type: "console"},
    warn: {type: "file", filename: "warn.log"},
    error: { type: "file", filename: "error.log"},

    miLoggerConsole: { type: "logLevelFilter", appender:"console", level: "info"},
    miLoggerWarn: { type: "logLevelFilter", appender: "warn", level: "warn"},
    miLoggerError: { type: "logLevelFilter", appender: "error", level: "error"}
  },
  categories: {
    default: { appenders: ["miLoggerConsole"], level: "all"},
    custom: { appenders: ["miLoggerConsole", "miLoggerWarn", "miLoggerError"], level: "all"}
  }
})

const logger = log4js.getLogger("custom")



  const args = parseArgs(process.argv.slice(2))
  const PORT = args || 8080
  const modoCluster = process.argv[3] === "CLUSTER"

  if (modoCluster && cluster.isPrimary) {
    const numCPUs = cpus().length

    logger.info(`Numero de procesadores: ${numCPUs}`)
    logger.info(`PID MASTER ${process.pid}`)

    for (let i = 0; i < numCPUs; i++) {
      cluster.fork()
      
    }

    cluster.on("exit", worker => {
      logger.info("Worker", worker.process.pid, "died", new Date().toLocaleString())
      cluster.fork()
    })
  } else {
    const app = express()
    

    app.use(compression())
    app.use(cookieParser())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(session({
      store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true}
      }),

      secret: "secreto",
      resave: false,
      saveUninitialized: false

    }))

    //app.use('/api', productRouter)
    //app.use('/api', cartRouter)
    app.use('/user', userRouter)
    app.use('/info', infoRouter)

    app.listen(PORT, () => console.log(`Escuchando puerto ${PORT}`))
  }

  