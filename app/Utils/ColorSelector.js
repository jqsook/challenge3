//Goal is to make a similiar item to the generate ID to import the coloring for header and button selector tags.


// These functions were pulled from the mozzilla link
export const colorGenerator = function () {

    var colorWell;
    var defaultColor = "#005c99";
    window.addEventListener("load", startup, false);


    function startup() {
        colorWell = document.querySelector("#colorWell");
        colorWell.value = defaultColor;
        colorWell.addEventListener("input", updateFirst, false);
        colorWell.addEventListener("change", updateAll, false);
        colorWell.select();
    }
    function updateFirst(event) {
        var p = document.getElementsByName("p");  //changed to name

        //Im out of ideas its 5am Im goint to give it the ole "Jesus take the wheel- full send"
        if (p) {
            p.style.color = event.target.value;
        
        }
    }

    function updateAll(event) {  
        document.querySelectorAll("p").forEach(function (p) {
            p.style.color = event.target.value;
        });
    }
}