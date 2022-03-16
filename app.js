const movements = [200, 450, -400, 3000, -650, -130];
  //adding counter
  //for of method
for (const[i, movement] of movements.entries())  {
   if (movement > 0)
    
   {
       console.log(`movement ${i+1}: you deposited ${movement}`);
   } else {
       console.log(`movement ${i+1}: you withdrew ${math.abs(movement)}`) ;
   }


       //for each method

       movements.forEach(function(mov, i, arr) {
        if (mov > 0)
    
        {
            console.log(`you deposited ${movement}`);
        }
         else {
            console.log(`you withdrew ${math.abs(movement)}`) ;
         }
     
       });

    