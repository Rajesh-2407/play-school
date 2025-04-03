import express from 'express';
import cors from 'cors';
import fs from 'fs';
import bodyParser from 'body-parser';
import authRouter from './routes/authRoutes.js';

const app = express();
const usersFile = "./sample.json";
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
}));
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/auth', authRouter);

// Root route
app.get('/', (req, res) => {
    res.send("Welcome to the API!");
});

// Utility functions
const readFile = (file) => {
    try {
        return JSON.parse(fs.readFileSync(file, "utf8"));
    } catch (error) {
        return [];
    }
};

const writeFile = (file, data, res, successMessage) => {
    fs.writeFile(file, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
        return res.json({ message: successMessage, data });
    });
};

// Get all users
app.get("/users", (req, res) => {
    const users = readFile(usersFile);
    res.json(users);
});

// Add a user
app.post("/users", (req, res) => {
    const { name, phonenumber, Fees_paid, total_amount } = req.body;
    if (!name || !phonenumber || !Fees_paid || !total_amount) {
        return res.status(400).json({ message: "All fields are required." });
    }
    const users = readFile(usersFile);
    const newUser = { id: Date.now(), name, phonenumber, Fees_paid, total_amount };
    users.push(newUser);
    writeFile(usersFile, users, res, "User added successfully");
});

// Update a user
app.patch("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, phonenumber, Fees_paid, total_amount } = req.body;
    const users = readFile(usersFile);
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "User not found." });
    }
    users[index] = { id, name, phonenumber, Fees_paid, total_amount };
    writeFile(usersFile, users, res, "User updated successfully");
});

// Delete a user
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    let users = readFile(usersFile);
    users = users.filter((user) => user.id !== id);
    writeFile(usersFile, users, res, "User deleted successfully");
});

// Start Server with dynamic port handling
const startServer = (port) => {
    const server = app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.error(`Port ${port} is already in use. Trying a different port...`);
            setTimeout(() => {
                startServer(port + 1);
            }, 1000);
        } else {
            console.error('Server error:', err);
        }
    });
};

startServer(PORT);
