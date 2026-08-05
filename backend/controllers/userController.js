import UserModel from "../models/userModel.js";

const getUsers = async (req, res) => {
    try {
        const usuarios = await UserModel.getAll();
        res.status(200).json({
            success: true,
            data: usuarios,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await UserModel.getById(id);

        if (!usuario) {
            return res.status(404).json({ success: false, message: "Usuario no encontrado" });
        }

        res.status(200).json({ success: true, data: usuario });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// routes/userRoutes.js
import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

export default router;



