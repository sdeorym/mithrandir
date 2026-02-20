import express from "express"
import cors from "cors"
import Mailjet from "node-mailjet"
import dotenv from "dotenv"
import { fileURLToPath } from "url";
import path from "path";
import fs from 'fs';

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var access = fs.createWriteStream('./node.access.log', { flags: 'a' });
//var error = fs.createWriteStream('./node.error.log', { flags: 'a' });

process.stdout.write = process.stderr.write = access.write.bind(access);


//process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE

app.get("/", async (req, res) => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post("/send-email", async (req, res) => {
  const url="https://api.mailjet.com/v3.1/send";
  const pw="f811be8a3c63505666c60b81f616a030:86d62f30628442442516da94817522c6";
  const basicAuth = btoa(pw);

  const { username, email, message } = req.body;
  console.log(req.body);
  console.log("Name: ", username, " Email: ", email, " Message: ", message );


  const dataToSend={
          Messages:[
              {
                  From:{
                      Email: "info@lpgconsulting.fr",
                      Name: 'LPG Consulting Webpage'
                  },
                  To: 
                      [
                          {
                              Email:"luisarean@gmail.com",
                              Name: 'LPG Consulting Webpage'
                          }
                      ],
                  Subject: '[Webpage contact]',
                  TextPart: 
                      `{Name: ${username},Email: ${email},Message: ${message}}`
              }
          ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${basicAuth}`
            },
            body: JSON.stringify(dataToSend)
          });
        
        if (!response.ok) {
            throw new Error("Il y a eu une erreur.")
        } 
        res.json({ success: true });
        
    }
    catch(error) { res.json({ success: false });}
    
});

app.listen(process.env.PORT || 3000, "0.0.0.0")