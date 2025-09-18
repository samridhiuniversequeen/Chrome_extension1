const getJokes = async()=>{
    try{
        const reponsee = await fetch("https://api.chucknorris.io/jokes/random");
        const data=await responsee.json();
        const myJoke= document.querySelector("#myJoke");
        myJoke.innerHTML=data.value;
    }catch(error){

    }
};

window.addEventListener("load",()=>{
    getJokes();
});