(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{118:function(e,a,t){e.exports=t(191)},123:function(e,a,t){},129:function(e,a,t){},189:function(e,a,t){},190:function(e,a,t){},191:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),s=t.n(c),l=(t(123),t(194)),o=t(56),i=t(34),u=t(192),m=t(42),d=t.n(m),p=t(59),y=t(63),v=t(90),E=t(65),h=t.n(E),f=function(){var e=Object(p.a)(d.a.mark((function e(a,t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"?lat=").concat(t.lat,"&lon=").concat(t.long,"&units=metric&mode=json"),{method:"GET",headers:{"Content-Type":"application/json","x-rapidapi-key":t.apiKey,"x-rapidapi-host":"community-open-weather-map.p.rapidapi.com"}});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),g=function(e,a){var t=e,n=h.a.utc(h.a.unix(t)),r=h()(n).add(a,"seconds");return h()(r).format("HH:mm:ss")},C=function(e){switch(e){case 200:return{type:"rainy",cloudCover:.1};case 201:return{type:"rainy",cloudCover:.5};case 202:return{type:"rainy",cloudCover:.9};case 210:return{type:"rainy",cloudCover:.2};case 211:return{type:"rainy",cloudCover:.6};case 212:return{type:"rainy",cloudCover:.9};case 230:return{type:"rainy",cloudCover:.3};case 231:return{type:"rainy",cloudCover:.7};case 232:return{type:"rainy",cloudCover:.9};case 300:case 301:return{type:"rainy",cloudCover:.5};case 302:return{type:"rainy",cloudCover:.9};case 310:return{type:"rainy",cloudCover:.2};case 311:return{type:"rainy",cloudCover:.4};case 312:return{type:"rainy",cloudCover:.9};case 313:return{type:"rainy",cloudCover:.7};case 314:return{type:"rainy",cloudCover:.9};case 321:return{type:"rainy",cloudCover:.5};case 500:return{type:"rainy",cloudCover:.1};case 501:return{type:"rainy",cloudCover:.2};case 502:case 503:case 504:return{type:"rainy",cloudCover:.9};case 511:return{type:"rainy",cloudCover:.8};case 520:return{type:"rainy",cloudCover:.2};case 521:return{type:"rainy",cloudCover:.4};case 522:return{type:"rainy",cloudCover:.9};case 531:return{type:"rainy",cloudCover:.7};case 600:return{type:"foggy",cloudCover:.2};case 601:return{type:"foggy",cloudCover:.5};case 602:return{type:"foggy",cloudCover:.8};case 611:return{type:"foggy",cloudCover:.3};case 612:case 613:return{type:"foggy",cloudCover:.2};case 615:return{type:"foggy",cloudCover:.1};case 616:case 620:return{type:"foggy",cloudCover:.2};case 621:return{type:"foggy",cloudCover:.4};case 622:return{type:"foggy",cloudCover:.7};case 701:case 711:case 721:case 731:case 741:case 751:case 761:case 762:case 771:case 781:return{type:"foggy",cloudCover:.8};case 800:return{type:"sunny",cloudCover:0};case 801:return{type:"sunny",cloudCover:.3};case 802:return{type:"cloudy",cloudCover:.4};case 803:return{type:"cloudy",cloudCover:.7};case 804:return{type:"cloudy",cloudCover:.9};default:return{type:"sunny",cloudCover:.5}}},w=t(40),x={data:[],searchArea:{lat:"48.13",long:"11.57",name:"Munich"},weather:{type:"sunny",cloudCover:.5},modal:!1,baseURL:"https://community-open-weather-map.p.rapidapi.com/weather",apiKey:"1f1c83d6fdmsh7e715c65498efa3p1f9c2cjsnd446e785291c"},b=Object(n.createContext)(x),N=b.Provider,j=function(e){var a=e.children,t=Object(n.useReducer)((function(e,a){switch(a.type){case"SET_DATA":return Object(w.a)(Object(w.a)({},e),{},{data:a.data});case"SET_SEARCH_AREA":return Object(w.a)(Object(w.a)({},e),{},{searchArea:a.data});case"SET_MODAL":return Object(w.a)(Object(w.a)({},e),{},{modal:a.data});case"SET_WEATHER":return Object(w.a)(Object(w.a)({},e),{},{weather:a.data});default:throw new Error}}),x),c=Object(y.a)(t,2),s=c[0],l=c[1];return r.a.createElement(N,{value:{state:s,dispatch:l}},a)},S=function(){var e=Object(n.useContext)(b),a=e.dispatch,t=Object(n.useRef)(),c=Object(n.useState)(null),s=Object(y.a)(c,2),l=s[0],o=s[1],i=e.state.searchArea,u=e.state.baseURL,m=e.state.apiKey;return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var n,r,c,s,l,p,E,h,g,w,x;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.loadModules)(["esri/WebScene","esri/views/SceneView","esri/widgets/Search"],{css:!0});case 2:return r=e.sent,c=Object(y.a)(r,3),s=c[0],l=c[1],p=c[2],E=new s({portalItem:{id:"3595a9c3957f4178b3c2215d23563702"}}),e.next=10,f(u,{lat:i.lat,long:i.long,apiKey:m});case 10:return h=e.sent,g=C(null===h||void 0===h||null===(n=h.weather[0])||void 0===n?void 0:n.id),w=new l({container:t.current,map:E,qualityProfile:"high",environment:{starsEnabled:!0,atmosphereEnabled:!0,lighting:{directShadowsEnabled:!0,date:"Mon Apr 06 2022 17:19:18 GMT+0200 (Central European Summer Time)"},atmosphere:{quality:"high"},weather:g}}),o(w),x=new p({view:w}),w.ui.add(x,{position:"top-right"}),x.on("select-result",(function(e){var t,n,r,c,s,l,o,i=null===e||void 0===e||null===(t=e.result)||void 0===t||null===(n=t.feature)||void 0===n||null===(r=n.geometry)||void 0===r?void 0:r.latitude,u=null===e||void 0===e||null===(c=e.result)||void 0===c||null===(s=c.feature)||void 0===s||null===(l=s.geometry)||void 0===l?void 0:l.longitude,m=null===e||void 0===e||null===(o=e.result)||void 0===o?void 0:o.name;a({type:"SET_SEARCH_AREA",data:{lat:i,long:u,name:m}}),w.goTo({center:[u,i],tilt:85,zoom:15})})),e.abrupt("return",(function(){w&&(w.container=null)}));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(u,{lat:i.lat,long:i.long,apiKey:m});case 3:t=e.sent,a({type:"SET_DATA",data:[t]}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e.state.searchArea]),Object(n.useEffect)((function(){if(e.state.data.length>0){var t=C(e.state.data[0].weather[0].id);a({type:"SET_WEATHER",data:t}),(null===l||void 0===l?void 0:l.environment)&&(l.environment.weather=t)}}),[e.state.data]),r.a.createElement("div",{style:{height:"100%",width:"100%"},ref:t})},O=t(193),A=t(45),T=t(66),R=(t(129),O.a.Title),k=l.a.Content,_=function(){var e=Object(n.useContext)(b);return r.a.createElement(k,null,r.a.createElement(u.a,{className:"cardStyle",style:{border:"0"}},r.a.createElement("article",{className:"box weather"},r.a.createElement(o.a,null,r.a.createElement(i.a,{xs:{span:12},sm:{span:12},md:{span:12},lg:{span:24},xl:{span:24}},r.a.createElement(R,{className:"textColor",level:3},(new Date).toLocaleString("en-us",{weekday:"long"})),r.a.createElement("span",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}},r.a.createElement(A.a,{className:"textColor icons",icon:T.a,size:"2x",style:{marginRight:"0.5rem"}}),r.a.createElement(R,{className:"textColor",level:5},(new Date).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}))),r.a.createElement("span",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}},r.a.createElement(A.a,{className:"textColor icons",icon:T.b,size:"2x",style:{marginRight:"0.5rem"}}),r.a.createElement("h1",{className:"textColor"},e.state.searchArea.name)),r.a.createElement("div",{className:"icon bubble black"},r.a.createElement("div",{className:"spin"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.state.data[0].weather[0].icon,"@2x.png")}))),r.a.createElement(R,{className:"textColor",level:1},e.state.data[0].weather[0].main),r.a.createElement(R,{className:"textColor",level:3},e.state.data[0].weather[0].description),r.a.createElement("span",{className:"temp textColor"},e.state.data[0].main.temp,"\xb0")),r.a.createElement(i.a,{xs:{span:12},sm:{span:12},md:{span:12},lg:{span:24},xl:{span:24}},r.a.createElement("span",{className:"high-low textColor "},e.state.data[0].main.temp_min,"\xb0/"," ",e.state.data[0].main.temp_max,"\xb0"),r.a.createElement("div",{className:"textColor descriptionText"},"Feels like ",e.state.data[0].main.feels_like,"\xb0"),r.a.createElement("div",{className:"descriptionText"},r.a.createElement(A.a,{className:"textColor icons",icon:T.d,size:"2x",style:{marginRight:"0.5rem"}}),r.a.createElement("span",{className:"textColor sunriseSunset"},g(e.state.data[0].sys.sunrise,e.state.data[0].timezone))),r.a.createElement("div",null,r.a.createElement(A.a,{className:"textColor icons",icon:T.c,size:"2x",style:{marginRight:"0.5rem"}}),r.a.createElement("span",{className:"textColor sunriseSunset"},g(e.state.data[0].sys.sunset,e.state.data[0].timezone))))))))},D=t(112),M=(t(189),l.a.Header),z=l.a.Content;var H=function(){var e=Object(n.useContext)(b);return e.dispatch,r.a.createElement(l.a,null,r.a.createElement(M,{className:"headerStyle"},r.a.createElement("span",{className:"iconSpan"},r.a.createElement("div",{className:"weatherIcon"},r.a.createElement("div",{className:"sunny"},r.a.createElement("div",{className:"inner"})))),r.a.createElement("span",{className:"title"},"3D Weather App"),r.a.createElement("span",{className:"iconSpan"},r.a.createElement("div",{className:"weatherIcon"},r.a.createElement("div",{className:"tstorms"},r.a.createElement("div",{className:"inner"})))),r.a.createElement("span",{className:"headerRightSide"},r.a.createElement("span",{className:"iconSpan"},r.a.createElement("div",{className:"weatherIcon"},r.a.createElement("div",{className:"cloudy"},r.a.createElement("div",{className:"inner"})))),r.a.createElement("span",null,r.a.createElement("a",{href:"https://twitter.com/ialixandroae",target:"_blank",className:"twitterTag"},r.a.createElement(A.a,{icon:D.a,size:"1x"}),"ialixandroae"),r.a.createElement("span",{className:"iconSpanRight"},r.a.createElement("div",{className:"weatherIcon"},r.a.createElement("div",{className:"snow"},r.a.createElement("div",{className:"inner"}))))))),r.a.createElement(l.a,null,r.a.createElement(z,null,r.a.createElement(o.a,{gutter:[0,0]},r.a.createElement(i.a,{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:20},xl:{span:20},className:"leftCol"},r.a.createElement(u.a,{title:"Munich 3D Mesh CityMapper2",bordered:!1,className:"sourceAttribution"},r.a.createElement("p",null,"Source attribution: Captured with Leica CityMapper-2 \u2013 processed with SURE by nFrames/Esri; Copyright: 2021 Hexagon / Esri.")),r.a.createElement(S,null)),r.a.createElement(i.a,{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:4},xl:{span:4},className:"rightCol"},r.a.createElement(o.a,{className:"rightCol"},0===e.state.data.length?r.a.createElement("div",null):r.a.createElement(_,null)))))))};t(190);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null,r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.ca700108.chunk.js.map