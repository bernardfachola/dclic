// appell d'express
const express = require(`express`);
const app = express();
const port = 8080;


// Middleware pour analyser le corps des requêtes
app.use(express.json());

let tasks = [];

// Routes CRUD ici

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});


// crud
// post
app.post('/tasks', (req, res) => {
    const task = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(task);
    res.status(201).json(task);
});

// get
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// afficher une tache specifique

app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Tâche non trouvée');
    res.json(task);
});

// modifier une tache

app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Tâche non trouvée');

    task.title = req.body.title;
    task.completed = req.body.completed;
    res.json(task);
});


// delete

app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).send('Tâche non trouvée');

    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);
});
