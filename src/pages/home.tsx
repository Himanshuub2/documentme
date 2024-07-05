/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xWpECj71AHe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Generate from "@/components/Generate"
import About from "@/components/About"
import { useContext } from "react"
import { authContext } from "@/auth/authContext"

export default function Component() {
  const {state} = useContext(authContext)
  console.log(state);
  if(!state.authUser){
    return <div>Unauthorized User please signup.</div>
  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
     <Navbar/>
      <main className="flex-1">
        <Header/>
        <Generate/>
        <About/>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Sign Up or Log In</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Create an account to start generating PDF documentation for your website.
              </p>
            </div>
            <div className="grid gap-4">
             
             
            </div>
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 PDF Generator. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}



