import express from "express";

import botController from "../controllers/bot";

const router = express.Router();
router.post("/message", botController.postMessage);

export { router as botRoutes };
