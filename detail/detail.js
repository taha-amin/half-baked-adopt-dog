import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container

window.addEventListener('load', async() => {
    //figure out which dog id we want to load
    const data = new URLSearchParams(window.location.search);
    const dogId = data.get('id');

    //Send request for a particular dog
    const dog = await getDog(dogId);
    //wait for the response
    const dogEl = renderDogDetail(dog);

    //once the response shows up, render and append
    dogDetailContainer.append(dogEl);
});