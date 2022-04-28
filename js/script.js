document.getElementById('submit').addEventListener('submit',  loadDoc)



function loadDoc(e) {
    const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_S6NjFcY1W5l8NIBHDgSyv6kXnkyuJ&ipAddress=8.8.8.8', true)


xhr.onload = function(){
    if(this.status === 200){
        const address = JSON.parse(this.responseText)

        // console.log(address)
    }
   
   
}
xhr.send()
e.preventDefault()

}

var map = L.map('map').setView([6.484697178802936, 3.3568866397860586], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([6.484697178802936, 3.3568866397860586]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();