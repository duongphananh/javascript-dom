console.log("My github console");

$( document ).ready(function() {    
    document.getElementsByTagName("head")[0].insertAdjacentHTML(
        "beforeend",
        "<link rel=\"stylesheet\" href=\"https://raw.githubusercontent.com/duongphananh/javascript-dom/master/style.css\" />");

    var html = "<button class='btn'>Button</button>";
    var floatbutton = "<button type='button' style='top:0;right:0;position:fixed;' class='btn btn--primary'>Sticky Button</button>";

    $('body').append(html);
    $('body').append(floatbutton);
});
