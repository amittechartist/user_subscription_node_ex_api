import { Router } from "express";

import { getUsers, getUser, refreshToken, createUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import authorize from '../middlewares/auth.middleware.js';
import refreshTokenAuthorize from "../middlewares/token.middleware.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.get('/check-auth/refresh-token', refreshTokenAuthorize, refreshToken);

userRouter.post('/', createUser);

userRouter.put('/', authorize, updateUser);

userRouter.delete('/', authorize, deleteUser);

export default userRouter;
