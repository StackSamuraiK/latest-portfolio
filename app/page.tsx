import Appbar from "@/components/Appbar";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { SparklesPreview } from "@/components/Sparkels";
import { SpotlightNewDemo } from "@/components/Spotlight";
import { SpotlightPreview } from "@/components/Spotlight-new";
import { TimelineDemo } from "@/components/Timeline";
import { VortexDemo } from "@/components/Vortex";



export default function Home() {
  return (
    <div >
      <div>
        <Appbar/>
        <SpotlightPreview/>
        <SpotlightNewDemo/>
        <TimelineDemo/>
        <VortexDemo/>
        <SparklesPreview/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
