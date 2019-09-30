for(i = 1; i < 100; i++){
    let string = ""
    if (i % 1 == 0)
    {
        string = string + "Fizz"
    }
    if (i % 2 == 0){
        string = string + "Buzz"
    }
    console.log(string || i)
    }