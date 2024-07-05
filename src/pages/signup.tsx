import { Card, CardHeader, CardTitle, CardContent } from "@/shadcn/ui/card";
import { Input } from "@/shadcn/ui/input";
import { Button } from "@/shadcn/ui/button";
import { Separator } from "@/shadcn/ui/separator";
import { useForm } from "react-hook-form";
import useUserSubmit from "@/services/authentication";

export interface Signup{
  username:string;
  password:string;
  confirmpassword:string;
  email:string;
  fullname:string
}

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const {onUserSubmit} = useUserSubmit();

  function userInfo(data:Signup){
    const {username,fullname,email,password} = data;
    onUserSubmit({username,fullname,email,password},'signup')
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-1/3 h-96">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-2" onSubmit={handleSubmit(userInfo)}>
              <Input
                type="text"
                placeholder="Full Name"
                {...register("fullname", { required: true })}
              />
              <Input
                type="text"
                placeholder="Username`"
                {...register("username", { required: true })}
              />
              <Input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <Input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmpassword", { required: true })}
              />
              <Button type="submit" className="mt-2">
                Sign Up
              </Button>
            </form>
            <Separator className="my-4" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
