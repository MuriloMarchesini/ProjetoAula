document.addEventListener("DOMContentLoaded", function() {
    var footer = document.querySelector("footer");
    var body = document.querySelector("body");

    function updateFooterPosition() {
        var bodyHeight = body.offsetHeight;
        var windowHeight = window.innerHeight;
        var footerHeight = footer.offsetHeight;

        if (bodyHeight < windowHeight) {
            footer.style.position = "fixed";
        } else {
            footer.style.position = "relative";
        }
    }

    window.addEventListener("resize", updateFooterPosition);
    updateFooterPosition();
});