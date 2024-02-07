import { Badge } from "@/components/ui/badge";
import { Reward, RewardType } from "@/constants/data";
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
    function splitAndCapitalize(str: string) {
        const words = str.split("_");
        const capitalizedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        return capitalizedWords.join(" ");
    }

    const icons: Record<RewardType, JSX.Element> = {
        "10k_reached": (
            <Trophy
                strokeWidth={1.2}
                className="me-3 text-slate-700 dark:text-slate-300"
            />
        ),
        like: (
            <ThumbsUp
                strokeWidth={1.2}
                className="me-3 text-slate-700 dark:text-slate-300"
            />
        ),
        new_post: (
            <BookHeart
                strokeWidth={1.2}
                className="me-3 text-slate-700 dark:text-slate-300"
            />
        ),
        post_answer: (
            <Speech
                strokeWidth={1.2}
                className="me-3 text-slate-700 dark:text-slate-300"
            />
        ),
        "1k_reached": (
            <HandMetal
                strokeWidth={1.2}
                className="me-3 text-slate-700 dark:text-slate-300"
            />
        ),
        "5k_reached": (
            <Rocket
                strokeWidth={1.2}
                className="me-3 text-slate-700 dark:text-slate-300"
            />
        ),
        follow: (
            <UserPlus
                strokeWidth={1.2}
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
