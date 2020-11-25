import style from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NavBar() {
  const [hasDropdown, sethasDropdown] = useState(false);

  const router = useRouter();
  console.log(router.pathname);

  const handleDropdown = () => {
    sethasDropdown((prev) => !prev);
  };

  return (
    <nav
      className={`sec fixed top-0 w-full z-10 ${style.nav} bg-green-50 flex justify-center items-center`}
    >
      <div
        className={`flex justify-between items-center w-full h-full content`}
      >
        <div className={style.logo}>
          <Link href="/#">
            <a>&lt;bruno /&gt;</a>
          </Link>
        </div>
        <div className={`flex`}>
          <div className="hover:text-red-400 hidden px-4 md:block cursor-pointer">
            <Link href="/about">
              <a>about</a>
            </Link>
          </div>
          <div className="hover:text-red-400 hidden px-4 md:block cursor-pointer">
            <Link href="/work">
              <a>work</a>
            </Link>
          </div>
          <div className="hover:text-red-400 hidden px-4 md:block cursor-pointer">
            <Link href="/projects">
              <a>projects</a>
            </Link>
          </div>
          <div className="md:hidden">
            <img
              src={`https://api.iconify.design/jam:${
                hasDropdown ? "close" : "menu"
              }.svg?width=30px`}
              alt="menu"
              onClick={handleDropdown}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
