(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,e){var i=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],n=document.querySelector("body"),o=document.querySelector('button[data-action="start"]'),a=document.querySelector('button[data-action="stop"]'),r={intervalId:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){s()}),1e3),a.removeAttribute("disabled"),o.setAttribute("disabled",!0))},stop:function(){this.isActive=!1,clearInterval(this.intervalId),this.intervalId=null,o.removeAttribute("disabled"),a.setAttribute("disabled",!0)}},s=function(){var t,e;n.style.backgroundColor=i[(t=0,e=i.length-1,Math.floor(Math.random()*(e-t+1)+t))]};o.addEventListener("click",r.start.bind(r)),a.addEventListener("click",r.stop.bind(r))}},[["QfWi",1]]]);
//# sourceMappingURL=main.8b3b6a7c719bbd26b040.js.map