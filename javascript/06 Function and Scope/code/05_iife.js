//  Immediately Invoked Function Expression

(function (){
    const user = 'Jack'
    console.log(user);
})();

(function (name){
    console.log('Hello ' + name);
})('Rian');


/*(function getReq(){
    console.log('Hello ');
    getReq();
})();
*/

// it will crash browser



