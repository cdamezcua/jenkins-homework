import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola Mundo con Docker!");
});

app.get("/suma", (req, res) => {
  const { num1, num2 } = req.query;
  const suma = parseInt(num1) + parseInt(num2);
  res.send(`${suma}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
