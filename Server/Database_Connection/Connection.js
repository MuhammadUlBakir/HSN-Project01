const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB).then(() => console.log("Database Connected Successfully".bgCyan.white)).catch(() => console.log("Database Not Connected".bgRed.white));