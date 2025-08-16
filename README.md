# JWT-stateless-authentication-in-Node-js
Node js authentication using JWT tokens - based on previously uploaded https://github.com/Keshavo-o/Custom-URL-shortner-app
## In "statefull" authentication :
server maintains a state(form of diary) in the backend.
But there are some problems using it :
1. states are maintained by server , if for some reason - server stops or restarts, all states will be destroyed .All users will be logged out.
2. statefull auth uses server memory and server has limited memory.
Thats the reason we can use "stateless" authentication 
## In "stateless" authentication:
There are no states. We store states in the payload/parkingticket/token only instead of server and we put a stamp on this token so that no once can modify it, only read it.
### we use JWT tokens for it:
JWT (JSON Web Token) is a compact, URL-safe token used for stateless authentication.
It allows securely transmitting information between client and server as a digitally signed JSON object.

#### STEPS:
1. We convert the payload into a JWT from website (encoded format).
2. we set JWT token in cookie.
3. This JWT token can be decoded into our original payload.

### NOTE: No one can modify the JWT token we set without our set "SECURITY KEY" and it is stored locally on client browser

## Small changes required in code:-
### 1. Edit Services->auth.js
Modifying the setuser and getuser functions, and removing the uuid module as we no longer need to map a user with a unique session id .
This mapping wouldnt need to be stored on server . It is handled by JWT module as - "jsonwebtoken" as real time.
Now users wouldnt be logged out even if server is reinstalled.
### 2.Edit Middlewares->auth.js
Here also we no longer need uuid module and we need to import auth.js service here .
We will use getuser function of the service to check and convert token stored locally as a cookie to user(if exists) and redirect to login if NOT.
### 3.Edit user_controller->handleloginform function
Now we dont need to create a unique session ID with uuid module and pass it to setuser.
Can create a JSON token with user object passing into it .
