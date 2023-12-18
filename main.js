document.addEventListener ("DOMContentLoaded", ()=> {

    // document.querySelector("#currency-converter").addEventListener("submit" , (event) => {

    //     event.preventDefault(); //Because default functionality is when you
    //     // click submit it will refresh the page so to prevent it
        
    //     const {target : {from , to , amount}} = event;
    //     // Access krna hai feilds ka toh we will use target property by destructing the event object

    //     let headers = new Headers();
    //     headers.append("apikey" , "Ly8hVRSboJoiPqEf0JkVUcEEBYj78Dz0");

    //     const requestOptions = {
    //         method: "GET" ,
    //         headers, 
    //     }
  
    // // noow we want to pass the service, in order to call that
    // // function we will us a built in api provide by the browser . FETCh which accepts the url. 

    // fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
    // // Once the Api request is done we will get a promise

    // .then(response => response.json())
    // .then(data => {
  
    //     let {info , date , query: {to} , result} = data 
    //      document.querySelector(".result").textContent= `Converted value in ${to} is ${result} `
    // })
    // .catch(error => console.log(error))
    
    //using async and await its easier and better

  document.querySelector("#currency-converter").addEventListener("submit" , async (event) => {

         event.preventDefault();
         const {target : {from , to , amount}} = event;

         let headers = new Headers();
         headers.append("apikey" , "Ly8hVRSboJoiPqEf0JkVUcEEBYj78Dz0");

         const requestOptions = {
             method: "GET" ,
             headers, 
         }
         try{
         let response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`, requestOptions)
         let data = await response.json();
         let {info , date , query:{to: convertedTo} , result} = data 
          document.querySelector(".result").textContent= `Converted value in ${convertedTo} is ${result} `
          }
         catch(error) { console.log(error);

         } finally{
             console.log("finally block")
         }
     })
    

    })
