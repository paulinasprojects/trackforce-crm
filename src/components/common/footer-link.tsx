import { Link } from "react-router-dom";

interface Props {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

const FooterLink = ({ title, links }: Props) => {
  return (
    <>
      <p className="text-md font-medium leading-xl text-white">{title}</p>
      {links.map((link, index) => (
        <Link key={index} to={link.href} className="text-sm font-medium text-lightGray hover:text-lightGray/80 transition duration-300">{link.name}</Link>
      ))}
    </>
  )
}

export default FooterLink