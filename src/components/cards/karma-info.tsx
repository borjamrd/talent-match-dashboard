import { fetchUserPenalties } from "@/lib/data";

export default async function KarmaInfo() {
  const userpenalties = await fetchUserPenalties("borjamrd");

  console.log(userpenalties);

  return (
    <>
      <div className="text-2xl font-bold">459</div>
      <p className="text-xs text-red-500">-750 since your last connection</p>
    </>
  );
}
