document.addEventListener("DOMContentLoaded", function() {

    let gParent = document.querySelector(".grandParent");
    let parent = document.querySelector(".parent");
    let child = document.querySelector(".child");

    gParent.addEventListener("click",() => {
        console.log("body clicked");
    });
    parent.addEventListener("click",() => {
        console.log("parent clicked");
    });
    child.addEventListener("click",() => {
        console.log("child clicked");
    });
    
})