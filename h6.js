function max(array){
    let a = array[0]
    for(i = 1; i <array.length; i++)
    {
        if(a < array[i])
        {
            a = array[i]
        }
    }
    console.log(a)
 }
 max([1,18,10])
 max([3,-2,5,])