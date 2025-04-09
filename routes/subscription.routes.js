import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getSubById, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.get('/', (req, res) => {
    res.send({ title: 'Get all subscriptions'})
})

subscriptionRouter.get('/:id', authorize, getSubById);

subscriptionRouter.get('/user/:id', authorize, getUserSubscription)

subscriptionRouter.put('/:id', (req, res) => {
    res.send({ title: 'Update a subscription'})
})

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({ title: 'Delete a subscription'})
})

subscriptionRouter.get('/user/:id', (req, res) => {
    res.send({ title: 'Get all user subscriptions'})
})

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({ title: 'Cancel subscription'})
})

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({ title: 'Get all upcoming subscription renewals'})
})

export default subscriptionRouter;