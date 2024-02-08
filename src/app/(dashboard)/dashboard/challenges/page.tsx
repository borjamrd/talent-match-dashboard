import BreadCrumb from "@/components/breadcrumb";

const breadcrumbItems = [
  { title: "Challenges", link: "/dashboard/challenges" },
];

export default function Challenges() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        CHALLENGES
      </div>
    </>
  );
}
