"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Reward } from "@/constants/data";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";

interface RewardProps {
  data: Reward[];
}

export const Rewards: React.FC<RewardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`🎇Rewards (${data.length})`}
          description="Manage rewards in order to increase user's Karma"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => alert("Send confirmation")}
        >
          <Check className="mr-2 h-4 w-4" /> Mark as checked
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="reward_type" columns={columns} data={data} />
    </>
  );
};
