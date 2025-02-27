// const div = document.querySelector(`.ok`);
// l'url
const apiURL = 'https://restcountries.com/v3.1/all';

// asyn
async function fetchAndDisplayCountries() {
  try {
    const response = await fetch(apiURL);
    const countries = await response.json();

    // Sélectionner les 20 premiers pays
    const selectedCountries = countries.slice(0, 20);

   const countriesContainer = document.getElementById('countries-container');

    // les pays
    selectedCountries.forEach(country => {
        const countryDiv = document.createElement (`div`);
        countryDiv.classList.add(`country`) 
        

        // drapeaux
       
        const flagURL = country.flags && country.flags.png ? country.flags.png : 'default-flag.png';
        setTimeout(flagURL, 4000);

        const flag = document.createElement('img');
        flag.src = flagURL;
        flag.alt = `${country.name.common} Flag`;

        const name = document.createElement(`p`);
        name.innerHTML = `<strong>Nom :</strong> ${country.name.common} `;

        const capital = document.createElement(`p`)
          capital.innerHTML = `<strong>Capitale :</strong>  ${country.capital ? country.capital[0] : 'N/A'}`;


          const currency = document.createElement('p');
          const currencies = country.currencies ?Object.values(country.currencies)[0].name : 'N/A';
          currency.innerHTML = `<strong>Devise :</strong> ${currencies}`;

          countryDiv.appendChild(flag);
          countryDiv.appendChild(name);
          countryDiv.appendChild(capital);
          countryDiv.appendChild(currency);

          countriesContainer.appendChild(countryDiv);
        });
    } catch (error) {
        console.error(`Erreur:`, error);
    }
}
    
fetchAndDisplayCountries();