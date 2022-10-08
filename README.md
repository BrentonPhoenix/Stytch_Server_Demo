This is the server side, a client side exists [Stytch Demo Client](https://github.com/BrentonPhoenix/Stytch_Demo_Client)

This project is not currently deployed.


This project is intended to represent a basic competence with Stytch Authentication. It could benefit from some expansion in functionality, but I have other skills to pick up at this time so expansion has been tabled for now.

Future Expansion:
- Further Routes
- Database connection(possible)


To test this code

Run
---

```
git clone https://github.com/BrentonPhoenix/Stytch_Server_Demo
```

and then navigate into the Stytch_Server_Demo directory then

Run
---
```
npm install
```

Now you need to go to [stytch.com](stytch.com) and 
- create an account
- go to the project dashboard
- create a .env file in the Stytch_Server_Demo directory
- create two variables (Stytch_Secret) and (Project_ID)
- grab the Project ID and Secret from the API keys tab of the stytch dashboard.
- set Project ID and Secret within quotes as below in the env file you have created
```
Stytch_Secret = "your Secret"

Project_ID = "your project ID"
```

save all changes and then run

```
npm start nodemon
```

at this point the server should be entirely functional. You may move on to cloning the Client in order to completely test this project.