import jwt from 'jsonwebtoken'
import log4js  from 'log4js'

const logger = log4js.getLogger("custom")

export const genAdminToken = (req, res, next) => {
  try {
    const { username, admin, password } = req.query
    const adminToken = jwt.sign({
      password: password,
      username: username,
      admin: admin,
      timestamp: new Date().toISOString()
    }, process.env.API_SECRET, { expiresIn: '1h' })
    logger.info("/user/admin GET")
    res.send({ adminToken })
  } catch (error) {
    error.status = 500
    next(error)
  }
}

export const verifyToken = (req, res, next) => {
  try {
    if (req.headers?.authorization?.split(' ')[0] === 'Bearer') {
      jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, function (err, decode) {
        if (err) {
          const error = new Error('Not authorized')
          error.status = 401
          throw error
        }

        logger.info("/user/admin POST")
        req.user = decode
        res.send({ user: req.user })
      })
    } else {
      const error = new Error('Token is required')
      error.status = 401
      error.code = 'UNAUTHORIZED'
      throw error
    }
  } catch (error) {
    next(error)
  }
}