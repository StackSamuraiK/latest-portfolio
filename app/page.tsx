import Appbar from "@/components/Appbar";
import { AuroraBackgroundDemo } from "@/components/Aurora";
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
        <VortexDemo/>
        <TimelineDemo/>
        <SparklesPreview/>
        <AuroraBackgroundDemo/>
      </div>
    </div>
  );
}
