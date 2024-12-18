import express from 'express';
import {
    getAllPaidHistories,
    getPaidHistoryByEmail,
    deleteAllPaidHistories,
    deletePaidHistoryByEmail,
} from '../controllers/paidHistoryControllers.js';

export const historyRouter = express.Router();


/**
 * @route GET /api/paid-history
 * @desc Fetch all paid histories
 */
historyRouter.get('/', getAllPaidHistories);

/**
 * @route GET /api/paid-history/:email
 * @desc Fetch paid history of a user by email
 */
historyRouter.get('/:email', getPaidHistoryByEmail);

/**
 * @route DELETE /api/paid-history
 * @desc Delete all paid histories (Admin use)
 */
historyRouter.delete('/', deleteAllPaidHistories);

/**
 * @route DELETE /api/paid-history/:email
 * @desc Delete paid history of a specific user by email
 */
historyRouter.delete('/:email', deletePaidHistoryByEmail);


