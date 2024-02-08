"use client";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { rewardsScoringColumns, rewardsScoringData } from "@/constants/data";
import { BasicDataTable } from "../basic-table";

interface RewardProps {}

export const RewardsScoring: React.FC<RewardProps> = ({}) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Rewards scoring`}
          description="Each infraction has his own scoring in order to assign a triage value"
        />
      </div>
      <Separator />
      <BasicDataTable
        columns={rewardsScoringColumns}
        rows={rewardsScoringData}
      />
    </>
  );
};
