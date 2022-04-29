import { getCookie } from "tiny-cookie";

export const getAnswerApi = async (id) => {
    const token = getCookie('jwt');
    const response = await fetch(`${process.env.API
        }/question/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    if (response.status == 200) {
        const data = await response.json();
        return [false, data];
    }

    return [true, "Something went wrong..."]
}