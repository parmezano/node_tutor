import express from 'express';
import path from 'path';

// console.log(__dirname);

// const __dirname = path.resolve();

const port = process.env.port ?? 3000;   //если переменная порт задана, берем её значение. если нет - 3000
const app = express();

// app.use(express.json());
app.use(express.urlencoded({extended: false}));



console.log(path.resolve( 'static', 'root'));


// /*  обрабатываем get - запрос по урл /   */
// app.get('/', (req,res) => {
//   res.send('<h1>Otvet servera</h1>');
//     //res.sendFile(path.resolve(__dirname,'static', 'index.html' ));
// });

app.use('/',express.static('./static'));

// /*  обрабатываем get - запрос по урл /next   */
// app.get('/next', (req,res) => {
//   // res.send('<h1>Otvet servera</h1>');
//     res.sendFile(path.resolve(__dirname,'static', 'next.html' ));
// });


app.get('/download', (req,res)=>{
    res.download(path.resolve('static', 'index.html'));
});

//app.post('/root', (req,res)=>{

    const p = new Promise((resolve, reject)=>{

    })



/* запускает веб-сервер на порте 3000*/
app.listen(3000, () =>{
    console.log(`The server has been started on port ${port} ... `);
});
