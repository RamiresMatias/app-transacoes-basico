import { prismaClient } from "../database/prismaClient"
import { TransactionsServices } from "./TransactionsServices"
import { UserServices } from "./UserServices"

type BalancesProps = {
    id?: string
    value: number
    user_id: string
}

export class BalancesServices {
    async create(userId: string): Promise<BalancesProps> {
        try {
            const balances = await prismaClient.balances.create({
                data: {
                    value: 0.0,
                    user_id: userId,
                }
            })

            return balances
        } catch (error) {
            throw error
        }
    }

    async getBalance(user_id: string | undefined): Promise<BalancesProps> {
        try {
            return await prismaClient.balances.findFirst({
                where:{
                    user_id,
                }
            })
        } catch (error) {
            throw error
        }
    }

    async calculateBalance() {
        try {

            const transactionServices = new TransactionsServices()
            const userServices = new UserServices()

            const users = await userServices.listUsers()

            for(const user of users) {

                const balance = await this.getBalance(user.id)
                const valueBalance = Number(balance.value)
                const transactions = await transactionServices.listTransactions(user.id)
    
                if(transactions.length === 0) continue
    
                const sumTransactions = transactions.reduce((acc, tr) => acc += Number(tr.value) ,0)
                const total = valueBalance + sumTransactions
    
                await this.updateBalanceValue(total, balance.id)
    
                for(const transaction of transactions) {
                    const transanctionUpdate = {
                        ...transaction,
                        status: false
                    }
    
                    await transactionServices.update(transanctionUpdate, transaction.id)
                }
            }
  
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async updateBalanceValue(value: number, id_balance: string | undefined): Promise<BalancesProps> {
        try {

            const balanceUpdated = await prismaClient.balances.update({
                where: {
                    id: id_balance,
                },
                data: {
                    value,
                },
            })
            
            return balanceUpdated
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}