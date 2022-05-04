import { Router } from "express"
import users from "../schemas/users"

const router = Router()

router.get("/login", (req, res) => {
    const { username, password, admin } = req.query
    const verificado = users.find({username: username, password: password})

    if (!verificado) {
        return res.send("Incorrect username or password")
    }

    req.session.user = username
    req.session.admin = admin
    res.send(`welcome ${username}`)

})

router.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err){
            return res.json({ status: "Logout Error", body: err})
        }
        res.send("Logged out")
    })
})

export const userRouter = router