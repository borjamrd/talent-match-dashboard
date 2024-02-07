import { Badge } from "@/components/ui/badge";
import { Penalty, PenaltyType, iconprops } from "@/constants/data";
import { splitAndCapitalize } from "@/lib/utils";
import {
  Trophy,
  ThumbsUp,
  BookHeart,
  HandMetal,
  Rocket,
  UserPlus,
  Speech,
  Drama,
  DatabaseZap,
  Workflow,
  Repeat,
  ThumbsDown,
} from "lucide-react";
interface PenaltyBadgeActionProps {
  type: PenaltyType;
}
export const PenaltyBadge: React.FC<PenaltyBadgeActionProps> = ({ type }) => {
  const icons: Record<PenaltyType, JSX.Element> = {
    auto_like: (
      <ThumbsDown
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
    auto_post: (
      <Repeat
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
    auto_reply: (
      <Workflow
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
    cross_interaction: (
      <Speech
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
    follow_back: (
      <UserPlus
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
    manipulation: (
      <Drama
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
    mass_acc_creation: (
      <DatabaseZap
        size={iconprops.size}
        strokeWidth={iconprops.width}
        className="me-3 text-slate-700 dark:text-slate-300"
      />
    ),
  };

  return (
    <Badge
      variant="secondary"
      className="text-xs text-nowrap bg-red-600/10"
      key={type}
    >
      {icons[type]}
      {splitAndCapitalize(type)}
    </Badge>
  );
};
