import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
// fetch all dogs
// render and append all dog cards to the container

window.addEventListener('load', async() => {
    // - send request for all dogs
        // - wait for response
    const dogs = await getDogs();

    // Once response shows up, render and append
    for (let dog of dogs) {
        const dogEl = renderDogCard(dog);

        dogListContainer.append(dogEl);
    }
});