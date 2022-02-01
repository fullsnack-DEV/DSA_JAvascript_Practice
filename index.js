//REcursion 
//function calling itself known as Recursion 

function SayName(n)  {

 if(n <= 0) { 
   return
 }

  console.log(n); 
  SayName(n-1);
}

SayName(12)


// if we call the above function it get stuck into infinite loop; 
//Lets add base condition to it
