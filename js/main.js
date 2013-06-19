(function() {

    function supports_history_api() {
        return !!(window.history && history.pushState);
    }

    function setupHistoryClicks() {
        addClicker(document.getElementById("home"));
        addClicker(document.getElementById("about"));
    }

    function

})();