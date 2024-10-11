const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Mock API to simulate answer or upvote events
app.get('/answer', (req, res) => {
    res.json({ message: 'Someone answered your question!' });
});

app.get('/upvote', (req, res) => {
    res.json({ message: 'Someone upvoted your question!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
