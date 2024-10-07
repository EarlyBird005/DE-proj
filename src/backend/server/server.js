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
        img: 'https://example.com/sunny-park.jpg'
    },
    {
        id: 2,
        name: 'Moonlight Grounds',
        address: '456 Moonbeam Ave, Blue City',
        timing: '7 AM - 8 PM',
        img: 'https://example.com/moonlight-grounds.jpg'
    },
    {
        id: 3,
        name: 'Moonlight Grounds',
        address: '456 Moonbeam Ave, Blue City',
        timing: '7 AM - 8 PM',
        img: 'https://example.com/moonlight-grounds.jpg'
    },
    {
        id: 4,
        name: 'Moonlight Grounds',
        address: '456 Moonbeam Ave, Blue City',
        timing: '7 AM - 8 PM',
        img: 'https://example.com/moonlight-grounds.jpg'
    },
    {
        id: 5,
        name: 'Moonlight Grounds',
        address: '456 Moonbeam Ave, Blue City',
        timing: '7 AM - 8 PM',
        img: 'https://example.com/moonlight-grounds.jpg'
    },
    {
        id: 6,
        name: 'Moonlight Grounds',
        address: '456 Moonbeam Ave, Blue City',
        timing: '7 AM - 8 PM',
        img: 'https://example.com/moonlight-grounds.jpg'
    },
    {
        id: 7,
        name: 'Moonlight Grounds',
        address: '456 Moonbeam Ave, Blue City',
        timing: '7 AM - 8 PM',
        img: 'https://example.com/moonlight-grounds.jpg'
    },
    {
        id: 8,
        name: 'Moonlight Grounds',
        address: '456 Moonbeam Ave, Blue City',
        timing: '7 AM - 8 PM',
        img: 'https://example.com/moonlight-grounds.jpg'
    },
    {
        id: 9,
        name: 'Moonlight Grounds',
        address: '456 Moonbeam Ave, Blue City',
        timing: '7 AM - 8 PM',
        img: 'https://example.com/moonlight-grounds.jpg'
    },{
        id: 10,
        name: 'Moonlight Grounds',
        address: '456 Moonbeam Ave, Blue City',
        timing: '7 AM - 8 PM',
        img: 'https://example.com/moonlight-grounds.jpg'
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
const filePath = path.join(__dirname, '../../../Register.txt');
fs.appendFile(filePath, "User Details:\n", (err) => {
    if (err) {
        console.error("Failed to save data", err);
        return res.status(500).send("An error occurred.");
    }
} );

app.post("/api/register", (req, res) => {
    const { userName, firstName, lastName, mobileNumber, email, zipCode, password } = req.body;
    console.log("POST /api/register called");
    
    const data = `Username: ${userName}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nMobile Number: ${mobileNumber}\nEmail: ${email}\nZip Code: ${zipCode}\nPassword: ${password}\n\n`;

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