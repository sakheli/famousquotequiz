export const questionsNoAnswerApi = async (id, cookie) => {
    const response = await fetch(`${process.env.API
        }/showwithoutanswers/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie['jwt']}`
        }
    })

    if (response.status == 200) {
        const data = await response.json();
        return [false, data];
    }

    return [true, "Something went wrong..."]
}