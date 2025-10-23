import userModel from "../models/userModel.js";
import User from "../models/userModel.js";

export const register = async (req, res) => {
    try {
        const registerData = req.body

        console.log(registerData);

        await userModel.create({
            username: registerData.username,
            email: registerData.email,
            password: registerData.password
        })

        res.status(201).json({
            message: "User berhasil terdaftar",
            data : null
        })

    } catch (e) {
        res.status(500).json({
            message: e.message,
            data: null
        })
    }
}

export const login = async (req, res) => {
    try {
        const loginData = req.body

        const user = await UserModel.findOne({
            email: loginData.email,
        })

        if (!user) {
            return res.status(404).json({
                message: "User tidak ditemukan",
                data: null
            })
        }
        if (compare(loginData.password, user.password)) {
            res.status(200).json({
                message: "Login berhasil",
                data: {
                    username: user.username,
                    email: user.email
                }
            })
        }

        return res.status(401).json({
            message: "Login Gagal",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}