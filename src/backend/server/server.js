import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json()); // to store data in local file
app.listen(port, () => {
    // "ServerSide"
    console.log(`http://localhost:${port}`);
});


// new
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// new ends

// API for fetching data 
const playgroundDetails = [
    {
        id: 1,
        name: 'Sunny Park',
        address: '123 Sunshine St, Green City',
        timing: '6 AM - 10 PM',
        contact: '(766) 876-7819',
        img: 'https://example.com/sunny-park.jpg'
    },
    {
        id: 2,
        name: 'Moonlight Grounds',
        address: '456 Moonbeam Ave, Blue City',
        timing: '7 AM - 8 PM',
        contact: '(755) 123-4567',
        img: 'https://example.com/moonlight-grounds.jpg'
    },
    {
        id: 3,
        name: 'Starlight Arena',
        address: '789 Star Rd, Blue City',
        timing: '8 AM - 9 PM',
        contact: '(755) 234-5678',
        img: 'https://example.com/starlight-arena.jpg'
    },
    {
        id: 4,
        name: 'Galaxy Field',
        address: '101 Galaxy St, Blue City',
        timing: '5 AM - 10 PM',
        contact: '(755) 345-6789',
        img: 'https://example.com/galaxy-field.jpg'
    },
    {
        id: 5,
        name: 'Lunar Park',
        address: '202 Lunar Dr, Blue City',
        timing: '6 AM - 9 PM',
        contact: '(755) 456-7890',
        img: 'https://example.com/lunar-park.jpg'
    },
    {
        id: 6,
        name: 'Comet Park',
        address: '303 Comet Ave, Blue City',
        timing: '7 AM - 7 PM',
        contact: '(755) 567-8901',
        img: 'https://example.com/comet-park.jpg'
    },
    {
        id: 7,
        name: 'Aurora Grounds',
        address: '404 Aurora St, Blue City',
        timing: '5 AM - 9 PM',
        contact: '(755) 678-9012',
        img: 'https://example.com/aurora-grounds.jpg'
    },
    {
        id: 8,
        name: 'Nebula Park',
        address: '505 Nebula Dr, Blue City',
        timing: '6 AM - 8 PM',
        contact: '(755) 789-0123',
        img: 'https://example.com/nebula-park.jpg'
    },
    {
        id: 9,
        name: 'Meteor Fields',
        address: '606 Meteor St, Blue City',
        timing: '7 AM - 9 PM',
        contact: '(755) 890-1234',
        img: 'https://example.com/meteor-fields.jpg'
    },
    {
        id: 10,
        name: 'Cosmos Grounds',
        address: '707 Cosmos Ave, Blue City',
        timing: '8 AM - 8 PM',
        contact: '(755) 901-2345',
        img: 'https://example.com/cosmos-grounds.jpg'
    }
];

// http://localhost:3000/api/playground/#{id})
app.get('/api/playground/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const playground = playgroundDetails.find(pg => pg.id === id);

    if (playground) {
        res.json(playground);
    } else {
        res.status(404).send('Playground not found');
    }
});

// API for storing data
// http://localhost:3000/api/register)
app.post("/api/register", (req, res) => {
    const { userName, firstName, lastName, mobileNumber, email, zipCode, password } = req.body;
    console.log("POST /api/register called");
    
    const data = `User Details:\nUsername: ${userName}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nMobile Number: ${mobileNumber}\nEmail: ${email}\nZip Code: ${zipCode}\nPassword: ${password}\n\n`;
    const filePath = path.join(__dirname, '../../../Register.txt');

    // fs.appendFile(filePath, "User Detail:")
    fs.appendFile(filePath, data, (err) => {
    // fs.appendFile("Register.txt", data, (err) => {
        if (err) {
            console.error("Failed to save data", err);
            return res.status(500).send("An error occurred.");
        }
        res.send("Registered successfully!");
    });
});