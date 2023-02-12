# Project REST-Rant

REST-Rant is an app where users can review restaurants.

RESR- Rant Website 

For this project, I will be demonstrating th use of express. I will do this by making a website for a restaurant. 
I will use the functions GEt and PORT to set up the website.

For the first part, I have created an index, places and 404 page. 

localhost:3000/
!image1.png

Routes Table
|Method|Path|Purpose|
|:...:|:...:|:...:|
|GET|/|Home page|
|GET|/places|Places index page|
|POST|/places|Create new place|
|GET|/places/new|Form page for creating a new place|
|GET|/places/:id|Details about a particular place|
|PUT|/places/:id|Update a particular place|
|GET|/places/:id/edit|Form page for editing an existing place|
|DELETE|/places/:id|Delete a particular place|
|POST|/places/:id/rant|Create a rant (comment) about a particular place|
|DELETE|/places/:id/rant/:rantId|Delete a rant (comment) about a particular place|
|GET|*|404 page (matches any route not defined above)|

Places/Restaurants Table
|Name |City |State|Cuisine|Pic  |
|:...:|:...:|:...:|:...:  |:...:|
|Texas de Brazil|Las Vegas|Nevada|Brazilian|texasDeBrazil.png|
|Fogo de chao|Las Vegas|Nevada|Brazilian|fogoDeChao.png| 
|Cheesecake Factory|Henderson|Nevada|American|cheesecakeFactory.png|

