const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
	res.json({ message: "Bienvenue sur l'API" });
});

// Gestion des erreurs
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		success: false,
		message: "Erreur serveur",
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Serveur démarré sur le port ${PORT}`);
});