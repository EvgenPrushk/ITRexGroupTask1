getCurrencies();

 async function getCurrencies() {
   const responce = fetch('https://www.nbrb.by/API/')
    
   const data = await (await responce).json();

   const result = await data;
   console.log(result);
}