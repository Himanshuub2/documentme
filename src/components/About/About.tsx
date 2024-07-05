import Link from "next/link"

export default function About(){
    return(
        <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About PDF Generator</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              PDF Generator is an AI-powered tool that helps you create comprehensive documentation for your website
              and its endpoints. Our mission is to make it easy for developers to share their work with users and
              stakeholders.
            </p>
          </div>
          <div className="grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="About"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Meet the Team</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our team of experienced developers and designers are passionate about creating tools that make life
                  easier for developers.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Testimonials</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  "PDF Generator has been a game-changer for our team. It's easy to\n use and saves us so much time."
                  - John Doe, Lead Developer
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Contact Us</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Have a question or feedback? Get in touch with us at
                  <Link href="#" className="underline" prefetch={false}>
                    support@pdfgenerator.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}