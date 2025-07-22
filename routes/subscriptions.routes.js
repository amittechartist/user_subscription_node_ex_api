import { Router } from "express";
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription, getUserSubscriptions } from "../controllers/subscriptions.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/:id', authorize, getUserSubscriptions);

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

export default subscriptionRouter;