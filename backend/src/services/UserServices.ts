import { prismaClient } from "../database/prismaClient"
import bcrypt from 'bcrypt'

type UserProps = {
    id?: string
    username: string
    email: string
    confirmPassword?: string
    password: string
    status: boolean
}

export class UserServices {

    async save(dataUser: UserProps): Promise<UserProps> {

        try {
            const newUser = {...dataUser}

            if(await this.isExists(newUser.email)) throw 'Já existe um usuário com esse e-mail!!!'

            newUser.password = this.excryptedPassword(newUser.password)
            delete newUser.confirmPassword

            const userSave = await prismaClient.user.create({
                data: {
                    ...newUser,
                }
            })

            return userSave
        } catch (error) {
            throw error
        }
    }

    async update(dataUser: UserProps, id: string): Promise<UserProps> {   
        try {
            const userUpdated = await prismaClient.user.update({
                data: {
                    ...dataUser
                },
                where:{
                    id,
                }
            })
            return userUpdated
        } catch (error) {
            throw error
        }
    }

    async findById(id: string): Promise<UserProps> {
        try {
            return prismaClient.user.findFirst({
                where:{
                    id,
                }
            })
        } catch (error) {
            throw error
        }
    }

    async findByEmail(email: string): Promise<UserProps> {
        try {
            return prismaClient.user.findFirst({
                where:{
                    email,
                }
            })
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    excryptedPassword(password: string): string {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    async isExists(email: string): Promise<boolean> {
        try {
            const user = await this.findByEmail(email)
            return !!user
        } catch (error) {
            throw error
        }
    }
    
}