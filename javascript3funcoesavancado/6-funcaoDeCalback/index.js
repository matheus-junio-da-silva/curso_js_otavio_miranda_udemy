function rand(min = 1000, max = 3000) {
    const random = Math.random() * (max - min) + min;
    return Math.floor(random);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, rand());
    
}
function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}
f1(function() {
    f2(function(){
        f3 (function(){
            console.log('ola mundo');
        });
    });
});

console.log('ola mundo');

