import Link from "next/link";
import NavLink from "./NavLink";
const Navbar = () => {
  const titles = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black opacity-100">
      <div className="flex flex-wrap items-center justify-between  px-10 py-5">
        <Link
          href={"/"}
          className="font-semibold sm:text-2xlxl text-lg text-white"
        >
          LOGO
        </Link>
        <div className="menu md-block md:w-auto" id="navBar">
          <ul className="flex  md:flex-row md:space-x-0">
            {titles.map((title, index) => {
              return (
                <li key={index}>
                  {NavLink(title)}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
