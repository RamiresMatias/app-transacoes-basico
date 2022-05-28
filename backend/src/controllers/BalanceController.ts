import { Request, Response } from "express";
import { BalancesServices } from "../services/BalancesServices";


export class BalanceController {
    async getBalance(request: Request, response: Response) {
        try {
            const balanceServices = new BalancesServices()
            const user_id = request.params.id

            const balance = await balanceServices.getBalance(user_id) 
            
            return response.json(balance) 
        } catch (error) {
            return response.status(400).send(error)
        }
    }
}