(this["webpackJsonpaudio-player"]=this["webpackJsonpaudio-player"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={footer:"Footer_footer__1EVmC",like:"Footer_like__3qrTi",loop:"Footer_loop__2p58c"}},function(e,a,t){e.exports={volume:"Volume_volume__FQmni",volumeInner:"Volume_volumeInner__1hMuk",length:"Volume_length__26RMf",close:"Volume_close__2BxU-"}},,,,function(e,a,t){e.exports={sideMenu:"SideMenu_sideMenu__37saf",close:"SideMenu_close__3y9ME"}},,function(e,a,t){e.exports={player:"Player_player__2tTqr"}},,function(e,a,t){e.exports=t.p+"static/media/fromyesterday.4c568860.mp3"},function(e,a,t){e.exports={info:"SongInfo_info__2ByNK"}},,function(e,a,t){e.exports=t(32)},,,,,function(e,a,t){},function(e,a,t){},,,,,,,function(e,a,t){e.exports=t.p+"static/media/fromYesterday.211dfe43.jpg"},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(5),c=t.n(o),r=(t(23),t(2)),i=(t(24),t(13)),m=t.n(i),s=function(e){return l.a.createElement("div",{className:m.a.player},l.a.createElement("div",{className:"start-time"},l.a.createElement("span",{id:"time"},e.timeStart)),l.a.createElement("i",{className:"fas fa-backward"}),e.togglePlayPause?l.a.createElement("i",{className:"fas fa-pause",onClick:e.pause}):l.a.createElement("i",{className:"fas fa-play",onClick:e.play}),l.a.createElement("i",{className:"fas fa-stop",onClick:e.stop}),l.a.createElement("i",{className:"fas fa-forward"}),l.a.createElement("div",{className:"full-time"},l.a.createElement("span",null,e.time)))},u=t(1),f=t(3),p=t(15),d=new Audio(t.n(p).a),E="Audio-Player/Song/PLAY_SONG",g="Audio-Player/Song/PAUSE_SONG",v="Audio-Player/Song/STOP_SONG",S="Audio-Player/Song/LIKE_SONG",N="Audio-Player/Song/VOLUME_SONG",y="Audio-Player/Song/LOOP_SONG",h={time:d.currentTime,fullTime:d.duration,image:t(31),name:{nameSong:"From Yesterday",nameSinger:"30 Seconds to Mars"},isLike:!1,volume:d.volume,isLoop:d.loop=!1},b=null,k=Object(u.b)((function(e){return{time:e.time,fullTime:e.fullTime}}),{PlaySong:function(){return function(e){b=setInterval((function(){e({type:E})}),1e3),d.play()}},PauseSong:function(){return function(e){clearInterval(b),e({type:g}),d.pause()}},StopSong:function(){return function(e){clearInterval(b),e({type:v}),d.pause()}}})((function(e){var a=Object(n.useState)(!1),t=Object(r.a)(a,2),o=t[0],c=t[1],i=function(e){var a=Math.floor(e/60),t=Math.round(e%60);return a=a<10?"0".concat(a):"".concat(a),t=t<10?"0".concat(t):"".concat(t),"".concat(a,":").concat(t)},m=i(e.time),u=e.fullTime?i(e.fullTime):"00:00";return l.a.createElement(s,{timeStart:m,time:u,times:i,togglePlayPause:o,stop:function(){e.StopSong(),c(!1)},pause:function(){e.PauseSong(),c(!1)},play:function(){e.PlaySong(),c(!0)}})})),_=t(6),O=t.n(_),L=function(e){return l.a.createElement("div",{className:O.a.footer},l.a.createElement("div",{className:O.a.like},l.a.createElement("input",{type:"checkbox",id:"like",onChange:e.like,checked:e.isLike}),l.a.createElement("label",{htmlFor:"like"},l.a.createElement("i",{className:"far fa-heart"}),l.a.createElement("i",{className:"fas fa-heart"}))),l.a.createElement("div",{className:O.a.loop},l.a.createElement("input",{type:"checkbox",id:"loop",onChange:e.loop,checked:e.isLoop}),l.a.createElement("label",{htmlFor:"loop"},l.a.createElement("i",{className:"fas fa-sync-alt"}))),l.a.createElement("i",{className:"fas fa-volume-up",onClick:e.enable}),l.a.createElement("i",{className:"fas fa-random"}))},P=Object(u.b)((function(e){return{isLike:e.isLike,isLoop:e.isLoop}}),{Like:function(e){return{type:S,like:e}},LoopSong:function(e){return{type:y,loop:e}}})((function(e){return l.a.createElement(L,{like:function(){e.Like(!e.isLike)},isLike:e.isLike,loop:function(){e.LoopSong(!e.isLoop)},isLoop:e.isLoop,enable:e.enable})})),j=t(7),w=t.n(j),x=function(e){return l.a.createElement("div",{className:w.a.volume},l.a.createElement("a",{href:"#",className:w.a.close,onClick:e.disable},l.a.createElement("i",{className:"fa fa-chevron-down"})),l.a.createElement("div",{className:w.a.volumeInner},l.a.createElement("i",{className:"fa fa-volume-down",onClick:e.mute}),l.a.createElement("input",{className:"volume-slider",type:"range",min:"0",max:"100",onChange:e.changeVolume,value:e.volume,step:"1"}),l.a.createElement("i",{className:"fa fa-volume-up",onClick:e.unmute}),l.a.createElement("span",{style:{width:"50px"}},e.volume)))},M=function(e){var a=Object(n.useState)(Math.round(100*e.volume)),t=Object(r.a)(a,2),o=t[0],c=t[1];return l.a.createElement(x,{volume:o,changeVolume:function(a){c(a.currentTarget.value),e.VolumeSong(a.currentTarget.value/100)},disable:e.disable,mute:function(){c(0),e.VolumeSong(0)},unmute:function(){c(100),e.VolumeSong(1)}})},T=t(16),V=t.n(T),C=function(e){return l.a.createElement("div",{className:V.a.info},l.a.createElement("h4",null,e.name.nameSong),l.a.createElement("h3",null,e.name.nameSinger))},I=t(11),A=t.n(I),F=function(e){return l.a.createElement("div",{className:A.a.sideMenu,style:{zIndex:e.index}},l.a.createElement("a",{href:"#",className:A.a.close,onClick:function(){e.SetIndex(-1)}},l.a.createElement("i",{className:"fa fa-angle-left"})),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"side-popular-music"},l.a.createElement("i",{className:"fa fa-list-ol fa-fw"})," Popular Music")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"side-your-playlist"},l.a.createElement("i",{className:"fa fa-music fa-fw"})," Your Playlists")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"side-your-profile"},l.a.createElement("i",{className:"fa fa-user fa-fw"})," Your Profile")),l.a.createElement("li",null,l.a.createElement("a",{href:"#",className:"side-settings"},l.a.createElement("i",{className:"fa fa-cog fa-fw"})," Settings"))))},G=Object(u.b)((function(e){return{image:e.image,name:e.name,volume:e.volume}}),{VolumeSong:function(e){return{type:N,volume:e}}})((function(e){var a=Object(n.useState)(!1),t=Object(r.a)(a,2),o=t[0],c=t[1],i=Object(n.useState)(-1),m=Object(r.a)(i,2),s=m[0],u=m[1];return l.a.createElement("main",{className:"App"},l.a.createElement("article",{className:"screen"},l.a.createElement("div",{className:"bar-menu",onClick:function(){u(3)}},l.a.createElement("i",{className:"fas fa-bars"})),l.a.createElement("div",{className:"songImage",style:{background:"url(".concat(e.image,") no-repeat center"),backgroundSize:"cover"}}),l.a.createElement("div",{className:"control-panel"},o?l.a.createElement(M,{state:o,disable:function(){c(!1)},volume:e.volume,VolumeSong:e.VolumeSong}):null,l.a.createElement(C,{name:e.name}),l.a.createElement(k,null),l.a.createElement(P,{enable:function(){c(!0)}})),l.a.createElement(F,{index:s,SetIndex:u})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=t(4),B=t(17),U=Object(Y.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object(f.a)({},e,{time:d.currentTime,fullTime:d.duration});case g:return Object(f.a)({},e,{time:d.currentTime});case v:return Object(f.a)({},e,{time:d.currentTime=0});case S:return Object(f.a)({},e,{isLike:a.like});case N:return Object(f.a)({},e,{volume:d.volume=a.volume});case y:return Object(f.a)({},e,{isLoop:d.loop=a.loop});default:return e}}),Object(Y.a)(B.a));c.a.render(l.a.createElement(u.a,{store:U},l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.c9aead7b.chunk.js.map