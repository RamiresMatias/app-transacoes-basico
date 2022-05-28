import { prismaClient } from "../database/prismaClient"

type TransactionProps = {
    id?: string
    date: Date
    type: 'D' | 'R'
    description: string
    value: number
    status: boolean
    user_id: string 
}

type UserReleaseProps = {
    id?: string
    user_id: string
    transaction_id: string
    operation_type: string
}

enum Operation {
    CREATE = 'C',
    UPDATE = 'U'
}

export class TransactionsServices {

    async create(transaction: TransactionProps): Promise<TransactionProps> {
        try {
            const transactionSave = await prismaClient.transaction.create({
                data: {
                    date: new Date(transaction.date),
                    type: transaction.type,
                    description: transaction.description,
                    value: transaction.value,
                    status: transaction.status,
                }
            })
            await this.createUserRelease(transactionSave.id, Operation.CREATE, transaction.user_id)
    
            return transactionSave
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async createUserRelease(idTransaction: string, type: Operation, userId: string): Promise<UserReleaseProps>{
        try {
            const userRelease = await prismaClient.UsersReleases.create({
                data: {
                    user_id: userId,
                    transaction_id: idTransaction,
                    operation_type: type
                }
            })
    
            return userRelease
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async listTransactions(): Promise<TransactionProps[]> {
        try {
            return prismaClient.transaction.findMany()
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async update(transaction: TransactionProps, id: string): Promise<TransactionProps> {
        try {
            const transactionUpdate = await prismaClient.transaction.update({
                data: {
                    date: new Date(transaction.date),
                    type: transaction.type,
                    description: transaction.description,
                    value: transaction.value,
                    status: transaction.status
                },
                where: {
                    id,
                }
            })

            await this.createUserRelease(transactionUpdate.id, Operation.UPDATE, transaction.user_id)

            return transactionUpdate
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}