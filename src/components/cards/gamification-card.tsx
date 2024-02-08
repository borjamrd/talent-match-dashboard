/* eslint-disable react/no-unescaped-entities */
import { badgesGamification } from "@/constants/data";
import { splitAndCapitalize } from "@/lib/utils";
import { ScrollArea } from "@/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const GamificationCard = ({ children }: any) => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>🚀 What's next</CardTitle>
        <CardDescription>
          Here you can see your next{" "}
          <Link className="underline" href="/dashboard/challenges">
            challenges
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ScrollArea className="h-[200px] w-full">
          {badgesGamification.map((b) => (
            <div
              key={b.type}
              className="px-3 py-1 mb-1 flex gap-3 items-center"
            >
              <Image
                height={30}
                width={30}
                alt="gam4"
                src={b.path}
                className={!b.achieved ? "opacity-30" : ""}
              />
              <p className="text-xs text-muted-foreground">
                {splitAndCapitalize(b.type)}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
