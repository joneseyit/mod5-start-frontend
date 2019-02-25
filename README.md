//put some padding on the bottom of the photo browse page
//search photos function
//create push history for create photo

#Tags
  -Make some seed data
  -Get JSON up
  -Add them to the photo- call photo.tags
  -Add content to Photo card with Tags
  -Add tags to Photo creation

#Tag search Bar
  - semantic ui container
  - create state
  - create a searchContainer component
  - filter results based on photo.tags
  -



#BUGS -
      - **fixed added logic in user controller** username and token are    undefined in localStorage
      - creating a username does not tell you username is already taken


#Styling
  - Do Subheading of like "find and share street art in your local community"


### Remove tag feature


### refactor
  - Use own props in the map state to props to find the particular photo
  - return it as a prop

### find marker by id
  - maps/id if they click on one
  - Render marker based on what they clicked on
  - setup a marker in store
  - if they click on it from the show page add marker to store
  - check assign variable in map to store or to all
  - center map based on marker
  - find a way to clear state after leaving the page


  "fixed bug on link in infowindow - it didn't go to the right show page"

### Got google directions to work.  Turns out...
    - Instead of using googlemaps api account use api=1 and redirect to google maps page.  Using the url parameters pass
    in lat/lng for destination and origin.  
    - When you use connect to map props you need to wrap it in
      withRouter for your routes to work
    - Use window.open(....) to have the url open in a new window
    - a tag does work - use target= *"_blank"* to get it to pop new window
    

### search by zip code
### like/comment on photos
