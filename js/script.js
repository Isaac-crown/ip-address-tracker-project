let ipAddress = document.getElementById('ip-adrress')
let locT = document.getElementById('location')
let timeZone = document.getElementById('timezone')
let isp = document.getElementById('isp')
const input = document.getElementById('inputText')

let formSumbit = document.getElementById('submit')
const map = L.map('map').setView([0, 0], 13);
// let map = document.getElementById('map')




formSumbit.addEventListener('submit',  loadDoc)



function loadDoc(e) {
    const xhr = new XMLHttpRequest()

    const inp = document.getElementById('inputText').value


xhr.open('GET', `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_S6NjFcY1W5l8NIBHDgSyv6kXnkyuJ&ipAddress=${inp}`, true)


xhr.onload = function(){
    if(this.status === 200){
        const address = JSON.parse(this.responseText)
        console.log(address)

        ipAddress.innerHTML = address.ip
        isp.innerHTML = address.isp
        locT.innerHTML = `${address.location.region}, ${address.location.city}`
        timeZone.innerHTML = address.location.timezone

        const longitude = address.location.lng
        const latitude = address.location.lat

       let map = L.map('map').setView([longitude, latitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([latitude,longitude]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    
    }
   
   
}
xhr.send()
e.preventDefault()

}


window.addEventListener('DOMContentLoaded', myApi)


function myApi () {
    fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
  .then(data => {
    let ipE = data.ip
      const xml =  new XMLHttpRequest()
   
  
      xml.open('GET', `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_S6NjFcY1W5l8NIBHDgSyv6kXnkyuJ&ipAddress=${ipE}`, true)
  
  
      xml.onload = function(){
          if(this.status === 200) {

            const resp = JSON.parse(this.responseText)

            ipAddress.innerHTML = resp.ip
            isp.innerHTML = resp.isp

             locT.innerHTML = `${resp.location.region}, ${resp.location.city}`
              timeZone.innerHTML = resp.location.timezone
          
              const longitude = resp.location.lng
               const latitude = resp.location.lat

               console.log(longitude, latitude)
          
            
          
              L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              }).addTo(map);
              
              L.marker([latitude,longitude]).addTo(map)
                  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                  .openPopup();
          
          }
      }
     
      xml.send()
  
  
  
  
  })




}



