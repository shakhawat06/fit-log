import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/workout">Workout</Link>
      </li>
      <li>
        <Link href="/myplan">My Plan</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-300 border-b border-gray-700 mx-auto px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="flex gap-3 items-center text-xl">
            <Image src={logo} height={20} width={20} alt="logo" />
            <span className="font-bold">FITLOG</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-bold">
            <li>
              <Link
                className="rounded-full hover:text-[#C0F800] hover:bg-[#202819]"
                href="/workout"
              >
                Workout
              </Link>
            </li>
            <li>
              <Link
                className="rounded-full hover:text-[#C0F800] hover:bg-[#202819]"
                href="/myplan"
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <Link href="" className="">
            My Plan <span className="ml-2 border bg-[#C2F800] text-black px-2 rounded-full">0</span>
          </Link>
          <Link href="" className="">
            Saved <span className="ml-2 border border-gray-100 px-2 rounded-full">0</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
