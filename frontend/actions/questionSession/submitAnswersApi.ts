import { getCookie } from "tiny-cookie";

export const submitAnswersApi = async (data) => {
    const token = getCookie('jwt');
    const response = await fetch(`${process.env.API
        }/submitanswers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })

    if (response.status == 200) {
        const data = await response.json();
        return [false, data];
    }

    return [true, "Something went wrong..."]
}