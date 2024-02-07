"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Penalty } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { PenaltyBadge } from "./penalty-badge";
import { TriageBadge } from "./triage-badge";

export const columns: ColumnDef<Penalty>[] = [
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
        accessorKey: "penalty_type",
        header: "Penalty type",
        cell: ({ row }) => <PenaltyBadge type={row.original.penalty_type} />,
    },
    {
        accessorKey: "system_recognition",
        header: "System recognition",
    },
    {
        accessorKey: "time",
        header: "Time",
    },
    {
        accessorKey: "triage",
        header: "Triage",
        cell: ({ row }) => <TriageBadge type={row.original.triage} />,
    },
    {
        accessorKey: "penalty_score",
        header: "Penalty score",
    },
    {
        accessorKey: "current_karma",
        header: "Current karma",
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
