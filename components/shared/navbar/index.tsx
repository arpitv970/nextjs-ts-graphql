import { Button } from "@/components/ui/button";
import { NavLinks } from "@/lib/constants";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center container mx-auto p-0 my-3 rounded-full">
      <div>
        <Link href={"/"}>
          <Button className="rounded-full p-3" size={"icon"} variant={"ghost"}>
            <LinkIcon />
          </Button>
        </Link>
      </div>
      <div className="flex justify-between items-center gap-3">
        {NavLinks.map((item, idx) => (
          <Link key={idx} href={item.href}>
            <Button variant={"ghost"}>{item.title}</Button>
          </Link>
        ))}
      </div>
    </nav>
  );
};
