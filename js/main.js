$(function() {

    var main = $(".main");

    $(document).on("click", "a", function() {
        var href = $("this").attr("href");

        history.pushState({}, '', href);
        main.load(href + " .main>*");
        return false;
    });

});