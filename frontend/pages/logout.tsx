import { logoutAPi } from "actions/auth/logoutApi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const Login = () => {
    const router = useRouter();
    const [, , removeCookies] = useCookies();
    useEffect(() => {
        logoutAPi()
        removeCookies('jwt')
        router.push('/')
    }, [])

    return (<></>)
};
export default Login;