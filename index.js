function receivesAFunction(greet){
    return greet();
}
receivesAFunction( function () {return "Hello";});

function returnsANamedFunction(){
   return  function doThis(){
   };
}
returnsANamedFunction(doThis);

function returnsAnAnonymousFunction(){
    return function () {
        
    };
}
