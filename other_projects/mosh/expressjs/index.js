const express = require('express');
const app = express();

//express js compare with http_adv.js
//we are not creating web server manually
/*app.get('/', (req, res) => {
    res.send('Hello world from express!')
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3])
});

app.get('/something/:id', (req, res) => {
    res.send(req.params.id) //localhost:3000/something/4 returns 4
}); */

const students = [
    { id: 1, name: 'Sai' },
    { id: 2, name: "Baba" }
];

app.get('/something/students', (req, res) => {
    res.send(students)
});

app.get('/something/students/:id', (req, res) => {
    //instead of database work, for simplicity use hardcoded
    var student = students.find(s => s.id == req.params.id)

    if (!student) res.status(404).send('The studen with given id not found')
    else {
        res.status(200).send(`Student name is ${student.name}`)
    }
});

// app.post('/something/students', (req,res) => {

// });

app.listen(3000, () => {
    console.log('Listening on port 3000')
});

//if you want to watch the application without restarting cmd always, use nodemon