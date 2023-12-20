import { NextFunction, Request, Response } from 'express'
import admin from '../config/firebase'

interface AuthRequest extends Request {
    user?: string
}

const authenticate = async (req:AuthRequest, res:Response, next:NextFunction) => {
    const idToken = req.header('Authorization');

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken)
        req.user = decodedToken
    } catch (error:any) {
        res.status(500).json(error.message)
    }
}

export default authenticate