import { Express } from "express"
import cookieParser from "cookie-parser"
import { userRouter, infoRouter } from "./routes/index"
import db from './configs/mongoConfig';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import parseArgs from "minimist"


function Server() {
    const app = Express()

  const args = parseArgs(process.argv.slice(2))
  const PORT = args || 8080

  app.use(cookieParser())
  app.use(Express.json())
  app.use(Express.urlencoded({ extended: true }))
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

  return(
      <db/>
  )
}