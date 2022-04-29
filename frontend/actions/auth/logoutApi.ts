import { removeCookie } from 'tiny-cookie';

export const logoutAPi = async () => {
    await fetch(`${process.env.API
        }/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: ''
    })

    removeCookie('jwt');
    return [false, 'success'];
}