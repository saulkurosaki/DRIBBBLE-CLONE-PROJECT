import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src="/logo-purple.svg"
            alt="Flexibble"
            width={115}
            height={38}
          />

          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
