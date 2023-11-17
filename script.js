
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a56232ee6mshadf8267f89062e0p108e30jsnd8edbe8a56ba',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};


let input = document.querySelector('input');
let button = document.querySelector('button');

let valueInput;

button.addEventListener('click', function(){
    valueInput = input.value;
    valueInput = valueInput.replaceAll('','%20')
    console.log(valueInput);
    getData();
    
})

async function getData(){
    try {
        const url = 'https://shazam.p.rapidapi.com/search?term='+valueInput+'&locale=en-US&offset=0&limit=5';
        const response = await fetch(url, options);
        let result = await response.json();
        console.log(result.tracks.hits[0].track.title);
        console.log(result.tracks.hits);
        console.log(result);

        let title = [];
        let subtitle = [];

        for (let index = 0; index < 4; index++) {
            title.push(result.tracks.hits[index].track.title);
            subtitle.push(result.tracks.hits[index].track.subtitle);
            console.log(title[index]);
            console.log(subtitle[index]);

            let musique1 = document.querySelector('.musique1');
            musique1.innerHTML += "Nom de l'artiste: "+subtitle[index] +"<br>" +"Nom de la chanson: "+title[index] +"<br>" +"<br>";

        }

    } catch (error) {
        console.error(error);
    }

    
}



function replace(){
    variable.replaceAll("",'%20');
}