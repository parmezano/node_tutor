import express from 'express';
//import {users} from './data.js';

// console.log(users);

const port = process.env.port ?? 3000;   //если переменная порт задана, берем её значение. если нет - 3000
const app = express();

//app.use(express.json());
app.use(express.urlencoded({extended : false}));

import downloadPage from './routes/Download.js';
import nextPage from './routes/Next.js';
import form from './routes/Root.js';

app.use('/next', nextPage)
app.use('/download', downloadPage)
app.use('/root', form)

// app.get('/', (req,res) => {
//   res.send('');
// });

app.use('/',express.static('./static'));

app.listen(3000, () =>{
    console.log(`The server has been started on port ${port} ... `);
});
