import { fetchUserPenalties } from "@/lib/data";
import { getServerSession } from "next-auth";

export default async function KarmaInfo() {
  const session = await getServerSession();
  const userpenalties = await fetchUserPenalties(session?.user?.email || "");

  return (
    <>
      <div className="text-2xl font-bold">
        {userpenalties[0]?.new_karma || 0}
      </div>

      {userpenalties[0]?.penalty_score ? (
        <>
          <p className="text-xs text-red-500">
            {" "}
            -{userpenalties[0]?.penalty_score || 0} since your last connection
          </p>
        </>
      ) : (
        <p className="text-xs">There is no karma information</p>
      )}
    </>
  );
}
