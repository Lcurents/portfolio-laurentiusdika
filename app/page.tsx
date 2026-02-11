import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="flex gap-[2%] min-h-screen flex-wrap content-start">
        <div className="w-1/4 h-3/4">Sidebar</div>
        <div className="grow h-3/4">Content</div>
      </div>
    </>
  );
}
