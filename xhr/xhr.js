const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
    const xhr = new XMLHttpRequest();

    return new Promise ((resolve, reject)=>{
    xhr.open(method, url);

    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.onload = () => {
        if (xhr.status >= 400) {
            reject(xhr.response);
        } else {
            resolve(xhr.response);
        }
    }

    xhr.onerror = () => {
        reject(xhr.response);
    }

    xhr.send(JSON.stringify(body));
})}

// sendRequest('GET', requestURL)
//     .then(answer => console.log(answer))
//     .catch(err => console.log(err))

const body = {
    name: 'Alex',
    age: 23,
}

sendRequest('GET', requestURL)
    .then(answer => console.log(answer))
    .catch(err => console.log(err))



sendRequest('POST', requestURL, body)
    .then(answer => console.log(answer))
    .catch(err => console.log(err))