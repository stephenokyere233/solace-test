import DashContent from "@/components/dash-content";
import DashHeader from "@/components/ui/dash-header";
import Sidebar from "@/components/ui/sidebar";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main className="flex w-full h-screen overflow-clip">
      <Sidebar />
      <section className="flex-1 h-full space-y-10 p-5 ">
        <DashHeader />
        <Box component="section" className="w-full flex gap-10 sticky top-0">
          <DashContent />
        </Box>
      </section>
    </main>
  );
}
