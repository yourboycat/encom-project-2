const express = require("express"); 
const axios = require("axios");
const app = express();

//port where project is hosted on
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


//embedded javacsript
app.set("view engine", "ejs");

//define route
app.get("/", async(req, res)=>{
    try{
        const response = await axios.get("https://dummyjson.com/products");
        const products = response.data.products;
        res.render("app",{products});
    }catch(error){
        console.error(error);
        res.status(500).send("Error fetching products.")
    }
})
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);

})