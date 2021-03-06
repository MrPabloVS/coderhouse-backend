//import logo from './logo.svg';
import './App.css';
//import 'dotenv/config'
import {Login, Welcome, Register} from "./components/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// import parseArgs from "minimist"
// import { express } from 'express';
// import { userRouter, infoRouter } from "./server/routes/index"
// import db from './server/configs/mongoConfig';
// import cookieParser from 'cookie-parser';
// import session from 'express-session';
// import MongoStore from 'connect-mongo';

function App() {
  // const app = express()

  // const args = parseArgs(process.argv.slice(2))
  // const PORT = args || 8080

  // app.use(cookieParser())
  // app.use(express.json())
  // app.use(express.urlencoded({ extended: true }))
  // app.use(session({
  //   store: MongoStore.create({
  //     mongoUrl: process.env.MONGO_URI,
  //     mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true}
  //   }),

  //   secret: "secreto",
  //   resave: false,
  //   saveUninitialized: false

  // }))

  // //app.use('/api', productRouter)
  // //app.use('/api', cartRouter)
  // app.use('/user', userRouter)
  // app.use('/info', infoRouter)

  // app.listen(PORT, () => console.log(`Escuchando puerto ${PORT}`))


  return (
    
      
    <Switch>
      <Route exact path="/">
       <Login/>
      </Route>
      <Route exact path="/welcome">
        <Welcome/>
      </Route>
      <Route exact path="/register">
        <Register/>
      </Route>
    </Switch>
    
  );
}

export default App;
