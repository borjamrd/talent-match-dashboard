import { Penalty } from "@/constants/data";
import mongoose from "mongoose";

const penaltySchema = new mongoose.Schema<Penalty>(
  {
    id: { type: Number, required: true },
    user_id: { type: String, required: true },
    username: { type: String, required: true },
    penalty_type: {
      type: String,
      enum: [
        "auto_post",
        "auto_like",
        "auto_reply",
        "follow_back",
        "cross_interaction",
        "mass_acc_creation",
        "manipulation",
      ],
      required: true,
    },
    system_recognition: {
      type: String,
      enum: ["IP_track", "ML_IA", "user_report", "content_analysis"],
      required: true,
    },
    time: { type: Date, required: true },
    triage: {
      type: String,
      enum: ["medium", "low", "critical"],
      required: true,
    },
    penalty_score: { type: Number, required: true },
    current_karma: { type: Number, required: true },
    new_karma: { type: Number, required: true },
    reviewed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const PenaltyModel =
  mongoose.models.Penalty || mongoose.model("Penalty", penaltySchema);
