import { fetchUserPenalties } from "@/lib/data";
import { getServerSession } from "next-auth";

export default async function KarmaInfo() {
  const session = await getServerSession();
  const userpenalties = await fetchUserPenalties(session?.user?.email || "");

  console.log(userpenalties);

  return (
    <>
      <div className="text-2xl font-bold">{userpenalties[0]?.new_karma}</div>
      <p className="text-xs text-red-500">
        -{userpenalties[0]?.penalty_score} since your last connection
      </p>
    </>
  );
}
