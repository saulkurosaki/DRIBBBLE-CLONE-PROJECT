import { NavLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = async () => {
  const session = true;

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="Flexibble" width={115} height={43} />
        </Link>

        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <SignedOut>
          <Button
            asChild
            className="rounded-full bg-[#9747FF] text-white"
            size="lg"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>

        {/* <Image
          src="/" // {session.user.image}
          alt="/" // {session.user.name}
          width={40}
          height={40}
          className="rounded-full"
        /> */}

        {/* <Link href="/create-project">Share Work</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
