import Image from "next/image"
import Link from "next/link"
import Wrapper from "../shared/Wrapper"

const Footer = () => {
    return (

        <footer className="border-slate-300">



            <Wrapper>
                <div className=" flex justify-between bg-white py-4  items-center">
                    <div>
                        {/* logo  */}
                        {/* <h2 className="text-xl"> Panaverse Dao</h2> */}
                        <Image src={"/logo.png"} alt="Panaverse dao logo" width={100} height={100} />


                    </div>

                    {/* Navigation Bar */}
                    <div>
                    </div>
                    <ul className="flex space-x-7 font-medium">
                        <li>
                            <Link href={"/"}>
                                Home
                            </Link>

                        </li>
                        <li>
                            <Link href={"/courses"}>
                                Courses
                            </Link>

                        </li>

                    </ul>





                </div>

            </Wrapper>




        </footer>




    )
}

export default Footer
