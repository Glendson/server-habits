import { FastifyInstance } from "fastify"
import WebPush from "web-push"


const publicKey = 'BIhWlKVcbZfjlswXpttFK8UUc86IRNgl7h4feEQPpzDiBCn0kYRLmEdPKrNQJkc-WbedTOVe2-SzJcF6tfxk2kk'
const privateKey = 'G5W6TcA_K9FG-xcGLnSdxyQ3mIgIeVkWQlgf4WvpjM0'

WebPush.setVapidDetails(
    "https://localhost:3333",
    publicKey,
    privateKey
)

export async function notificationRoutes(app: FastifyInstance) {
    app.get("/push/public_key", () => {
        return {
            publicKey,
        }
    })

    app.post("/push/register", () => {

    })

    app.post("/push/send", async (req, res) => {

    })
}