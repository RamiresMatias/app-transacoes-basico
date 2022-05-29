import { prismaClient } from "../database/prismaClient"
import bcrypt from 'bcrypt'
import { BalancesServices } from "./BalancesServices"

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
            const isExists = await this.isExists(newUser.email)
            if(isExists) throw 'Já existe um usuário com esse e-mail!!!'

            newUser.password = this.excryptedPassword(newUser.password)
            delete newUser.confirmPassword

            const userSave = await prismaClient.users.create({
                data: {
                    ...newUser,
                }
            })

            await this.createBalance(userSave.id)

            return userSave
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async update(dataUser: UserProps, id: string): Promise<UserProps> {   
        try {
            const userUpdated = await prismaClient.users.update({
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
            return prismaClient.users.findFirst({
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

            return prismaClient.users.findFirst({
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

    async createBalance(userId: string) {
        try {
            const balancesServices = new BalancesServices()
            return await balancesServices.create(userId)
        } catch (error) {
            throw error
        }
    }

    async listUsers(): Promise<UserProps[]> {
        try {
            const users = await prismaClient.users.findMany()
            return users            
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    
}