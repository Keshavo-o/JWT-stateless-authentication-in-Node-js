# JWT-stateless-authentication-in-Node-js
## In "statefull" authentication :
server maintains a state(form of diary) in the backend.
But there are some problems using it :
1. states are maintained by server , if for some reason - server stops or restarts, all states will be destroyed .All users will be logged out.
2. statefull auth uses server memory and server has limited memory.
Thats the reason we can use "stateless" authentication 
## In "stateless" authentication:

