document.addEventListener("DOMContentLoaded", function() {

    const gp = document.querySelector(".grandParent");
    const p = document.querySelector(".parent");
    const c = document.querySelector(".child");

    gp.addEventListener("click", () => {
        console.log("grandparent")
    }, true);
    p.addEventListener("click", () => {
        console.log("parent")
    }, true);
    c.addEventListener("click", () => {
        console.log("child")
    }, true);
    
});