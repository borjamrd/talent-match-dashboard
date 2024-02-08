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
    title: "Rules & scoring",
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

export const badgesGamification: {
  type: GamificationTypes;
  description: string;
  path: string;
  achieved?: boolean;
  karma: number;
}[] = [
  {
    karma: 120,
    type: "fresh_author",
    path: "/gamification1.png",
    achieved: true,
    description:
      "Awarded to users when they publish their first post on the platform, encouraging them to contribute and engage with the community",
  },
  {
    karma: 1320,
    type: "answer_expert",
    path: "/gamification2.png",
    achieved: true,
    description:
      "Given to users who consistently show appreciation for others content by liking it, promoting positive interactions and fostering a supportive atmosphere.",
  },
  {
    karma: 2250,
    type: "friendly_admirer",
    path: "/gamification3.png",
    achieved: false,
    description:
      " Recognizes users who actively participate by providing helpful responses to questions or discussions, contributing to the knowledge sharing and problem-solving aspect of the community.",
  },
  {
    karma: 4500,
    type: "loyal_follower",
    path: "/gamification4.png",
    achieved: false,
    description:
      "Acknowledges users who follow other members, indicating an interest in their content and promoting connections within the community.",
  },
];

export const rewardsScoringColumns: { title: string; value: string }[] = [
  {
    title: "Type",
    value: "type",
  },

  {
    title: "Scoring",
    value: "scoring",
  },
  {
    title: "Description",
    value: "description",
  },
];

export const rewardsScoringData: {
  type: RewardType;
  scoring: number;
  description: string;
}[] = [
  {
    type: "follow",
    scoring: +342,
    description:
      "This reward is earned when a user gains a new follower on the platform. It acknowledges users for their influence or the value they bring to the community, encouraging them to continue engaging with others and sharing meaningful content.",
  },
  {
    type: "like",
    scoring: +560,
    description:
      "This reward is granted when a user's post receives a certain number of likes or positive reactions from other users. It serves as positive reinforcement for creating valuable or popular content and encourages users to continue sharing content that resonates with the community",
  },
  {
    type: "new_post",
    scoring: 797,
    description:
      "This reward is triggered when a user creates a new post on the platform. It encourages users to contribute their thoughts, ideas, or content to the community, fostering engagement and activity.",
  },
  {
    type: "post_answer",
    scoring: 1000,
    description:
      "This reward is triggered when a user's question or post receives an answer or response from another user. It incentivizes users to actively participate in discussions and helps build a sense of community by facilitating interactions and knowledge-sharing.",
  },
  {
    type: "1k_reached",
    scoring: 1500,
    description:
      "This reward is unlocked when a user's post or contribution reaches a milestone of 1,000 views or interactions. It celebrates the user's achievement and encourages them to create more engaging or impactful content to reach even larger audiences.",
  },
  {
    type: "5k_reached",
    scoring: 3000,
    description:
      "Similar to 1k_reached this reward is triggered when a user's post or contribution reaches a milestone of 5,000 views or interactions. It serves as further recognition of the user's success and motivates them to continue producing high-quality content.",
  },
  {
    type: "10k_reached",
    scoring: 6000,
    description:
      "his reward is achieved when a user's post or contribution reaches a significant milestone of 10,000 views or interactions. It signifies exceptional success and influence within the community, motivating the user to maintain their level of engagement and contribution.",
  },
];

export const penaltiesScoringColumns = [
  {
    title: "Type",
    value: "type",
  },
  {
    title: "description",
    value: "description",
  },
  {
    title: "Action",
    value: "action",
  },
  {
    title: "Scoring",
    value: "scoring",
  },
];

export const penaltiesScoringData = [
  {
    scoring: "row1",
    description: "lorem",
    karma: 122,
    action: "lorem",
  },
  {
    scoring: "row2",
    description: "lorem",
    karma: 121,
    action: "lorem",
  },
];
