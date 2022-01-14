const express = require('express')

const port = process.env.port ?? 3000;   //если переменная порт задана, берем её значение. если нет - 3000
const app = express();

app.use(express.urlencoded({extended : false}));

const downloadPage = require('./routes/Download.js');
const nextPage = require('./routes/Next.js');
const form = require('./routes/Root.js');

app.use('/next', nextPage)
app.use('/download', downloadPage)
app.use('/root', form)

app.use('/',express.static('./static'));

app.listen(3000, () =>{
    console.log(`The server has been started on port ${port} ... `);
});
