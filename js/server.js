const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
const csvFilePath = path.join(__dirname, 'job_applications.csv');

app.use(bodyParser.json());
app.use(cors());

app.post('/submit_job_form', (req, res) => {
    const { name, qualification, experience, resumeLink, jobRole } = req.body;
    const newRow = `${name},${qualification},${experience},${resumeLink},${jobRole}\n`;

    fs.appendFile(csvFilePath, newRow, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).send('Failed to save data.');
        }
        res.send('Job application submitted successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
