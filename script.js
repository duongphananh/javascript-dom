console.log("My github console");

$( document ).ready(function() {    
    document.getElementsByTagName("head")[0].insertAdjacentHTML(
        "beforeend",
        "<link rel=\"stylesheet\" href=\"https://sdks.shopifycdn.com/polaris/latest/polaris.css\" />");

    var html = "<button type='button' class='Polaris-Button'><span class='Polaris-Button__Content'><span>Add Jackyy</span></span></button>";
    var floatbutton = "<button type='button' style='top:0;right:0;position:fixed;' class='Polaris-Button Polaris-Button--primary'><span class='Polaris-Button__Content'><span>Duong Ngu</span></span></button>";

    $('body').append(html);
    $('body').append(floatbutton);
    //   <div style="height: 500px;"><button type="button" class="Polaris-Button"><span class="Polaris-Button__Content"><span>Open</span></span></button></div>
});
