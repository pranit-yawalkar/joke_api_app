const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// Using fetch and promises
// const generateJoke = () =>{
//     const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }

//     fetch("https://icanhazdadjoke.com", setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//         joke.innerHTML = data.joke;
//     }).catch((err) => {
//         console.log(err);
//     });
// }

// Using async await
const generateJoke = async() =>{
    try{
        const setHeader = {
            headers:{
                Accept : "application/json"
            }
        }
        const res = await fetch("https://icanhazdadjoke.com", setHeader);
        const data = await res.json();
        joke.innerHTML = data.joke;
    } catch(err){
        console.log(err);
    }
}

jokeBtn.addEventListener("click", generateJoke);
generateJoke();