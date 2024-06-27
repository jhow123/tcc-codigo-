const express = require('express');
const router = express.Router();
const participantController = require('../controllers/participantController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, participantController.registerParticipant);
router.get('/:eventId', authMiddleware, participantController.getParticipants);

module.exports = router;
