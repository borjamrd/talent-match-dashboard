import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface BasicTableProps {
  columns: { title: string; value: string }[];
  rows: any[];
}

export const BasicDataTable: React.FC<BasicTableProps> = ({
  columns,
  rows,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((c) => (
            <TableHead key={c.value} className="min-w-fit max-w-fit">
              {c.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r, i) => (
          <TableRow key={i}>
            {columns.map((c, ic) => (
              <TableCell
                key={c.title}
                className="min-w-fit font-medium text-wrap"
              >
                {r[c.value]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
