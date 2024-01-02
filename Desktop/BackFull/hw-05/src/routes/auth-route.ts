import {Router, Request, Response} from "express";
import {HTTP_STATUSES} from "../utils/common";
import {authLoginValidation} from "../validators/auth-validator";
import {UsersRepository} from "../repositories/users-repository";


export const authRouter = Router({})


authRouter.post('/login', authLoginValidation(), async (req: Request, res: Response) => {
    let {loginOrEmail, password} = req.body

    const checkResult = await UsersRepository.checkCredentials({loginOrEmail, password})

    if (!checkResult) {
        res.sendStatus(HTTP_STATUSES.UNAUTHORIZED_401)
    } else {
        res.sendStatus(HTTP_STATUSES.NO_CONTENT_204)
    }
})
