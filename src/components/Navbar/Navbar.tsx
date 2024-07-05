import React from "react"
import Link from "next/link"
import MountainIcon from "@/assets/svg/MountainIcon.svg";
import Image from "next/image";
import { Button } from "@/shadcn/ui/button";

const LINKS = ['Home','Documentation','About']
export default function Navbar(){
    return(
        <header className="px-4 lg:px-6 h-16 flex items-center text-lg">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
           <Image src={MountainIcon} alt = "logo" />
          <span className="sr-only">PDF Generator</span>
        </Link>
        <nav className="ml-auto flex justify-center items-center gap-4 sm:gap-6">
          {
            LINKS.map(link=>(
              <Link href="#" className=" font-medium hover:underline underline-offset-4" prefetch={false}>
                {link}
              </Link>
            ))
          }
          <Button >Login</Button>
        </nav>
      </header>
    )
}