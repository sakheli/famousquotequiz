import { setCookie } from "tiny-cookie";

export const loginApi = async (data) => {
    const response = await fetch(`${process.env.API
        }/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (response.status == 200) {
        const data = await response.text();
        setCookie('jwt', data, { expires: ((new Date()).getDate() + 1) });
        return [false, "success"];
    }

    return [true, "Incorrect email or password"]
}