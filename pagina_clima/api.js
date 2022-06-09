let laTemperatura=0
let ciudad =''
let humedad=0
let descripcion=''
let velocidadViento=0
let elClima= ''
let laCiudad=''
let colores= ["#371B58", "#4C3575", "#5B4B8A", "#7858A6", "#6A67CE", "#947EC3", "#B689C0", "#7C3E66", "#F2EBE9", "#A5BECC", "#243A73", "#C4DDFF", "#7FB5FF", "#001D6E", "#FEE2C5", "#2D31FA", "#5D8BF4", "#DDFF6FF"]

const clima =()=>{
  ciudad=document.getElementById('ciudad').value.toLowerCase()
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=db39f52d74cf53d87dcfed725fcd5257`)
  .then(response=> response.json()) .then(res=> {console.log(res);
  laTemperatura=Math.round(res.main.temp- 273.15 )
  humedad=res.main.humidity
  descripcion=res.weather[0].description
  velocidadViento=res.wind.speed
  laCiudad=res.name
  console.log(laCiudad)
  document.getElementById("temperatura").innerHTML=`la temperatura es de: ${laTemperatura} grados `;
  document.getElementById("humedad").innerHTML=`la humedad es de: ${humedad} g/m<sup>3</sup> `;
  document.getElementById("descripcion").innerHTML= `Descripcion: ${descripcion} `;
  document.getElementById("velocidad").innerHTML=`La velocidad del viento es de: ${velocidadViento} m/s`;
  document.getElementById("laciudad").innerHTML= `Ciudad: ${laCiudad}`;
  })
  document.getElementById("div1").animate([
    {transform: 'translateY(100px)'},
    {transform: 'translateY(0px)'}
  ],{
    duration: 1000,
    iterations: 1
  });
  
  document.getElementById("temperatura").style= `background-color: ${colores[Math.floor(Math.random()*colores.length)]}; 
  width: 90%; height: 15vh; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; border: solid 2px white; margin: 5%; padding: 10px;`

  document.getElementById("humedad").style= `background-color: ${colores[Math.floor(Math.random()*colores.length)]}; 
  width: 90%; height: 15vh; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; border: solid 2px white; margin: 5%; padding: 10px;`

  document.getElementById("descripcion").style= `background-color: ${colores[Math.floor(Math.random()*colores.length)]}; 
  width: 90%; height: 15vh; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; border: solid 2px white; margin: 5%; padding: 10px;`

  document.getElementById("velocidad").style= `background-color: ${colores[Math.floor(Math.random()*colores.length)]}; 
  width: 90%; height: 15vh; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; border: solid 2px white; margin: 5%; padding: 10px;`

  document.getElementById("laciudad").style= `background-color: ${colores[Math.floor(Math.random()*colores.length)]}; 
  width: 90%; height: 15vh; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; border: solid 2px white; margin: 5%; padding: 10px;`

}