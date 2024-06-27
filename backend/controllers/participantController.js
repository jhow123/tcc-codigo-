const Participant = require('../models/participant');

// Registrar um usuário como participante de um evento
exports.registerParticipant = async (req, res) => {
  try {
    const { userId, eventId } = req.body;
    const participant = new Participant({ user: userId, event: eventId });
    await participant.save();
    res.status(201).json(participant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar participantes de um evento
exports.getParticipants = async (req, res) => {
  try {
    const participants = await Participant.find({ event: req.params.eventId }).populate('user', 'username email');
    res.status(200).json(participants);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
