import BreadCrumb from "@/components/breadcrumb";
import { PenaltiesScoring } from "@/components/tables/table-penalties-scoring/penalties-scoring";
import { RewardsScoring } from "@/components/tables/table-reward-scoring/rewards-scoring";
import { DataTable } from "@/components/ui/data-table";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [{ title: "Rules", link: "/dashboard/rules" }];

export default function Rules() {
  const sections = [
    {
      name: "Reward scoring",
      data: [],
    },
  ];
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="rounded bg-slate-100 dark:bg-neutral-900 p-4">
          <p>
            At Talent Match, we are committed to fostering a positive and
            productive environment for all users of our application. To ensure
            that everyone can enjoy the benefits of our platform, we have
            established this Good Use Policy outlining the behaviors that are
            not tolerated and the importance of promoting responsible usage.
          </p>
        </div>
        <ScrollArea className="h-[40rem]">
          <div className="flex flex-col gap-5">
            <RewardsScoring />
            <PenaltiesScoring />
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
