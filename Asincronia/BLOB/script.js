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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDg0N2NlOWJhNzFlMjRhZDcyN2IzMTEwZmVhODc3OCIsInN1YiI6IjY1YmI5MTY4MWZkMzZmMDE2MzcyNGUzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2K8gkvnmQcwTqX5stVlqK-j-feoOZ8wwvWoh949AYDg',
        // api_key: '94847ce9ba71e24ad727b3110fea8778'
    }
};

//fetch('https://api.themoviedb.org/3/movie/157336', options)
    fetch(`https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg?`)

    .then((res)=>res.blob())
    .then((res)=>{
        document.getElementById("miImagen").src=URL.createObjectURL(res);
        return;
       // console.log(res.json())
    })
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(err => console.error(err));
