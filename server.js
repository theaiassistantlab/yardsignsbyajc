const express = require("express");
const app = express();
app.use(express.static("."));
app.use((req, res) => res.sendFile("index.html", { root: "." }));
app.listen(5000, "0.0.0.0", () => console.log("Yard Signs by AJC listening on port 5000"));
