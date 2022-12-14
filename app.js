require('dotenv').config()
const Express = require('express')
const app = Express()
const cors = require('cors')
const stytch = require('stytch')

app.use(cors())
app.use(Express.json())

const client = new stytch.Client({
    project_id: process.env.Project_ID,
    secret: process.env.Stytch_Secret,
    env: stytch.envs.test,
})

const authMiddleware = (req, res, next) => {
    const sessionToken = req.headers.sessiontoken 
    client.sessions
    .authenticate({session_token: sessionToken})
    .then(()=> {next()})
    .catch((err)=>{
        res.status(401).json(err)
        console.log(err)
    })
}


app.post('/login', async (req, res)=>{
    let email = req.body.email
    const params = {
        email: email,
        login_magic_link_url: 'http://localhost:3000/auth',
        signup_magic_link_url: 'http://localhost:3000/auth'
    }
    const response = await client.magicLinks.email.loginOrCreate(params)
    console.log(client)
    res.json(response) })
   
app.post('/auth', async (req,res)=>{
    try {
    const token = req.body.token
    const sessionToken = await client.magicLinks.authenticate(token, {
        session_duration_minutes: 180,
    })
    console.log(sessionToken)
    res.json(sessionToken)}
    catch(err){
        res.json(err)
    }
})


app.post("/test", authMiddleware ,(req,res)=>{
    res.json("IT WORKED, THIS USER IS AUTHENTICATED!!!")
})

app.listen(3005, ()=>{
    console.log("Server is running")
})

