document.addEventListener("DOMContentLoaded", function() {
    var userAgent = navigator.userAgent.toLowerCase();
    var isWeChat = userAgent.match(/MicroMessenger/i) == "micromessenger";
    var isQQ = userAgent.match(/QQ/i) == "qq";
    var guide = document.getElementById("guide");

    if (isWeChat || isQQ) {
        guide.style.display = "block";
    }
});
