import {Router} from 'express'
import { AuthController } from '../controllers/AuthController'
import { BalanceController } from '../controllers/BalanceController'
import { TransactionsController } from '../controllers/TransactionsController'
import { UserController } from '../controllers/UserController'

const router = Router()

const userController = new UserController()
const transactionsController = new TransactionsController()
const authController = new AuthController()
const balanceController = new BalanceController()

router.route('/signin')
    .post(authController.signin)


router.route('/validateToken')
    .post(authController.validateToken)


router.route('/users')
    .post(userController.save)

router.route('/users/:id')
    .put(userController.update)
    .get(userController.findById)

    
router.route('/transactions')
    .post(transactionsController.create)


router.route('/balance/:id')
    .get(balanceController.getBalance)

    router.route('/balance')
    .post(balanceController.calculateBalance)


router.route('/transactions/:id')
    .put(transactionsController.update)
    .get(transactionsController.listTransactions)



export {router}