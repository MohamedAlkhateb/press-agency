const app = require("./app/src/app");
const PORT = process.env.PORT | 8000;

app.listen(PORT, () => console.log(`we are on http://localhost/${PORT}`));
