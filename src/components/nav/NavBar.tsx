import style from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav
      className={`fixed top-0 w-full z-10 ${style.nav} flex justify-center items-center`}
    >
      <div
        className={`flex justify-between items-center w-full h-full px-1 ${style.content}`}
      >
        <div>pic</div>
        <div className={`flex`}>
          <div>dropdown</div>
          <div>dropdown</div>
        </div>
      </div>
    </nav>
  );
}
