import Link from "next/link";

const NavLink = ({ path,title}) => {
  return <Link className="blcok py-2 pl-3 pr-4" href={path}>{title}</Link>;
};

export default NavLink;
