import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors());

const playgroundDetails = [
    {
        id: 1,
        name: 'Sunny Park',
        address: '123 Sunshine St, Green City',
        timing: '6 AM - 10 PM',
        img: 'https://example.com/sunny-park.jpg'
    },
    {
        id: 2,
        name: 'Moonlight Grounds',
        address: '456 Moonbeam Ave, Blue City',
        timing: '7 AM - 8 PM',
        img: 'https://example.com/moonlight-grounds.jpg'
    },
];

// API to get playground details
// http://localhost:3000/api/playground/7
app.get('/api/playground/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const playground = playgroundDetails.find(pg => pg.id === id);

    if (playground) {
        res.json(playground);
    } else {
        res.status(404).send('Playground not found');
    }
});

app.listen(port, () => {
    // "ServerSide"
    console.log(`http://localhost:${port}`);
});