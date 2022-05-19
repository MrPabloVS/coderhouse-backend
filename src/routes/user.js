import express from 'express'
import { genAdminToken, verifyToken} from '../controllers/index.js'

export const userRouter = express.Router()

userRouter.get('/admin', genAdminToken)
userRouter.post('/admin', verifyToken)

// import { Router } from "express"
// import users from "../schemas/users"
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"

// const PRIVATE_KEY = "myprivatekey"

// function generateToken(user) {
//     const token = jwt.sign({ data: user }, PRIVATE_KEY, { expiresIn: "24h"})
//     return token
// }

// const router = Router()

// router.get("/login", (req, res) => {
//     const { username, admin } = req.query
//     let {password} = req.query 
//     password = bcrypt.hash(password, 10)

//     const verificado = users.find({username: username, password: password})

//     if (!verificado) {
//         return res.send("Incorrect username or password")
//     }

//     req.session.user = username
//     req.session.admin = admin
//     res.send(`welcome ${username}`)

// })

// router.get("/logout", (req, res) => {
//     req.session.destroy(err => {
//         if (err){
//             return res.json({ status: "Logout Error", body: err})
//         }
//         res.send("Logged out")
//     })
// })

// router.post("/register", (req, res) => {

//     const { username } = req.query
//     let {password} = req.query 
//     password = bcrypt.hash(password, 10)

//     const yaExiste = users.find(user => user.username == username)
//         if (yaExiste) {
//             return res.json({ error: "Nombre de usuario en uso"})
//         }

//     const user = {username, password}
//     users.push(user)

//     const accessToken = generateToken(user)

//     res.json({ accessToken })

// })

// export const userRouter = router
