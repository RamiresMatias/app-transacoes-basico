import cron from "node-cron"
import { BalancesServices } from "../services/BalancesServices";


cron.schedule("0 0 * * *", async () => {
    console.log("Irá calcular o saldo da conta do usuário 00:00")
    const balanceService = new BalancesServices()
    await balanceService.calculateBalance()
});


