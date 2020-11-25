import Social from "../social/Social";

export default function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-center flex-col">
     
      <div className="content block">
        <Social />
        <p>&copy;{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
