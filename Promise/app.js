const flag = document.createElement('img');
document.body.appendChild(flag);

fetch('https://restcountries.eu/rest/v2/all')
    .then(response => {return response.json(); })
    .then(json => {
        console.log(json)
        flag.src = json[0].flag;
        console.log("flag added");
    })
    .catch(err => console.log('errors '+err.message));

