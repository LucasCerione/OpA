const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const leads = [];

app.get("/health", (req, res) => {
    res.json({
        status: "online",
        project: "Operation Atlas"
    });
});

app.get("/leads", (req, res) => {
    res.json(leads);
});

app.post("/leads", (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
    return res.status(400).json({
        erro: "Nome e email são obrigatórios"
    });
}

    const novoLead = {
        id: leads.length + 1,
        nome,
        email
    };

    leads.push(novoLead);

    res.status(201).json(novoLead);
});

app.listen(PORT, () => {
    console.log(`Atlas API rodando em http://localhost:${PORT}`);
});