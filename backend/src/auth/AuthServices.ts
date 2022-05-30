import { UserServices } from "../services/UserServices"
import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'


export class AuthServices {
    async signin(email: string, password: string) {
        try {

            const userServices = new UserServices()
            
            const user = await userServices.findByEmail(email)
            if(!user) throw 'Usuário não encontrado'
            
            const isMath = bcrypt.compareSync(password, user.password)

            const now = Math.floor(Date.now() / 1000)

            const payload = {
                id: user.id,
                username: user.username,
                email: user.email,
                iat: now,
                exp: now + (60 * 60 * 24 * 3)
            }    

            if (!isMath) throw 'Email/Senha inválido!'

            const authSecret = String(process.env.SECRET)

            return {
                ...payload,
                token: jwt.encode(payload, authSecret)
            }
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async validateToken(token: string) {
        try {
            const authSecret = String(process.env.SECRET)
            const tokenFound = jwt.decode(token, authSecret)

            return new Date(tokenFound.exp * 1000) > new Date()
        } catch (error) {
            throw error
        }
    }
}