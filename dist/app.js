"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.get("/", (req, res) => {
    res.send("hello hospital help!");
});
app.get("/hospital/1", function (req, res) {
    var fs = require("fs");
    fs.readFile("./src/models/hospital.json", "utf8", function (err, data) {
        if (err)
            throw err;
        res.setHeader("Content-Type", "application/json");
        res.end(data);
    });
});
app.get("/needs", function (req, res) {
    var fs = require("fs");
    fs.readFile("./src/models/needsReturn.json", "utf8", function (err, data) {
        if (err)
            throw err;
        res.setHeader("Content-Type", "application/json");
        res.end(data);
    });
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map