const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public',)));

app.get('/api/posts', async(req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, 'data', 'posts.json'), 'utf8');
        const posts = JSON.parse(data);
        res.json(posts);
    } catch (error) {
        console.error('Error reading posts:', error);
        res.status(500).json({ error: 'Failed to load blog posts' });
    }
});
app.get('/sample', async(req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, 'data', 'sample.json'), 'utf8');
        const sample = JSON.parse(data);
        res.json(sample);
    } catch (error) {
        console.error('Error reading posts:', error);
        res.status(500).json({ error: 'Failed to load blog posts' });
    }
});
app.get('/hotline', async(req, res) => {
    try {
        const data = await fs.readFile(path.join(__dirname, 'data', 'contact.json'), 'utf8');
        const contact = JSON.parse(data);
        res.json(contact);
    } catch (error) {
        console.error('Error reading posts:', error);
        res.status(500).json({ error: 'Failed to load blog posts' });
    }
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
