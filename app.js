import express from 'express';
import cookieParser from 'cookie-parser';

import { PORT } from './config/env.js';
import connectToDatabase from './config/mongodb.js';

import errorMiddleware from './middlewares/error.middleware.js'

import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscriptions.routes.js'
import workflowRouter from './routes/workflow.routes.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows', workflowRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Wellcome to Node Js backend');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    connectToDatabase();
})

export default app;