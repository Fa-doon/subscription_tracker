import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.post('/', (req, res) => {
    res.send({ title: 'Create a sub'})
})

export default subscriptionRouter;