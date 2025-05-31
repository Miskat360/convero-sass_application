import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-screen">
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit
        incidunt, alias ipsa accusamus ab consectetur sint aliquid maiores dolor
        tempore esse! Voluptate deleniti alias iste ea incidunt quae maxime?
      </h2>
      <Button>Click me</Button>
      <Link href={"sign-in"}>Sign in</Link>
      <button className="bg-neutral-900 text-white text-sm py-2 px-4 rounded-sm">
        Click me
      </button>
    </div>
  );
};

export default Page;
