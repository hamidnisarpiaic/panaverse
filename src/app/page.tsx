import CoreTracks from "./components/widgets/CoreTracks"
import Hero from "./components/widgets/Hero"
import SpecializedTracks from "./components/widgets/SpecializedTracks"
import ProgramOutcome from "./components/widgets/ProgramOutcome"
export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />
        {/* CoreTracks Section */}
         <CoreTracks/> 

         {/* Specilized Tracks */}
        <SpecializedTracks/>
{/* ProgramOutcome Section  */}
<ProgramOutcome/>


      </main>

    </>
  )
}
