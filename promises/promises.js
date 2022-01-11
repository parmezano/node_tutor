console.log('Start working...');

const p = new Promise((resolve, reject)=>{
    const data = {
        name: 'Oleg',
        age: 31,
        working: true,
    }
    resolve(data)
})

p.then(backendData => {
    backendData.fired = true;
    console.log(backendData);
    }
)
    .catch( err=>{
        console.error('Error: ', err)
    }
)


const sleep = ms => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>resolve(), ms)
    })
}
sleep(3000).then(() => console.log('Sleep end'))