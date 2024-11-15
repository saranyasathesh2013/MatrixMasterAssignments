const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://saranya:saranya@dev.vbgym.mongodb.net/?retryWrites=true&w=majority&appName=dev")
.then(() => console.log("DB is connected"))
.catch((error) => console.log(error))