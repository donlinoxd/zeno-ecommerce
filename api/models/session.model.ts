import mongoose, { Schema } from "mongoose";
import SessionDocument from "../interfaces/session.interface";

const SessionSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    userAgent: { type: String },
    valid: { type: Boolean, default: true },
    invalidTokens: { type: Array },
  },
  { timestamps: true }
);

export default mongoose.model<SessionDocument>("Session", SessionSchema);
