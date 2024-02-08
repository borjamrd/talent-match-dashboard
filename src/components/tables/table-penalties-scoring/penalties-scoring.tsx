"use client";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import {
  penaltiesScoringColumns,
  penaltiesScoringData,
  rewardsScoringColumns,
  rewardsScoringData,
} from "@/constants/data";
import { BasicDataTable } from "../basic-table";

interface PenaltiesScoring {}

export const PenaltiesScoring: React.FC<PenaltiesScoring> = ({}) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Penalties scoring`}
          description="Manage rewards in order to increase user's Karma"
        />
      </div>
      <Separator />
      <BasicDataTable
        columns={penaltiesScoringColumns}
        caption="Penalties scoring"
        rows={penaltiesScoringData}
      />
    </>
  );
};
