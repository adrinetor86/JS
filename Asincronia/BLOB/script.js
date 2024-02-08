// fetch("https://pokeapi.co/api/v2/pokemon/152")
// .then((res)=>{return res.json()})
//     .then((res)=>{return res.sprites.front_default})
//     .then((res)=>{return fetch(res)})
//     .then((res)=>{return res.blob()})
//     .then((blob)=>{
//      document.getElementById("miImagen").src= URL.createObjectURL(blob)
//     })
//     .catch((e)=>console.log(e));

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDg0N2NlOWJhNzFlMjRhZDcyN2IzMTEwZmVhODc3OCIsInN1YiI6IjY1YmI5MTY4MWZkMzZmMDE2MzcyNGUzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2K8gkvnmQcwTqX5stVlqK-j-feoOZ8wwvWoh949AYDg'
        // api_key: '94847ce9ba71e24ad727b3110fea8778'
    }
};


//fetch('https://api.themoviedb.org/3/movie/157336', options)
   // fetch(`https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg?`)


let lat= "(-90; 90)";
let lon ="(-180; 180)";
let part ="current";
let API_key="fab39eb2123e1f1999354d978289ff8c";
        //fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_key}`)


        fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fab39eb2123e1f1999354d978289ff8c`)
   // fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=fab39eb2123e1f1999354d978289ff8c")
            .then((res)=> console.log(res.json()))

   // .then((res)=>res.blob())
    .then((res)=>{
      //  document.getElementById("miImagen").src=URL.createObjectURL(res);
     //   return;
       // console.log(res.json())
    })
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
