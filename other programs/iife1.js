var x = 23;

(function(){

    var x = 43;

    (function(){
        x++;
        console.log(x);
        var x = 10;
    })();

})();





















