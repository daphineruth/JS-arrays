const movements = [200, 450, -400, 3000, -650, -130];

for (const movement of movements)  {
   if (movement > 0)
    
   {
       console.log(`you deposited ${movement}`);
   } else {
       console.log(`you withdrew ${math.abs(movement)}`) ;
   }


       //for each loop

       movements.forEach(function(movement) {
        if (movement > 0)
    
        {
            console.log(`you deposited ${movement}`);
        }
         else {
            console.log(`you withdrew ${math.abs(movement)}`) ;
         }
     
       });

    