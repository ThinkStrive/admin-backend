import { paidHistoryModel } from '../DB/models/PaidHistory.js';


/**
 * Fetch all paid histories
 * @route GET /api/paid-history
 */
export const getAllPaidHistories = async (req, res) => {
    try {
        const paidHistories = await paidHistoryModel.find({});
        res.status(200).json({ success: true, data: paidHistories });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

/**
 * Fetch paid histories by user email
 * @route GET /api/paid-history/:email
 */
export const getPaidHistoryByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const userHistory = await paidHistoryModel.find({ userEmail: email });
        if (!userHistory.length) {
            return res.status(404).json({ success: false, message: 'No history found for this user' });
        }
        res.status(200).json({ success: true, data: userHistory });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

/**
 * Delete all paid histories (Admin use)
 * @route DELETE /api/paid-history
 */
export const deleteAllPaidHistories = async (req, res) => {
    try {
        await paidHistoryModel.deleteMany({});
        res.status(200).json({ success: true, message: 'All paid histories deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

/**
 * Delete a specific user's paid history
 * @route DELETE /api/paid-history/:email
 */
export const deletePaidHistoryByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const result = await paidHistoryModel.deleteMany({ userEmail: email });
        if (result.deletedCount === 0) {
            return res.status(404).json({ success: false, message: 'No history found for this user' });
        }
        res.status(200).json({ success: true, message: `Paid history for user ${email} deleted successfully` });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};
