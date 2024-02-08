import { fetchUserPenalties } from "@/lib/data";

import { ScrollArea } from "@/components/ui/scroll-area";
import { PenaltyBadge } from "../tables/table-penalties/penalty-badge";
import { TriageBadge } from "../tables/table-penalties/triage-badge";
import { Badge } from "../ui/badge";
import { splitAndCapitalize } from "@/lib/utils";

export default async function UserPenalties() {
  const userpenalties = await fetchUserPenalties("borjamrd");

  return (
    <ScrollArea className="h-[200px] w-full">
      {userpenalties?.map((p) => (
        <div
          key={p.id}
          className="flex gap-4 items-center px-3 py-2 rounded-md dark:bg-neutral-900"
        >
          <p className="me-auto text-red-600 text-sm">-{p.penalty_score}</p>
          <TriageBadge type={p.triage} />
          <PenaltyBadge type={p.penalty_type} />
          <Badge className="text-nowrap" variant="secondary">
            {splitAndCapitalize(p.system_recognition)}
          </Badge>
        </div>
      ))}
    </ScrollArea>
  );
}
