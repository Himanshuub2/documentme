import Link from "next/link"


export default function Header(){
    return(
        <section className="w-full pt-12 md:pt-24 border-y">
          <div className=" px-4 md:px-8  space-y-6 xl:space-y-16">
            <div className="flex flex-col justify-center items-center  mx-auto gap-4 px-20 sm:px-6 md:px-10 md:grid-cols-2  ">
                <h1 className=" lg:leading-tighter text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Generate PDF Documentation for Your Website
                </h1>
              
              <div className="typewriter">
    <h1
      className="font-medium">
     Our AI-powered tool analyzes your website and its endpoints, then generates comprehensive PDF
     documentation for your users.
    </h1>
    </div>
                <div className="space-x-4 mt-6">
                  <Link
                    href="#"
                    className="md:mb-28 inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2   text-md font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
              </div>
            </div>
          </div>
        </section>
    )
}