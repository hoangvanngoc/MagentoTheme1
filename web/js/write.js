var videoPlayer = document.getElementById("videoPlayer");
var videoModal = document.getElementById("videoModal");

function stopVideo(){
    videoPlayer.style.display = 'none';
    videoModal.style.display = 'none';
}
function playVideo(){
    // myVideo.src = file;
    myVideo.autoplay = true;
    videoModal.style.display = 'block';
    videoPlayer.style.display = 'block';
}


