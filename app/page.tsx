import dynamic from "next/dynamic";
import Appbar from "@/components/Appbar";
import { SpotlightPreview } from "@/components/Spotlight-new";
import Experience from "@/components/Experience";

const Contact = dynamic(() => import("@/components/Contact").then((mod) => mod.Contact));
const Footer = dynamic(() => import("@/components/Footer"));
const SpotlightNewDemo2 = dynamic(() => import("@/components/Sparkels").then((mod) => mod.SpotlightNewDemo2));
const TimelineDemo = dynamic(() => import("@/components/Timeline").then((mod) => mod.TimelineDemo));
const SpotlightPreview2 = dynamic(() => import("@/components/Tech").then((mod) => mod.SpotlightPreview2));

export default function Home() {
  return (
    <div >
      <div>
        <Appbar />
        <SpotlightPreview />
        <TimelineDemo />
        <Experience />
        <SpotlightPreview2 />
        <SpotlightNewDemo2 />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
