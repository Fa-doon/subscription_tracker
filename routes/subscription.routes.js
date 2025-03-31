import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.post('/', (req, res) => {
    res.send({ title: 'Create all subscriptions'})
})

subscriptionRouter.get('/', (req, res) => {
    res.send({ title: 'Get all subscriptions'})
})

subscriptionRouter.get('/:id', (req, res) => {
    res.send({ title: 'Get subscription details'})
})

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