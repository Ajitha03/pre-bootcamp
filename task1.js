function sum(input){
             
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }
   console.log(sum([1,2,3]));
   console.log(sum([10,20,3]));
   console.log(sum([1,2,'a',3]));