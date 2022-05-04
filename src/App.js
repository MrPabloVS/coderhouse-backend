//import logo from './logo.svg';
import './App.css';
import 'dotenv/config'
import Login from './components/login';
import Welcome from './components/welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { express } from 'express';
import { userRouter } from "./routes/index"
import db from './configs/mongoConfig';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { Switch, Route } from 'react-router-dom'

function App() {
  const app = express()
  const PORT = process.env.PORT || 5000

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
  app.use('/api', userRouter)

  app.listen(PORT, () => console.log(`Escuchando puerto ${PORT}`))


  return (
    <Switch>
      <Route exact path="/">
       <Login/>
      </Route>
      <Route exact path="/welcome">
        <Welcome/>
      </Route>
    </Switch>
  );
}

export default App;
