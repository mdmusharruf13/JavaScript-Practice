document.addEventListener("DOMContentLoaded", function() {

    const gp = document.querySelector(".grandParent");

    gp.addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
    });

});