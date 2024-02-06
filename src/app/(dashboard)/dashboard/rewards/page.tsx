import BreadCrumb from "@/components/breadcrumb";
import { Rewards } from "@/components/tables/table-rewards/rewards";
import { rewards } from "@/constants/data";

const breadcrumbItems = [{ title: "Reward", link: "/dashboard/rewards" }];
export default function RewardsPage() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Rewards data={rewards} />
      </div>
    </>
  );
}
