import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/aburn7577')
  .then(futureData =>{
    console.log(futureData)
  })
  .catch(error => console.log(error))
  

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const start = document.querySelector('.cards')
/* axios.get('https://api.github.com/users/aburn7577')
  .then(futureData =>{
    const userdata = futureData.data
    console.log(futureData)
    start.append(cardMaker(userdata))
  })
  .catch(error => console.log(error))
  */

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
    'PVigar88',
    'rosecrowned',
    'StnsGeneral',
    'stu-wd',
    'tdubs42',
    'aburn7577'
];
followersArray.forEach(element => {
  axios.get(`https://api.github.com/users/${element}`)
  .then(futureData =>{
    const userdata = futureData.data
    
    start.append(cardMaker(userdata))
  })
  .catch(error => console.log(error))
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(object){
  // creating elements
  const cardDiv = document.createElement('div')
    const imgCard = document.createElement('img')
    const cardInfoDiv = document.createElement('div')
      const nameH3 = document.createElement('h3')
      const userNameP = document.createElement('p')
      const usersLocation = document.createElement('p')
      const userProfile = document.createElement('p')
        const gitHubAddress = document.createElement('a')
      const followersP = document.createElement('p')
      const followingP = document.createElement('p')
      const bioP = document.createElement('p')
// setting class
cardDiv.classList.add('card')
cardInfoDiv.classList.add('card-info')
nameH3.classList.add('name')
userNameP.classList.add('username')
// setting text and attributes
imgCard.src = object.avatar_url
nameH3.textContent = object.name
userNameP.textContent = object.login
usersLocation.textContent = `Location: ${object.location}`
userProfile.textContent = 'Profile: ' + gitHubAddress
gitHubAddress.href = object.html_url
gitHubAddress.textContent = object.html_url
followersP.textContent = `Followers: ${object.followers}`
followingP.textContent = `Following: ${object.following}`
bioP.textContent = `Bio: ${object.bio}`
// hierarchy
cardDiv.append(imgCard)
cardDiv.append(cardInfoDiv)
  cardInfoDiv.append(nameH3)
  cardInfoDiv.append(userNameP)
  cardInfoDiv.append(usersLocation)
  cardInfoDiv.append(userProfile)
    userProfile.append(gitHubAddress)
  cardInfoDiv.append(followersP)
  cardInfoDiv.append(followingP)
  cardInfoDiv.append(bioP)
return cardDiv
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
