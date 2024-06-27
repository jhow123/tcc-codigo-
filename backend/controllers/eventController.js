const Event = require('../models/event');

// Criar um novo evento
exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar todos os eventos
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('organizer', 'username email');
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Atualizar um evento
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Excluir um evento
exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Evento excluído com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
