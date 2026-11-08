import express from "express"

const app = express(); 
const PORT = 3002; 

const contacts = []

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true})); 

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("home"); 
});

app.get("/admin", (req, res) => {
    res.render("admin", { contacts });
});

app.post("/submit-contact", (req, res) => {
    const contact = req.body;
    contact['timestamp'] = new Date(); 

    console.log(contact); 

    contacts.push(contact); 
    res.render('confirm', { contact });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});