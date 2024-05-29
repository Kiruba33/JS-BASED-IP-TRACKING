const url =
'https://api.ipgeolocation.io/timezone?apiKey=acf89db8a6f64fb8a33f27c13086a2cc'; const
timezone = async (url) => {
try {
const response = await axios.get(url)
const data = await (response.data)
console.log(data)
setVpn(data)
console.log(data)
}
catch (error) {
console.log(error)
}
}
return ( timezone(url));
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
const [current, setCurrent] = useState('');
const [external, setExternal] = useState('');
async function renderUsers() {
let users = await getUsers(); let
html = ''; users.forEach(user =>
{
let htmlSegment = `<div class="user">
<img src="${user.profileURL}" >
<h2>${user.firstName} ${user.lastName}</h2>
<div>class="email"><a>href="email:${user.email}">${user.email}</a></div>
</div>`;
html += htmlSegment; });
let container = document.querySelector('.container');
container.innerHTML = html;
}
renderUsers();
const [vpn, setVpn] = useState(null);
const timezone = async (url) => { try {
const response = await axios.get(url)
const data = await (response.data)
setVpn(data)
console.log(data)
}
catch (error) {
console.log(error)
}
}
function json(url) {
return fetch(url).then(res => res.json());
}
let apiKey = 'your_api_key';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
console.log(data.ip);
console.log(data.city);
console.log(data.country_code);
// so many more properties
})
function determineIps() {
const pc = new RTCPeerConnection(servers);
pc.createDataChannel("");
pc.createOffer().then(offer => pc.setLocalDescription(offer))
pc.onicecandidate = (ice) => {
if (!ice || !ice.candidate || !ice.candidate.candidate) { console.log("all done")
pc.close();
return;
}
let split = ice.candidate.candidate.split(" "); if
(split[7] === "host") { console.log(`Local Ip:
${split[4]}`); setCurrent(split[4])
} else {
console.log(`External Ip ${split[4]}`);
setExternal(split[4])
}
};
}
function getStartup(data, systemTimezone) { if
(data === systemTimezone) {
return true
} else { return
false
}
}
let dateAndTime = document.getElementById("dateAndTime"); let
date = document.getElementById("date");
let time = document.getElementById("time");
let dateIN = document.getElementById("dateIN"); let
dateUs = document.getElementById("dateUs"); let
newDate = new Date();
dateAndTime.innerHTML = newDate.toLocaleString();
date.innerHTML = newDate.toLocaleDateString(); time.innerHTML
= newDate.toLocaleTimeString();
var options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long',
};
dateIN.innerHTML = newDate.toLocaleString("en-IN", options);
dateUs.innerHTML = newDate.toLocaleString("en-US", options);
useEffect(() => {
setInterval(() => {
determineIps();
timezone(url); ipinfo();
}, 5000);
return () => {
determineIps();
timezone(url); ipinfo();
};
}, [])
return (
<div className="App">
<img className='hg' src='https://vpnapi.io/assets/img/map.svg' alt="img" />
<h1 className='hs'>TEAM BUGZ</h1>
{vpn && <div>
{vpn.ip === external ? getStartup(vpn.country, timeZoness.id) ? <div>
<h1>VPN - NO VPN DETECTED </h1>
<h1>ORIGINAL IP - {external}</h1>
<h1>LOCATION - {vpn.company.name} {vpn.city} </h1>
<h1>REGION - {vpn.region}</h1>
<h1>TIMEZONE - {vpn.timezone}</h1>
{vpn.privacy.tor ? <h1>TOR USED</h1> : false}
</div> :
<div>
<h1>VPN - VPN DETECTED</h1>
<h1>VPN IP - {vpn.ip}</h1>
<h1>ORIGINAL IP - {external}</h1>
<h1>VPN LOCATION - {vpn.company.name} {vpn.city}</h1>
<h1>REGION - {vpn.region}</h1>
<h1>TIMEZONE - {vpn.timezone}</h1>
{vpn.privacy.tor ? <h1>TOR USED</h1> : false}
</div>
: <div>
<h1>VPN - VPN DETECTED</h1>
<h1>VPN IP - {vpn.ip}</h1>
<h1>ORIGINAL IP - {external}</h1>
<h1>VPN LOCATION - {vpn.company.name} {vpn.city}</h1>
<h1>REGION - {vpn.region}</h1>
<h1>TIMEZONE - {vpn.timezone}</h1>
{vpn.privacy.tor ? <h1>TOR USED</h1> : false}
</div>
}
</div>}
</div>
);
}
export default App;