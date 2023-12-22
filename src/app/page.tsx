import Image from "next/image";
import { DashboardContainer } from "~~/modules/dashboard";

export default function Home() {
  return (
    <main className="Container">
      <DashboardContainer />
    </main>
  );
}
