

function random() {
  let jokeArr = ["What is the least spoken language in the world? Sign Language", "I have kleptomania, but when it gets bad, I take something for it.", "Why do bears have hairy coats? Fur protection.", "Why was ten scared of seven? Because seven ate nine.", "Did you hear about the Mexican train killer? He had loco motives", "What's blue and not very heavy? Light blue.", "What is the hardest part about sky diving? The ground.", "What kind of music do planets listen to? Nep-tunes.", "Did you hear about the kidnapping at school? It's ok, he woke up.", "What do you call an eagle who can play the piano? Talonted!"]


  let joke = document.getElementById("joke");
  let j = jokeArr[Math.floor(Math.random() * jokeArr.length)];

  // console.log(j);

  joke.innerText = j;

}


let button = document.getElementById('knapp');
button.addEventListener('click', random);


// console.log(button);