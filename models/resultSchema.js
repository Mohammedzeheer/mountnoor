import mongoose, { Schema } from "mongoose"

const resultSchema = new Schema({
    category: { type: String, required: true },
    item: { type: String, required: true },
    firstName: { type: String, required: true },
    firstTeam: { type: String, required: true },
    secondName: { type: String, required: true },
    secondTeam: { type: String, required: true },
    thirdName: { type: String },
    thirdTeam: { type: String },
});


const ResultModel = mongoose.models.result || mongoose.model("result", resultSchema);

export default ResultModel