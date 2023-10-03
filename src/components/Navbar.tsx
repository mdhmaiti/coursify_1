import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-end m-4 gap-4">
      <Button variant="outline">
        <Link href="/addCourse">Add course</Link>
        
      </Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
