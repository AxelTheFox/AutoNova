import mongoose from "mongoose";

const cotxeSchema = new mongoose.Schema({
    brand: String,
    model: String,
    price: Number,
    fuel: [String],
    year: Number,
    power: Number,
    km: Number,
    images: [String],
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Cotxe", cotxeSchema);