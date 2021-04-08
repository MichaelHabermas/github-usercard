/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
let divCards = document.querySelector('.cards');

axios
	.get('https://api.github.com/users/MichaelHabermas')
	.then(futureData => {
		console.log(futureData);
		document.querySelector('.cards').appendChild(cardCreator(futureData));
	})
	.catch(drama => {
		console.log(drama);
	});

// console.log('this is the mGH data AGAIN: ' + mGH);
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

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

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
const cardCreator = obj => {
	let divCard = document.createElement('div');
	let imgUser = document.createElement('img');
	let divCardInfo = document.createElement('div');
	let h3Name = document.createElement('h3');
	let pUsername = document.createElement('p');
	let pLocation = document.createElement('p');
	let pProfile = document.createElement('p');
	let aUserPage = document.createElement('a');
	let pFollowers = document.createElement('p');
	let pFollowing = document.createElement('p');
	let pBio = document.createElement('p');

	divCard.classList.add('card');
	divCardInfo.classList.add('card-info');
	h3Name.classList.add('name');
	pUsername.classList.add('username');

	imgUser.setAttribute('src', obj.data.avatar_url);
	aUserPage.setAttribute('href', '#');

	// h3Name.textContent = `${obj.data}`;
	// pUsername.textContent = `${obj.data}`;
	// pLocation.textContent = `${obj.data}`;
	// pProfile.textContent = `${obj.data}`;
	// aUserPage.textContent = `${obj.data}`;
	// pFollowers.textContent = `${obj.data}`;
	// pFollowing.textContent = `${obj.data}`;
	pBio.textContent = `${obj.data.bio}`;

	// <h3 class="name">{users name}</h3>
	//       <p class="username">{users user name}</p>
	//       <p>Location: {users location}</p>
	//       <p>Profile:
	//         <a href={address to users github page}>{address to users github page}</a>
	//       </p>
	//       <p>Followers: {users followers count}</p>
	//       <p>Following: {users following count}</p>
	//       <p>Bio: {users bio}</p>

	divCard.appendChild(imgUser);
	divCard.appendChild(divCardInfo);
	divCardInfo.appendChild(h3Name);
	divCardInfo.appendChild(pUsername);
	divCardInfo.appendChild(pLocation);
	divCardInfo.appendChild(pProfile);
	divCardInfo.appendChild(pFollowers);
	divCardInfo.appendChild(pFollowing);
	divCardInfo.appendChild(pBio);
	pProfile.appendChild(aUserPage);

	return divCard;
};

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
