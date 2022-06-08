import { Router } from "express"
import log4js from "log4js"

const logger = log4js.getLogger("custom")

const router = Router()

router.get("/", async (req, res) => {
    
    await res.json({
        argEntrada: process.argv,
        OS: process.platform,
        nodeVersion: process.version,
        rss: process.memoryUsage(),
        processId: process.pid,
        folder: process.cwd()
    })
    logger.info("/info GET")
})

export const infoRouter = router