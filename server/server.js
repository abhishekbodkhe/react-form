const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware to handle JSON data and CORS
app.use(bodyParser.json());
app.use(cors());

// POST route for form submission
app.post('/submit-form', (req, res) => {
    const { name, email, phone } = req.body;
    console.log("working good!!!!")
    console.log('Received form data:', { name, email, phone });

    // Handle form data (e.g., save to database)
    // For now, we just return a success response
    res.json({ message: 'Form submitted successfully' });
});

// Define the port the server will run on
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
