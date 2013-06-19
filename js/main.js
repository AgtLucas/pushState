(function() {

    function supports_history_api() {
        return !!(window.history && history.pushState);
    }

    function setupHistoryClicks() {
        addClicker(document.getElementById("home"));
        addClicker(document.getElementById("about"));
    }

    function addClicker(link) {
        link.addEventListener("click", function(e) {
            changePage(link.href);
            history.pushState(null, null, link.href);
            e.preventDefault();
        }, false);
    }

    // function changePage(href) {
    //     var req = new XMLHttpRequest();
    //     req.open("GET",
    //         )
    // }

})();