import BreadCrumb from "@/components/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GamificationTypes, badgesGamification } from "@/constants/data";
import { splitAndCapitalize } from "@/lib/utils";
import Image from "next/image";

const breadcrumbItems = [
  { title: "Challenges", link: "/dashboard/challenges" },
];

export default function Challenges() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <BreadCrumb items={breadcrumbItems} />

      <ScrollArea className="h-full">
        <div className="flex flex-col gap-10">
          {badgesGamification.map((b) => (
            <div key={b.type} className="flex flex-col px-3 py-1 gap-2">
              <div className="flex gap-5 items-center">
                <Image height={45} width={45} alt="gam4" src={b.path} />
                <div className="flex flex-col">
                  <p className="font-semibold">{splitAndCapitalize(b.type)}</p>
                  <p className="text-sm text-green-700">
                    +{b.karma} Karma points
                  </p>
                </div>
              </div>
              <p className="text-wrap text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
