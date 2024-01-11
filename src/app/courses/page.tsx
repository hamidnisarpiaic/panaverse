import meta from '@/app/assets/images/outcome-poster.webp';
import poster from '@/app/assets/images/bg.png'
import Image from 'next/image';
import Wrapper from '../components/shared/Wrapper';
import CoreTracks from '../components/widgets/CoreTracks';
import SpecializedTracks from '../components/widgets/SpecializedTracks';
import ProgramOutcome from '../components/widgets/ProgramOutcome';
import Footer from '../components/shared/Footer';
function Courses() {
  return (
    <main>
      <Wrapper>
<div className='flex flex-row bg-blue-900'>
  <div className='flex-1'>
  <Image src={meta} alt="background1" width={600} height={500} />
  </div>
<div className='flex-1'>
<Image src={poster} alt="background" width={600} height={500} />
</div>

 
{/*  */}
</div>
     
<CoreTracks/> 

{/* Specilized Tracks */}
<SpecializedTracks/>
{/* ProgramOutcome Section  */}
<ProgramOutcome/>
<Footer/>

      </Wrapper>
     

    </main>
  );
}

export default Courses;

