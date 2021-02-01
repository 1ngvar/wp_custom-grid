$(".btn-menu").click(function(){
    $("menu").toggleClass("active");
});

$("menu a").click(function(){
    $("menu").removeClass("active");
});

$("#form").submit(function() {
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $(this).find("textarea").val("");
        alert("Your message has been submitted!");
        $("#form").trigger("reset");
    });
    return false;
});

var $root = $('html, body');

    $('a[href^="#"]').click(function() {
        var href = $.attr(this, 'href');

        $root.animate({
            scrollTop: $(href).offset().top
        }, 1000, function () {
            
        });

        return false;
    });


function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}