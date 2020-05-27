const express = require("express");
const connectDb = require("./config/db");
const userRoute = require("./routes/api/users");
const authRoute = require("./routes/api/auth");
const postRoute = require("./routes/api/post");
const profileRoute = require("./routes/api/profile");
const path = require('path')
const app = express();

connectDb();

app.use(express.json({ extended: false }));




app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/profile", profileRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Example app listening on port port!`));
