import { metadata } from "./../app/layout";
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
    title: "Description",
    value: "description",
  },
  {
    title: "Scoring",
    value: "scoring",
  },
];

export const rewardsScoringData: {
  type: RewardType;
  scoring: number;
  description: string;
}[] = [
  {
    type: "follow",

    description:
      "This reward is earned when a user gains a new follower on the platform. It acknowledges users for their influence or the value they bring to the community, encouraging them to continue engaging with others and sharing meaningful content.",
    scoring: +342,
  },
  {
    type: "like",

    description:
      "This reward is granted when a user's post receives a certain number of likes or positive reactions from other users. It serves as positive reinforcement for creating valuable or popular content and encourages users to continue sharing content that resonates with the community",
    scoring: +560,
  },
  {
    type: "new_post",

    description:
      "This reward is triggered when a user creates a new post on the platform. It encourages users to contribute their thoughts, ideas, or content to the community, fostering engagement and activity.",
    scoring: 797,
  },
  {
    type: "post_answer",

    description:
      "This reward is triggered when a user's question or post receives an answer or response from another user. It incentivizes users to actively participate in discussions and helps build a sense of community by facilitating interactions and knowledge-sharing.",
    scoring: 1000,
  },
  {
    type: "1k_reached",

    description:
      "This reward is unlocked when a user's post or contribution reaches a milestone of 1,000 views or interactions. It celebrates the user's achievement and encourages them to create more engaging or impactful content to reach even larger audiences.",
    scoring: 1500,
  },
  {
    type: "5k_reached",

    description:
      "Similar to 1k_reached this reward is triggered when a user's post or contribution reaches a milestone of 5,000 views or interactions. It serves as further recognition of the user's success and motivates them to continue producing high-quality content.",
    scoring: 3000,
  },
  {
    type: "10k_reached",

    description:
      "his reward is achieved when a user's post or contribution reaches a significant milestone of 10,000 views or interactions. It signifies exceptional success and influence within the community, motivating the user to maintain their level of engagement and contribution.",
    scoring: 6000,
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

export const penaltiesScoringData: {
  type: PenaltyType;
  description: string;
  scoring: number;
  action: string;
}[] = [
  {
    type: "auto_like",
    description:
      "This penalty is imposed when a user is found using automated methods to artificially inflate the number of likes or reactions on their posts or others' posts. It undermines the integrity of engagement metrics and can distort the perception of popularity or relevance.",
    scoring: -120,
    action: "warning",
  },
  {
    type: "auto_post",
    description:
      "This penalty is applied when a user is detected using automated tools or scripts to generate and post content on the platform. It violates the principles of authentic engagement and can lead to a decrease in the quality of content on the platform.",
    scoring: -300,
    action: "Warning",
  },
  {
    type: "auto_reply",
    description:
      " This penalty is triggered when a user is observed using automated responses or bots to interact with other users or reply to comments. It diminishes the authenticity of interactions and can disrupt genuine communication within the community.",
    scoring: -560,
    action: "Warning",
  },
  {
    type: "follow_back",
    description:
      "This penalty is enforced when a user engages in the practice of automatically following other users solely for the purpose of gaining followers in return. It detracts from the genuine connection-building aspect of following and can lead to a superficial sense of community.",
    scoring: -802,
    action: "warning",
  },
  {
    type: "cross_interaction",
    description:
      "This penalty is applied when a user engages in inappropriate or unethical interactions across multiple accounts or platforms to manipulate outcomes or deceive others. It violates the principles of fair play and can damage trust within the community.",
    scoring: -1240,
    action: "warning",
  },
  {
    type: "mass_acc_creation",
    description:
      "This penalty is imposed when a user is found creating multiple accounts in a short period, often for the purpose of circumventing restrictions or engaging in fraudulent activities. It undermines the integrity of user accounts and can disrupt the overall functioning of the platform",
    scoring: -2500,
    action: "Suspension",
  },
  {
    type: "manipulation",
    description:
      "This penalty is applied when a user is detected engaging in manipulative tactics to artificially influence metrics, algorithms, or other users' behavior on the platform. It undermines the fairness and integrity of the platform's ecosystem and can lead to a distorted user experience for others.",
    scoring: -3900,
    action: "Suspension",
  },
];
