import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const KarmaCard = ({ children }: any) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Karma</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
