const audio = document.getElementById("audio");
const btn = document.getElementById("btn");

const API_KEY = "21bbab5ea7044775bcbf4b9b39dc372f";

function tellJoke(joke) {
  console.log("Joke:", joke);
  VoiceRSS.speech({
    key: API_KEY,
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

function toggleBtn() {
  btn.disabled = !btn.disabled;
}

async function getJokes() {
  const API_URL = "https://v2.jokeapi.dev/joke/Any";
  let joke = "";
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    toggleBtn();
    tellJoke(joke);
  } catch (e) {
    console.log("whoops, something went wrong: ", e);
  }
}

btn.addEventListener("click", getJokes);

audio.addEventListener("ended", toggleBtn);
