//target the element class brush
// let colorBox = document.querySelector("div.brush")
// console.log(colorBox)

//form > button target

let colorInput = document.querySelector("#form")
console.log(colorInput)

colorInput.addEventListener("submit", function(evt){
    evt.preventDefault();
    document.querySelector(".brush").style.background 
    = document.querySelector("#color-field").value;
})

var i;
for(i=0; i < 20; i++){
    var msPaintBox = document.createElement('div');
    msPaintBox.className = "square"
    document.getElementsByTagName('body')[0].appendChild(msPaintBox);
    msPaintBox.classList = "square"
    msPaintBox.addEventListener("click", function(evt) {
        evt.preventDefault();
        evt.target.style.background = "green"
    })
}

// for(i=0; i < 20; i++){
//     document.querySelectorAll(".square").style.background 
//     = document.querySelector("#color-field").value;
// }    














// var artsy = document.createElement('div');
// document.body.appendChild(artsy);
// artsy.classList.add(artsy);






    // document.querySelector(".brush").style.background = document.querySelector("#color-field").style.background;

    // form.addEventListener("submit", function(evt){
//     evt.preventDefault();
//     alert("it works");
//     })

//event handeler will extract information from input field
//assign input value to "style.backgroundColor"


