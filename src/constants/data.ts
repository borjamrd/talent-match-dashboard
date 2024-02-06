import { NavItem } from "@/types";

export type RewardType =
  | "new_post"
  | "like"
  | "post_answer"
  | "follow"
  | "1k_reached"
  | "5k_reached"
  | "10k_reached";

export type PenaltyType =
  | "auto_post"
  | "auto_like"
  | "auto_reply"
  | "follow_back"
  | "cross_interaction"
  | "mass_acc_creation"
  | "manipulation";

export type SystemRecognition =
  | "IP_track"
  | "ML_IA"
  | "user_report"
  | "content_analysis";

export type Triage = "medium" | "low" | "critical";

export type Penalty = {
  id: number;
  user_id: string;
  username: string;
  penalty_type: PenaltyType;
  system_recognition: SystemRecognition;
  time: Date | string;
  triage: Triage;
  penalty_score: number;
  current_karma: number;
  new_karma: number;
  reviewed: boolean;
};

export type Reward = {
  id: number;
  user_id: string;
  username: string;
  reward_type: RewardType;
  time: Date | string;
  reward_score: number;
  current_karma: number;
  new_karma: number;
  reviewed: boolean;
};

// export const rewards: Reward[] = [];

// for (let i = 0; i < 20; i++) {
//   const reward: Reward = {
//     id: i + 1,
//     user_id: `user_${i}`,
//     username: `username_${i}`,
//     reward_type: getRandomRewardType(),
//     time: formatDate(new Date()),
//     reward_score: Math.floor(Math.random() * 100),
//     current_karma: Math.floor(Math.random() * 1000),
//     new_karma: Math.floor(Math.random() * 2000),
//     reviewed: Math.random() < 0.5,
//   };
//   rewards.push(reward);
// }
// function getRandomRewardType(): RewardType {
//   const types: RewardType[] = [
//     "new_post",
//     "like",
//     "post_answer",
//     "follow",
//     "1k_reached",
//     "5k_reached",
//     "10k_reached",
//   ];
//   const randomIndex = Math.floor(Math.random() * types.length);
//   return types[randomIndex];
// }

export function formatDate(dateString: string | Date) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return formattedDate;
}

// export const penalties: Penalty[] = [];

// for (let i = 0; i < 30; i++) {
//   const penalty: Penalty = {
//     id: i + 1,
//     user_id: `user_${i}`,
//     username: `username_${i}`,
//     penalty_type: getRandomPenaltyType(),
//     system_recognition: getRandomRecognitionType(),
//     triage: getRandomTriage(),
//     time: formatDate(new Date()),
//     penalty_score: Math.floor(Math.random() * 100),
//     current_karma: Math.floor(Math.random() * 1000),
//     new_karma: Math.floor(Math.random() * 2000),
//     reviewed: Math.random() < 0.5,
//   };
//   penalties.push(penalty);
// }

// function getRandomTriage(): Triage {
//   const types: Triage[] = ["critical", "low", "medium"];
//   const randomIndex = Math.floor(Math.random() * types.length);
//   return types[randomIndex];
// }
// function getRandomRecognitionType(): SystemRecognition {
//   const types: SystemRecognition[] = [
//     "IP_track",
//     "ML_IA",
//     "user_report",
//     "content_analysis",
//   ];
//   const randomIndex = Math.floor(Math.random() * types.length);
//   return types[randomIndex];
// }

// function getRandomPenaltyType(): PenaltyType {
//   const types: PenaltyType[] = [
//     "auto_post",
//     "auto_like",
//     "auto_reply",
//     "follow_back",
//     "cross_interaction",
//     "mass_acc_creation",
//     "manipulation",
//   ];
//   const randomIndex = Math.floor(Math.random() * types.length);
//   return types[randomIndex];
// }

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Triage",
    href: "/dashboard/triage",
    icon: "warning",
    label: "user",
  },
  {
    title: "Rewards",
    href: "/dashboard/rewards",
    icon: "award",
    label: "reward",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
];
