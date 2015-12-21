<script>
for (var i = 1; i <= 100; i++){

	switch(true) {
     case (i%3===0) && (i%5===0):
    console.log ("fizz"+"bazz");
    break
    
    case (i%3===0):
    console.log ("fizz"); 
    break;
    
    case (i%5===0):
    console.log ("bazz"); 
    break;   
    
    default:
    console.log (i); 
  };
 };
 </script>