import Image from "next/image"
import Link from "next/link"
import Wrapper from "../shared/Wrapper"

const Header = () => {
    return (
       
        <header className="sticky top-0 z-10">


      
<Wrapper>
            <div className=" flex justify-between bg-white py-4  items-center">
                <div>
                    {/* logo  */}
                    {/* <h2 className="text-xl"> Panaverse Dao</h2> */}
                    <Image src={"/logo.png"} alt="Panaverse dao logo" width={100} height={100} />


                </div>

                {/* Navigation Bar */}
                <ul className="flex space-x-8 font-medium">
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




        </header>




    )
}

export default Header
