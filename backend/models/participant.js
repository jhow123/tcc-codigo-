const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

const Participant = mongoose.model('Participant', participantSchema);
module.exports = Participant;
