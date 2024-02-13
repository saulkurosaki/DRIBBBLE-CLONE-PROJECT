import { NavLinks } from "@/constants";
import {
  SignedIn,
  SignedOut,
  UserButton,
  auth,
  clerkClient,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { getUserById } from "@/lib/actions/user.actions";

const Navbar = async () => {
  const { userId } = auth();
  let _id = "";

  if (userId !== null) {
    const clerkUser = await clerkClient.users.getUser(userId as string);
    const user_id = String(clerkUser.publicMetadata.userId);
    const user = await getUserById(user_id);
    _id = user?._id;
  }

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

          <Button
            asChild
            className="rounded-full w-20 bg-[#9747FF] text-white"
            size="lg"
          >
            <Link href={`/profile/${_id}`}>Profile</Link>
          </Button>

          <Button
            asChild
            className="rounded-full w-28 bg-[#9747FF] text-white"
            size="lg"
          >
            <Link href="/create-project">Share Work</Link>
          </Button>
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
      </div>
    </nav>
  );
};

export default Navbar;
