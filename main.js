Splitting();

var myVar;

function loading() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {

	$("#loadee").fadeTo("easing", 0);

}

(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('scrollx').scrollLeft -= (delta*80); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('scrollx').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('scrollx').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('scrollx').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('scrollx').attachEvent("onmousewheel", scrollHorizontally);
    }
})();

