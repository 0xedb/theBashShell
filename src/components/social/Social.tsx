import style from "./social.module.css";

export default function Social() {
  return (
    <aside
      className={`${style.icon} flex md:flex-col md:fixed top-1/3 left-0 bottom-0`}
    >
      <a href="https://github.com/theBashShell" target="_blank">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/733/733553.svg"
          alt="github"
        />
      </a>
      <a href="https://www.linkedin.com/in/bruno-edoh/" target="_blank">
        <img
          src="https://image.flaticon.com/icons/svg/2111/2111499.svg"
          alt="linkedin"
        />
      </a>
      <a href="https://twitter.com/theBashShell" target="_blank">
        <img
          src="https://image.flaticon.com/icons/svg/733/733579.svg"
          alt="twitter"
        />
      </a>
      <a
        href="https://stackoverflow.com/users/6790436/thebashshell"
        target="_blank"
      >
        <img
          src="https://image.flaticon.com/icons/svg/2111/2111628.svg"
          alt="stackoverflow"
        />
      </a>
      <a href="https://www.instagram.com/thebashshell/" target="_blank">
        <img
          src="https://image.flaticon.com/icons/svg/174/174855.svg"
          alt="instagram"
        />
      </a>
      <a href="https://codesandbox.io/u/theBashShell" target="_blank">
        <img
          src="https://api.iconify.design/simple-icons:codesandbox.svg?color=teal"
          alt="codesandbox"
        />
      </a>
      <div className="hidden left-0 bottom-0 transform rotate-90 md:border-pink-600 md:block md:border relative" />
    </aside>
  );
}
