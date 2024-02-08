import BreadCrumb from "@/components/breadcrumb";

const breadcrumbItems = [{ title: "Rules", link: "/dashboard/rules" }];

export default function Rules() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        Rules
      </div>
    </>
  );
}
