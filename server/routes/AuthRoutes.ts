
import express from 'express';
import { registerUser,loginUser, verifytUser, logoutUser } from '../controllers/AuthControllers.js';
import protect from '../middlewares/auth.js';



const AuthRoutes = express.Router();

AuthRoutes.post('/register', registerUser);
AuthRoutes.post('/login', loginUser);
AuthRoutes.get('/verify', protect, verifytUser);
AuthRoutes.post('/logout', protect, logoutUser);


export default AuthRoutes;