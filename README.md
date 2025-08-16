# JWT-stateless-authentication-in-Node-js
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
