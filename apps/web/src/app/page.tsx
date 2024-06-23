import DashHeader from "@/components/ui/dash-header";
import ProfileCard from "@/components/ui/profile-card";
import Sidebar from "@/components/ui/sidebar";

export default function Home() {
  return (
    <main className="flex w-full h-screen">
      <Sidebar />
      <section className="flex-1 h-full overflow-y-scroll p-5">
        <DashHeader />
        <div className="w-full flex">
          <ProfileCard />
          export default
        </div>
      </section>
    </main>
  );
}
