const sb=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const Icon=document.querySelector(".icon");


const apikey="64665095bff217c6bda783aa4be95f8a";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkwe(city) {
const u=await fetch(apiurl+city+ `&appid=${apikey}`);
if(u.status==404){
    document.querySelector(".err").style.display="block";
    document.querySelector(".weather").style.display="none";

}else{
var data=await u.json();

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".humd").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

if(data.weather[0].main=="Clouds"){
    Icon.src="clouds.png";
}else if(data.weather[0].main=="Clear"){
    Icon.src="clear.png";
} else if(data.weather[0].main=="Rain"){
    Icon.src="rain.png";
}else if(data.weather[0].main=="Drizzle"){
    Icon.src="drizzle.png";
}else if(data.weather[0].main=="Mist"){
    Icon.src="mist.png";
}
document.querySelector(".weather").style.display="block";
document.querySelector(".weather").style.margin="50px";
document.querySelector(".err").style.display="none";
}
}
searchbtn.addEventListener("click",()=>{
checkwe(sb.value);
})