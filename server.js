const express = require('express');
const app = express();
const port = 3000;

// Import dog facts
const { data: dogReplica } = require('./dog_facts');

app.get('/facts', (req, res) => {
    const { number } = req.query;
    let selectedFacts = dogReplica;

    if (number) {
        const totalFacts = parseInt(number);
        if (!Number.isInteger(totalFacts) || totalFacts < 1) {
            return res.json({ message: "invalid number of requests", success: false });
        }
        selectedFacts = dogReplica.slice(0, totalFacts);
    }

    res.json({ facts: selectedFacts, success: true });
});

app.listen(port, () => {
    console.log(`Dog Facts API listening at http://localhost:${port}`);
});
