import express from "express";
import cors from "cors";
import router from "./route/Route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

// Tambahkan ini biar akses "/" gak error
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

app.listen(5000, () => console.log('Server Up and Running...'));
