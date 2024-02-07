import { Badge } from "@/components/ui/badge";
import { Triage } from "@/constants/data";
interface TriageBadgeActionProps {
    type: Triage;
}
export const TriageBadge: React.FC<TriageBadgeActionProps> = ({ type }) => {
    function splitAndCapitalize(str: string) {
        const words = str.split("_");
        const capitalizedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        return capitalizedWords.join(" ");
    }

    const bgColor: Record<Triage, string> = {
        low: "bg-orange-500/30 text-orange-300",
        critical: "bg-red-600/30 text-red-300",
        medium: "bg-yellow-400/30  text-yellow-100",
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
