import app from "./app.js";
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
