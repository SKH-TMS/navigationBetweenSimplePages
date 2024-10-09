import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <Link className="px-4" href="/">
        Home
      </Link>
      <Link className="px-4" href="/Login">
        Login
      </Link>
      <Link className="px-4" href="/Register">
        Register
      </Link>
      <Link className="px-4" href="/Profile" legacyBehavior>
        {/*legacyBehavior is used if you want to use <a> along with <link> */}
        <a className="px-4">Profile</a>
      </Link>
    </nav>
  );
}
