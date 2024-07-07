// server/index.ts

import express, { Application } from "express";
import path from "path";

import setupRoutes from "./routes/setupRoutes";

const app: Application = express();
const port = process.env.PORT || 8000;

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, "../dist")));

// Serve the React app for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

setupRoutes();

export default app;
