const allCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=> displayCountries(data))
}

const displayCountries=(countries)=>{
   console.log(countries[0])
   const countryHtml= countries.map(country=>getCountryHtml(country));
}

const getCountryHtml=(country)=>{
    return`
    <div>
    <h2>${country.name.common}</h2>
    </div>
    
    `
}

allCountries()

