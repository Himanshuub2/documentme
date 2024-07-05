
import { Button } from "@/shadcn/ui/button"
import { Input } from "@/shadcn/ui/input"
import { Textarea } from "@/shadcn/ui/textarea"

export default function Generate(){
    
    return(
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-300  dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Generate PDF Documentation for Your Website
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our AI-powered tool makes it easy to create comprehensive documentation for your website and its
                endpoints.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-2">
                <Input type="text" placeholder="Enter your website URL" className="max-w-lg" />
                <Input type="text" placeholder="Enter your endpoints (optional)" className="max-w-lg" />
                <Textarea placeholder="Provide additional context (optional)" className="max-w-lg" />
                <Button type="submit" className="mt-2">
                  Generate PDF
                </Button>
              </form>
            </div>
          </div>
        </section>
    )
}