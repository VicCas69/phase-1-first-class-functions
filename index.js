//function homework(){
  //  console.log("Don/'t forget to do your homework.")
//}
function lastName(){
    return "No last name found.";
}

function receivesAFunction(name){
    return name();
}



function returnsANamedFunction() { 
   return function last(){return lastName()}
}

function returnsAnAnonymousFunction(){return function(){return "My name"}}