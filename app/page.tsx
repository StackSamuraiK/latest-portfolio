import Appbar from "@/components/Appbar";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { SpotlightNewDemo2 } from "@/components/Sparkels";
import { SpotlightPreview } from "@/components/Spotlight-new";
import { TimelineDemo } from "@/components/Timeline";
import { SpotlightPreview2 } from "@/components/Tech";
import ModernSkillsCard from "@/components/Spotlight";





export default function Home() {
  return (
    <div >
      <div>
        <Appbar/>
        <SpotlightPreview/>
        <TimelineDemo/>
        <ModernSkillsCard/>
        {/* <VortexDemo/> */}
        {/* <SparklesPreview/> */}
        <SpotlightPreview2/>
        <SpotlightNewDemo2/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
