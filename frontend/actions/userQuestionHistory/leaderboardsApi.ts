export const leaderboardsApi = async () => {
    const response = await fetch(`${process.env.API
        }/leaderboards`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.status == 200) {
        const data = await response.json();
        return [false, data];
    }

    return [true, "Something went wrong..."]
}