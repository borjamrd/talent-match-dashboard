import { Badge } from "@/components/ui/badge";
import { Triage } from "@/constants/data";
import { splitAndCapitalize } from "@/lib/utils";
interface TriageBadgeActionProps {
  type: Triage;
}
export const TriageBadge: React.FC<TriageBadgeActionProps> = ({ type }) => {
  const bgColor: Record<Triage, string> = {
    low: "bg-orange-500/30 text-orange-600 dark:text-orange-300",
    critical: "bg-red-600/30  text-red-600 dark:text-red-300",
    medium: "bg-yellow-400/30  dark:text-yellow-100 text-yellow-700",
  };

  return (
    <Badge
      variant="secondary"
      className={"text-xs text-white " + bgColor[type]}
      key={type}
    >
      {splitAndCapitalize(type)}
    </Badge>
  );
};
