import { Request, Response } from "express";
import { BalancesServices } from "../services/BalancesServices";
import { TransactionsServices } from "../services/TransactionsServices";


export class TransactionsController {

    async create(request: Request, response: Response) {
        try {
            const transactionsServices = new TransactionsServices()
            const {transaction} = request.body
            const transactionCreated = await transactionsServices.create(transaction)
            return response.json(transactionCreated) 
        } catch (error) {
            return response.status(400).send(error)
        }
    }

    async listTransactions(request: Request, response: Response) {
        try {
            const transactionsServices = new TransactionsServices()
            const id = request.params.id
            const allTransactions = await transactionsServices.listTransactions(id) 

            return response.json(allTransactions)
        } catch (error) {
            return response.status(400).send(error)
        }
    }

    async update(request: Request, response: Response) {
        try {
            const transactionsServices = new TransactionsServices()

            const transactionData = request.body
            const idTransaction = request.params.id
            const transaction = await transactionsServices.update(transactionData, idTransaction) 

            return response.json(transaction) 
        } catch (error) {
            return response.status(400).send(error)
        }
    }
}