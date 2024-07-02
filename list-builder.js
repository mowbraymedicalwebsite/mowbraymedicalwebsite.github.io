$(document).ready(function() {

    var delay = 300; // milliseconds
    var cookie_expire = 0; // days

    var cookie = localStorage.getItem("list-builder");
    if(cookie == undefined || cookie == null) {
        cookie = 0;
    }

    if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
        $("#list-builder").delay(delay).fadeIn("fast", () => {
            $("#popup-box").fadeIn("fast", () => {});
        });

        $("#popup-close").click(() => {
            $("#list-builder, #popup-box").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });

        message = document.getElementById("popup-box");
        document.addEventListener("click", function(event)
        {
            if(message.contains(event.target))
            {
                $("#list-builder, #popup-box").hide();
                localStorage.setItem("list-builder", (new Date()).getTime());
            }
        });

    // var container = document.getElementById("popup-box");
    // document.addEventListener('click', function( event ) {
    //   if (container !== event.target && !container.contains(event.target)) {    
    //     console.log('clicking outside the div');
    //   }
    // });

    }

});
