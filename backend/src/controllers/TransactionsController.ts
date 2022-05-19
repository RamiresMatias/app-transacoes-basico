import { Request, Response } from "express";
import { TransactionsServices } from "../services/TransactionsServices";


export class TransactionsController {

    async create(request: Request, response: Response) {
        try {
            const transactionsServices = new TransactionsServices()
            const transactionData = request.body
            const transaction = await transactionsServices.create(transactionData)
            return response.json(transaction) 
        } catch (error) {
            return response.status(400).send(error)
        }
    }

    async listTransactions(request: Request, response: Response) {
        try {
            const transactionsServices = new TransactionsServices()
            const allTransactions = await transactionsServices.listTransactions() 

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