import { iconprops } from "@/constants/data";
import { Check, X } from "lucide-react";
interface ReviewedProps {
  reviewed: boolean;
}
export const Reviewed: React.FC<ReviewedProps> = ({ reviewed }) => {
  return (
    <div>
      {reviewed ? (
        <Check size={iconprops.size} />
      ) : (
        <X size={iconprops.size} className="text-red-600" />
      )}
    </div>
  );
};
