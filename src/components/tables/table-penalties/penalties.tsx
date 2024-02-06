"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Penalty } from "@/constants/data";
import { Check } from "lucide-react";
import { columns } from "./columns";

interface PenaltyProps {
  data: Penalty[];
}

export const Penalties: React.FC<PenaltyProps> = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`🔻Triage (${data.length})`}
          description="Manage penalties in order to decrease user's Karma"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => alert("Send confirmation")}
        >
          <Check className="mr-2 h-4 w-4" /> Mark as checked
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="triage" columns={columns} data={data} />
    </>
  );
};
