import style from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav
      className={`fixed top-0 w-full z-10 ${style.nav} flex justify-center items-center md:px-5`}
    >
      <div
        className={`flex justify-between items-center w-full h-full px-3 content`}
      >
        <div>pic</div>
        <div className={`flex`}>
          <div className="hover:underline hidden md:block">about</div>
          <div className="md:hidden">menu</div>
        </div>
      </div>
    </nav>
  );
}
