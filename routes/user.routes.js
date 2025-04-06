import { Router } from "express";
import { getUserById, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUserById);

userRouter.post('/', (req, res) => {
    res.send({ title: 'create a new user'})
})

userRouter.put('/:id', (req, res) => {
    res.send({ title: 'update user'})
})

userRouter.delete('/:id', (req, res) => {
    res.send({ title: 'delete user'})
})

export default userRouter;