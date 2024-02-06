import BreadCrumb from "@/components/breadcrumb";
import { Penalties } from "@/components/tables/table-penalties/penalties";
import { Penalty } from "@/constants/data";
import { fetchPenalties } from "@/lib/data";

const breadcrumbItems = [{ title: "Triage", link: "/dashboard/triage" }];

export default async function Triage() {
  const penalties: Penalty[] = await fetchPenalties();

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Penalties data={penalties} />
      </div>
    </>
  );
}
