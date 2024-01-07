import Wrapper from '../shared/Wrapper';
import Outcome from '@/app/assets/images/outcome-poster.webp';
import Image from 'next/image';
// I assumed 'icons' is not used in the code

const outcomePoints = ["Product Ownership", "Freelancing", "Global Marketing by Panaverse DAO", "Boosting Economy."];

function ProgramOutcome() {
    return (
        <section className='mt-16 md:mt-28'>
            <Wrapper>
                <div className="flex gap-x-8 items-center flex-col-reverse md:flex-row">
                    {/* Left - Image */}
                    <div className='flex-1'>
                        <Image src={Outcome} alt="Outcome-Image" width={500} height={500} />
                    </div>

                    {/* Right - Content */}
                    <div className='flex-1'>
                        {/* Your content goes here */}
                        <h2 className='font-bold text-4xl'>The Outcome for Participants of the Program</h2>
                        <p className='text-slate-600 mt-4 text-lg'>As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.</p>
                        <div className='mt-6 grid grid-cols-2 gap-4'>
                            {outcomePoints.map((item, i) => (
                                <div key={i} className='flex items-center'>
                                    <svg width="20" height="20" viewBox="0 0 15 15" fill="#00Eif0" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 3H12V12H3L3 3ZM2 3C2 2.44771 2.44772 2 3 2H12C12.5523 2 13 2.44772 13 3V12C13 12.5523 12.5523 13 12 13H3C2.44771 13 2 12.5523 2 12V3ZM10.3498 5.51105C10.506 5.28337 10.4481 4.97212 10.2204 4.81587C9.99275 4.65961 9.6815 4.71751 9.52525 4.94519L6.64048 9.14857L5.19733 7.40889C5.02102 7.19635 4.7058 7.16699 4.49327 7.34329C4.28073 7.5196 4.25137 7.83482 4.42767 8.04735L6.2934 10.2964C6.39348 10.4171 6.54437 10.4838 6.70097 10.4767C6.85757 10.4695 7.00177 10.3894 7.09047 10.2601L10.3498 5.51105Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                    </svg>
                                    <h3 className='font-lg font-medium ml-2'>{item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default ProgramOutcome;
