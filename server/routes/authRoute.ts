import express from 'express'
import authService from '../services/authService';

const authRoute = express.Router();

// authRoute.post('/login');
authRoute.post('/signup',authService.signup as any);


export default authRoute;