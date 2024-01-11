import CoreTracks from "./components/widgets/CoreTracks"
import Hero from "./components/widgets/Hero"
import SpecializedTracks from "./components/widgets/SpecializedTracks"
import ProgramOutcome from "./components/widgets/ProgramOutcome"
import Footer from "./components/shared/Footer"
import Wrapper from "./components/shared/Wrapper"
export default function Home() {
  return (
    <>
      <main>
    <Wrapper>


  {/* Hero Section */}
  <Hero />
        {/* CoreTracks Section */}
         <CoreTracks/> 

         {/* Specilized Tracks */}
        <SpecializedTracks/>
{/* ProgramOutcome Section  */}
<ProgramOutcome/>

<Footer/>

    </Wrapper>

      
      </main>

    </>
  )
}




