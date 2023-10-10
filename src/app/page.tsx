import Navigation from "@/app/navigation";
import BottomNav from "@/app/bottom-nav";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center bg-gray-900">
      <Navigation />
      <BottomNav />
    </main>
  );
}
