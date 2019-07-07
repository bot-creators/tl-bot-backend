import express from "express";

import userController from "../controllers/user";

const router = express.Router();
router.post("/channels", userController.getChannels);

export { router as userRoutes };
