# JS-BASED-IP-TRACKING
This project offers a powerful tracking mechanism based on JavaScript that can identify the use of Virtual Private Networks (VPNs) in online applications in real time.
The initial IP address of a user is obtained upon entry and is cross-referenced with a third-party service to retrieve the appropriate network IP. Concurrently, the real IP is extracted straight from the user's operating system by the Web
Real-Time Communication (WebRTC) method, which makes use of the Interactive Connectivity Establishment (ICE) protocol.
To detect VPNs, the system uses a multifaceted technique. 
Regular server checks identify any differences that can point to possible VPN use by comparing the WebRTC-fetched IP with the externally obtained IP. In order to improve accuracy even more, the algorithm considers
geolocation and network delay, enhancing the thoroughness of the analysis.
The idea also incorporates a dynamic tracking system that changes with VPN technology. The system seeks to retain its efficacy in detecting VPN usage patterns and any evasion tactics by keeping up with developing VPN protocols and behaviors.
A logging and reporting system that documents VPN detections is a useful addition to the extensive detection method. 
It gives managers important information about user behavior and possible security risks. 
This information can be used to make well-informed decisions and take preventative action to keep the web application safe.
In summary, this JavaScript-based surveillance solution not only detects VPN use in real-time but also adapts to changing technological landscapes and gives managers useful information to reinforce online security protocols.
