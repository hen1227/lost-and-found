const backendIP = 'http://10.31.64.46:4004';

export default function sendAPICall(
    toURL,
    method,
    data,
    currentUser = null,
) {
    console.log('POST' ? JSON.stringify(data) : null)
    return fetch(`${backendIP}${toURL}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${currentUser ? currentUser.token : ''}`,
        },
        body: method === 'POST' ? JSON.stringify(data) : null,
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.error) {
                throw new Error(data.error);
            }
            return data;
        });
}
