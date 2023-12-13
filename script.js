//page change
const Home = document.querySelector('#Home')
const About = document.querySelector('#About')
const knowMore = document.querySelector('#KnowMore')
const Services = document.querySelector('#Services')
const Contact = document.querySelector('#Contact')

Home.addEventListener('click', () => {
  window.location.href = "index.html"
})
About.addEventListener('click', () => {
  window.location.href = "About.html"
})
Services.addEventListener('click', () => {
  window.location.href = "Services.html"
})
knowMore.addEventListener('click', () => {
  window.location.href = "Know_More.html"
})
Contact.addEventListener('click', () => {
  window.location.href = "Contact.html"
})


// time on home page
const clock = document.querySelector('#Time');

setInterval( function() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)


//temp on home page
const temp = document.querySelector('#Temperature')
const apiKey = '443a114294824cc8b7a173602230512';
const city = 'london';
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=443a114294824cc8b7a173602230512&q=London&aqi=yes`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temperature = data.current.temp_c;
    //console.log(`Current temperature: ${city}: ${temperature}°C`);
    temp.innerHTML = `${city}: ${temperature}°C`
  })
  .catch(error => console.error('Error fetching data:', error));


  
  // changing body color using id start and end
const randomColor = function() {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  let autoChange;
  const startChanging = function () {
    if(!autoChange) {
      autoChange = setInterval(() => {
        document.body.style.background = randomColor();
      },1000)
    }
  }
  
  const stopChanging = function () {
    clearInterval(autoChange);
    autoChange = null
  }
  
  document.querySelector('#Start').addEventListener('click', startChanging)
  document.querySelector('#Stop').addEventListener('click', stopChanging)