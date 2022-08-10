import express from "express";
import query from "./database/utils/query.js";
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send("course enrollment homepage");
})

// Example1: Get All Courses API
app.get('/api/courses', async (req, res) => {
    try {
        const data = await query('SELECT * FROM course');
        res.json(200, data);
    } catch(e) {
        res.send(500, `Error running db query:${e}`);
    }
})

// Example2: Get All Courses taught by Teacher with {teacherId} API
app.get('/api/courses/:teacherId', async (req, res) => {
    const teacherId = req.params.teacherId;
    try {
        const data = await query(`SELECT * FROM course where teacher_id = ${teacherId}`);
        res.json(200, data);
    } catch(e) {
        res.send(500, `Error running db query:${e}`);
    }
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
})