import express from "express"
import * as authController from "../controller/authController.js"
import * as invenController from "../controller/invenController.js"
import * as profilController from "../controller/profilController.js"
import { protect } from "../middleware/authMiddleware.js";


const api = express.Router()

api.post('/register', authController.register)
api.post('/login', authController.login)

api.post('/inven', invenController.createInven)
api.get("/inven", invenController.InvenList)
api.put("/inven/:id",invenController.updateInven)
api.delete("/inven/:id", invenController.deleteInven)

api.get('/me',protect,profilController.privateProfil);

export default api