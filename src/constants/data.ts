import { NavItem } from "@/types";

export const iconprops = {
  width: 1.3,
  size: "18px",
};

export type RewardType =
  | "new_post"
  | "like"
  | "post_answer"
  | "follow"
  | "1k_reached"
  | "5k_reached"
  | "10k_reached";

export type GamificationTypes =
  | "fresh_author"
  | "friendly_admirer"
  | "answer_expert"
  | "loyal_follower"
  | "milestone_achiever"
  | "popular_contributor"
  | "elite_influencer";

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
    title: "Challenges",
    href: "/dashboard/challenges",
    icon: "sword",
    label: "challenges",
  },
  {
    title: "Rules",
    href: "/dashboard/rules",
    icon: "scale",
    label: "rules",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
];
