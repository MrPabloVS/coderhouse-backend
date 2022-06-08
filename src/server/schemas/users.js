import mongoose from "mongoose";

const userCollection = "users"

const userSchema = mongoose.Schema({
    username: {type: String, require: true},
    password: {type: String, require: true},
    admin: {type: Boolean, require: true}
})

const users = mongoose.model(userCollection, userSchema)

export default users