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

const createUser = async (req, res) => {};
const updateUser = async (req, res) => {};
const deleteUser = async (req, res) => {};

export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};