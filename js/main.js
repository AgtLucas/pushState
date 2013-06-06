$(function() {

    if(Modernizr.history) {

        var newHash      = "",
            $mainContent = $(".main"),
            $el;

        $("header").delegate("a", "click", function() {
            _link = $(this).attr("href");
            history.pushState(null, null, _link);
            loadContent(_link);
            return false;
        });

        function loadContent(href) {
            $mainContent
                    .find(".wrap")
                    .fadeOut(1000, function() {
                        $mainContent.hide().load(href + " .wrap", function() {
                            $mainContent.fadeIn(400);
                        });
                    });
        }

        $(window).bind('popstate', function() {
            _link = location.pathname.replace(/^.*[\\\/]/, '');
            loadContent(_link);
        });
    }

});