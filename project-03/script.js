const video = document.getElementById("video");
const btn = document.getElementById("btn");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (e) {
    console.log("whoops, something went wrong.", e);
  }
}

btn.addEventListener("click", async () => {
  btn.disabled = true;
  await video.requestPictureInPicture();
  btn.disabled = false;
});

selectMediaStream();
