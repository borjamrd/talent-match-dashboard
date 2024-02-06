import BreadCrumb from "@/components/breadcrumb";
import { Penalties } from "@/components/tables/table-penalties/penalties";
import { penalties } from "@/constants/data";

const breadcrumbItems = [{ title: "Triage", link: "/dashboard/triage" }];
export default function Triage() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Penalties data={penalties} />
      </div>
    </>
  );
}
