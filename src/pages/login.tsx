import { Card, CardHeader, CardTitle, CardContent } from "@/shadcn/ui/card";
import { Input } from "@/shadcn/ui/input";
import { Button } from "@/shadcn/ui/button";
import { Separator } from "@/shadcn/ui/separator";
import { useForm } from "react-hook-form";
import useUserSubmit from "@/services/authentication";
import Link from "next/link";

export interface Login{
    username:string;
    password:string;
}

export default function Login() {
  const { register, handleSubmit } = useForm();
  const {onUserSubmit} = useUserSubmit();

  function userInfo(data:Login){
    onUserSubmit(data,'login')
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-1/3 h-96">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-2" onSubmit={handleSubmit(userInfo)}>
              <Input
                type="text"
                placeholder="Username`"
                {...register("username", { required: true })}
              />
              <Input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <Button type="submit" className="mt-2">
                Login
              </Button>
            </form>
            <Separator className="my-4" />
            <p className="text-center">New Here ? <Link href={'/signup'} className="text-gray-600 text-[18px] hover:text-blue-600 ">Create a new Account</Link></p>
          </CardContent>
        </Card>
      </div>    
    </div>
  );
}
