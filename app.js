const express = require('express')
const app = express()
const cors = require('cors')
const stytch = require('stytch')

app.use(cors())
app.use(express.json())

const client = new stytch.Client({
    project_id: process.env.Project_ID,
    secret: process.env.Stytch_Secret,
    env: stytch.envs.test
})

app.post('/login', async (req, res)=>{
    let email = req.body.email
    const params = {
        email: email,
        login_magic_link_url: 'http://localhost:3000/auth',
        signup_magic_link_url: 'http://localhost:3000/auth'
    }
    const response = await client.magicLinks.email.loginOrCreate(params)
    res.json(response)
})

app.listen(3005, ()=>{
    console.log("Server is running")
})