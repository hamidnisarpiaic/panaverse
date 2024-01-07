import Wrapper from "../shared/Wrapper";
import HeroPoster from '@/app/assets/images/hero.png';
import HeroPoster2 from '@/app/assets/images/hero.png'
import Image from "next/image";
import Button from "../shared/Button";

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex flex-col md:flex-row items-center">
                    {/* left side */}
                    <div className="flex-1 p-2 mr-4">
                        <h4 className="text-teal-800 font-semibold text-lg mt-4">President Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                        <h1 className="text-5xl sm:text-6xl font-bold mt-2 text-gray-900 md:text-red-500 lg:text-blue-700">Certified Web 3.0 and Metaverse Developer</h1>
                        <p className="text-justify text-xl mt-6 text-slate-900">
                        A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
                        <p className="mt-4 text-slate-900">
                        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                        </p>
                        </p>
                     <div className="mt-5">
                     <Button text={"Enroll Now"}/>
                     </div>
                     
                      
                    </div>

                    {/* right side */}
                    <div className="flex-1">
                        <Image src={HeroPoster} alt="Hamid1" />
                      
                                            </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Hero;
