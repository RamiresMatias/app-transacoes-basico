import { prismaClient } from "../database/prismaClient"

type BalancesData = {
    id?: string
    value: number
    user_id: string
}

export class BalancesServices {
    async create(userId: string): Promise<BalancesData> {
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
}