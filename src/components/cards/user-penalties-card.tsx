"use client";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";

export const UserPenaltiesCard = ({ children }: any) => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Card className="col-span-4 md:col-span-3">
        <CardHeader>
          <CardTitle>🔻 Karma penalties</CardTitle>
          <CardDescription>
            Here will appear your Karma penalties if you do not follow the{" "}
            <Link className="underline" href={"#"}>
              Karma Rules
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    );
  }
};
