import { authContext } from "@/auth/authContext";
import { useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Login } from "@/pages/login";
import { Signup } from "@/pages/signup";

type UserInfo = Login | Signup;

export default function useUserSubmit(){
    const router = useRouter();
    const {dispatch} = useContext(authContext)

    async function onUserSubmit(data:UserInfo ,path:string) {
        try {
          const response = await axios.post(`/api/${path}`, data);
          if (response.status === 200) {
            dispatch({ type: path.toUpperCase(), payload: response.data.username });
            router.push("/home");
          }
        } catch (err) {
          console.log(err);
        }
      }
      return {onUserSubmit};
}

