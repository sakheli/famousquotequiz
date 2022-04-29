import { loginApi } from "./loginApi";

export const registerApi = async (data) => {
    const response = await fetch(`${process.env.API}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.status == 201) {
        return loginApi(data)
    }
    return [true, "Email is already in use"]
}
