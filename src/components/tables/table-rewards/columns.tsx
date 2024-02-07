"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Reward } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";
import { RewardBadge } from "./reward-badge";

export const columns: ColumnDef<Reward>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value: any) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value: any) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "user_id",
        header: "User id",
    },
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "reward_type",
        header: "Reward type",
        cell: ({ row }) => (
            <RewardBadge type={row.original.reward_type}></RewardBadge>
        ),
    },
    {
        accessorKey: "time",
        header: "Time",
    },
    {
        accessorKey: "current_karma",
        header: "Current Karma",
    },
    {
        accessorKey: "reward_score",
        header: "Score",
    },
    {
        accessorKey: "new_karma",
        header: "New Karma",
    },
    {
        accessorKey: "reviewed",
        header: "Reviewed",
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];
