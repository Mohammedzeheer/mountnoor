// models/afterPoints.js
import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
  team: { type: String, required: true },
  points: { type: Number, required: true },
});

const AfterPointsSchema = new mongoose.Schema({
  after: { type: Number, required: true },
});

const Team = mongoose.models.Team || mongoose.model('Team', TeamSchema);
const AfterPoints = mongoose.models.AfterPoints || mongoose.model('AfterPoints', AfterPointsSchema);

export { Team, AfterPoints };
