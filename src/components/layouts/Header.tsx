import Link from "next/link"
function Header() {
    return (
        <header className="bg-[#F8F8F8] ">
            <div className=" container h-32 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-4xl">Glow Scout</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center">
                    <Link href={"/"} className="mr-8 hover:text-[#351120]">Home </Link>
                    <Link href={"/treatment"} className="mr-8 hover:text-[#351120]">Goals</Link>
                    <Link href={"/spa"} className="mr-8 hover:text-[#351120]">Spas </Link>
                    <Link href={"/"} className="mr-8 hover:text-[#351120]">Blog </Link>
                </nav>
                <button className="inline-flex items-center bg-[#351120] text-[#F6E9CE] border-0 p-3 focus:outline-none text-xl rounded-3xl mt-4 md:mt-0">Sign In/Up
                </button>
            </div>
        </header>
    )
}

export default Header