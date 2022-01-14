const requestURL = 'https://jsonplaceholder.typicode.com/users'
const headers = {
    'Content-type': 'application/json'
}

function sendRequest(method, url, body = null){ /////////// написать то же самое только с await.p, каждый await обернуть в блоки try/catch
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers,
    }).then(response => {
        if (response.ok){
        return response.json();
        } else {
            return response.json().then(error =>{
                const err = new Error('Что-то пошло не так');
                err.data = error;
                throw err;
            })
        }
    })
}

sendRequest('GET', requestURL)
    .then(answer => console.log(answer))
    .catch(err => console.log(err))

const body = {
    name: 'Alex',
    age: 23,
}

sendRequest('POST', requestURL, body)
    .then(answer => console.log(answer))
    .catch(err => console.log(err))