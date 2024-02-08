import "server-only";
import { Penalty } from "@/constants/data";
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
    return penalties;
  } catch (error) {
    throw new Error("Failed to fetch penalties");
  }
};

export const fetchUserPenalties = async (id: string) => {
  try {
    connectToDB();
    const penalties: Penalty[] = await PenaltyModel.find({
      username: id,
    });

    return penalties;
  } catch (error) {
    throw new Error("Failed to fetch user penalties");
  }
};
