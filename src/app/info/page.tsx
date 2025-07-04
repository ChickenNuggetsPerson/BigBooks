import IconBackground from "@/components/Decorative/IconBackground/IconBackground";
import DevCard from "@/components/dev/devCard";


export default function Home() {

  return (
    <>
      <IconBackground />
      <div className="grid justify-items-center p-8 pb-20 gap-16 h-screen overflow-scroll" style={{ scrollbarWidth: "none" }}>
        <DevCard />
      </div>
    </>
  );
}