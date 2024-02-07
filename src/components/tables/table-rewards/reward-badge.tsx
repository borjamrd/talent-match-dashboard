import { Badge } from "@/components/ui/badge";
import { Reward, RewardType, iconprops } from "@/constants/data";
import { splitAndCapitalize } from "@/lib/utils";
import {
  Trophy,
  ThumbsUp,
  BookHeart,
  HandMetal,
  Rocket,
  UserPlus,
  Speech,
} from "lucide-react";
interface RewardBadgeActionProps {
  type: RewardType;
}
export const RewardBadge: React.FC<RewardBadgeActionProps> = ({ type }) => {
  const icons: Record<RewardType, JSX.Element> = {
    "10k_reached": (
      <Trophy
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
    like: (
      <ThumbsUp
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
    new_post: (
      <BookHeart
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
    post_answer: (
      <Speech
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
    "1k_reached": (
      <HandMetal
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
    "5k_reached": (
      <Rocket
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
    follow: (
      <UserPlus
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
  };

  return (
    <Badge variant="secondary" className="text-xs" key={type}>
      {icons[type]}
      {splitAndCapitalize(type)}
    </Badge>
  );
};
