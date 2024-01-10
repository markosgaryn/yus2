$(document).ready(function () {
    $(".video-item").each(function () {
        var video = $(this).find(".hover-video");
        var overlayImage = $(this).find(".overlay-image");

        $(this).mouseover(function () {
            video.get(0).play();
            overlayImage.css("opacity", 0);
        });

        $(this).mouseout(function () {
            video.get(0).pause();
            video.get(0).currentTime = 0;
            overlayImage.css("opacity", 1);
        });
    });
});
