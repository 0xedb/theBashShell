import Social from "../social/Social";

export default function Footer() {
  return (
    <footer className="mt-auto sec relative w-full  flex justify-center items-center">
      <div className="content flex items-center flex-col w-full">
        <Social />
        <p>&copy;{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
