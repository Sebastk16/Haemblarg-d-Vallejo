document.addEventListener("DOMContentLoaded", function () {
    const mainVideo = document.getElementById("mainVideo");
    const videoItems = document.querySelectorAll(".video-item");

    videoItems.forEach((item) => {
        item.addEventListener("click", function () {
            const videoSrc = item.getAttribute("data-video");
            mainVideo.src = videoSrc;
            mainVideo.play();
        });
    });
});
