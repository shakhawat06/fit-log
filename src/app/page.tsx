import Hero from "@/components/home/Hero";
import FitCard from "@/components/shared/FitCard";
import { Ifitlog } from "@/types/FitLogType";

const getFitlogData = async (): Promise<Ifitlog[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  return await res.json();
};

export default async function Home() {
  const fitlogs = await getFitlogData();

  return (
    <>
      <Hero />

      <div className="bg-base-300">
        <div className="container mx-auto py-20 px-10">
          <div className="space-y-3 mb-10">
            <h2 id="library" className="text-3xl font-bold">THE LIBRARY</h2>
            <p className="text-[#9CA3AF]">
              Six lifts covering every major muscle group.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {fitlogs.slice(0, 6).map((fitlog: Ifitlog) => (
              <FitCard key={fitlog.id} fitlog={fitlog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
