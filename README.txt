 Install the following
    a)express
    b)mongoose
    c)body-parser
    d)morgan
    e)nodemon
  

This project connects to a MongoDB Atlas database. It should be able to connect from any IP address. I used Postman to test the API calls. Run server.js to start the server. 

Postman Requests: 

1.
GET localhost:3000/cupcake/
    -Will give you a list of cupcakes in the store

2.
POST localhost:3000/cupcake/
  -Lets you add a new cupcake

  Sample JSON: 
  {
        "name": "Chocolate Delight",
        "description": "A cupcake using the best Chocolate",
        "price": 800,
        "ingredients": [
            "Chocolate",
            "Cupcake"
        ]
  }

 3.
  PUT  localhost:3000/cupcake/<_id>
    -replace _id with the cupcake ID of the cupcake yuou want to modify

    Sample request:
        PUT  localhost:3000/cupcake/65b869937d840f8daae51f81
     Sample JSON: 
        {
            
                "price": 900
            
        }


4. DELETE localhost:3000/cupcake/<_id>
    -delete entry with _id 
    SAMPLE Request
        DELETE  localhost:3000/cupcake/65b869937d840f8daae51f81



    



