import { Reward } from "@/constants/data";
import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema<Reward>(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    user_id: { type: String, required: true },
    username: { type: String, required: true },
    reward_type: {
      type: String,
      enum: [
        "new_post",
        "like",
        "post_answer",
        "follow",
        "1k_reached",
        "5k_reached",
        "10k_reached",
      ],
      required: true,
    },
    time: { type: Date, default: Date.now },
    reward_score: { type: Number, required: true },
    current_karma: { type: Number, required: true },
    new_karma: { type: Number, required: true },
    reviewed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const RewardModel =
  mongoose.models.Reward || mongoose.model("Reward", rewardSchema);
