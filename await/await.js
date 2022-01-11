const requestURL = 'https://jsonplaceholder.typicode.com/users'
const headers = {
    'Content-type': 'application/json'
}

async function sendRequest(url){
    try{
        const response = await fetch(url);
        const answer = await response.json();
        console.log(answer);
    } catch (e) {
        console.log(e);
    }
}

sendRequest(requestURL);
    // .then(answer => console.log(answer))
    // .catch(err => console.log(err))



async function sendPost(method, url, body){
    try {
       const response = await fetch(url, {
           method: method,
           body: JSON.stringify(body),
           headers: headers,
       });
       const answer = await response.json();
        console.log(answer);
    } catch (e) {
        console.log(e);
    }
}

const body = {
    name: 'Alex',
    age: 23,
}

sendPost('POST', requestURL, body)
//     .then(answer => console.log(answer))
//     .catch(err => console.log(err))