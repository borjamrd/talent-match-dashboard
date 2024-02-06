import { Penalty, formatDate } from "@/constants/data";
import { connectToDB } from "./db";
import { PenaltyModel } from "./models/penalty-model";
import { RewardModel } from "./models/reward-model";

export const fetchRewards = async () => {
  try {
    connectToDB();
    const rewards = await RewardModel.find();
    return rewards;
  } catch (error) {
    throw new Error("Failed to fetch rewards");
  }
};

export const fetchPenalties = async () => {
  try {
    connectToDB();
    const penalties: Penalty[] = await PenaltyModel.find();
    let t = penalties.map((p) => {
      return p;
    });
    console.log(t);
    return penalties;
  } catch (error) {
    throw new Error("Failed to fetch penalties");
  }
};
