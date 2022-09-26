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


app.post('/login', async (req, res)=>{
    let email = req.body.email
    const params = {
        email: email,
        login_magic_link_url: 'http://localhost:3000/auth',
        signup_magic_link_url: 'http://localhost:3000/auth'
    }
    const response = await client.magicLinks.email.loginOrCreate(params)
    console.log(client.project_id)
    res.json(response) })
   
    


app.listen(3005, ()=>{
    console.log("Server is running")
})


// const params = {
//     email: REDACTED
// }

// client.magicLinks.email.loginOrCreate(params)
// .then(resp=> console.log(resp))
// .catch(err=> console.log(err))

// router.post('/login', async (req,res) =>{
//     let email = req.body.email
//     const params = {
//         email,
//         login_magic_link_url: 'http://localhost:3000/auth',
//          signup_magic_link_url: 'http://localhost:3000/auth'
//     }
//     const response = await client.magicLinks.email.loginOrCreate(params)
//     res.json(response)
// })