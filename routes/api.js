import express from "express"
import * as authController from "../controller/authController.js"
import * as invenController from "../controller/invenController.js"

const api = express.Router()

api.post('/register', authController.register)
api.post('/login', authController.login)
api.get('/profile', authController.profile)

api.post('/inven', invenController.createInven)
api.get("inven", invenController.InvenList)
api.put("/inven/:id",invenController.updateInven)
api.delete("/inven/:id", invenController.deleteInven)

export default api