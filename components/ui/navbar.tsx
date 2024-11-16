import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 pt-0 justify-center border-b border-gray-100">
      <div className="flex-1 flex">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={300}
            height={500}
            className="w-40 sm:w-48 md:w-52 lg:w-56"
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="">
              <button className="btn-ghost group relative h-12 rounded-full border border-neutral-200 bg-transparent px-4 sm:h-10 sm:px-3">
                <span className="relative inline-flex overflow-hidden">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[120%] group-hover:skew-y-12">
                    Find Auroras
                  </div>
                  <div className="absolute translate-y-[120%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                    Find Auroras
                  </div>
                </span>
              </button>
            </Link>
          </li>
          <li className="flex justify-center">
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                value="night"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1 scale-125 sm:scale-100"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1 scale-125 sm:scale-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1 scale-125 sm:scale-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
