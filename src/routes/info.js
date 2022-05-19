import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
    res.json({
        argEntrada: process.argv,
        OS: process.platform,
        nodeVersion: process.version,
        rss: process.memoryUsage(),
        processId: process.pid,
        folder: process.cwd()
    })
})

export const infoRouter = router