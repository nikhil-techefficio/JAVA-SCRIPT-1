# Synk (Synchronous)
Perticular lie by line exicution of code 
EX: let a =99 --> this one exicutes first 
     var = 44  --> this secnd 

in the same sequence 

# Asynk (Asynchronous)

Not in sequence of exicution of code
EX: setTimeout(() => {
    console.log("hello world")
}, 2000) --> this one exicutes after 2 seconds



# Call back 
  is a argument for other function 
   
    function sum(a,b){
        console.log(a+b)
    }

    function calculate(a,b,sumCallback){
        sumCallback(a,b)
    }

    Calculate(1,2,sum)  --> call backs are passed as is 
     Calculate(1,2,sum())  --> is wrong as we are stating the function to exicute there 
    Arrow function
     calculate(1,2,(a,b) => {console.log(a+b);});

       Call back Hell 

       TO solve Promisses 

  # Promises 
             