import{a as B,S as E,i as d}from"./assets/vendor-D8_O3--j.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const F="50842900-bcdcb4b14e1b1067d3f853731",M="https://pixabay.com/api/";async function u(t,o){const s=await B.get(M,{params:{key:F,q:t,per_page:15,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}),a=s.data.hits,e=s.data.totalHits;return{images:a,totalHits:e}}const f=document.querySelector(".gallery"),g=document.querySelector(".loader"),p=document.querySelector(".load-more-btn"),P=new E(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function m(t){const o=t.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:i,comments:S,downloads:C})=>{const q=e.split(",").slice(0,3).join(", ");return`
  <li class="cat list">
    <a href="${a}">
      <img src="${s}" alt="${q}" />
    </a>
<div class="info">
  <div class="info-row titles">
    <p><strong>Likes</strong></p>
    <p><strong>Views</strong></p>
    <p><strong>Comments</strong></p>
    <p><strong>Downloads</strong></p>
  </div>
<div class="info-row values">
    <p>${r}</p>
    <p>${i}</p>
    <p>${S}</p>
    <p>${C}</p>
  </div>
</div>
  </li>
    `}).join("");f.insertAdjacentHTML("beforeend",o),P.refresh()}function $(){f.innerHTML=""}function h(){g.classList.remove("hidden")}function y(){g.classList.add("hidden")}function b(){p.classList.remove("hidden")}function L(){p.classList.add("hidden")}function T(){d.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:"./img/cross.png"})}function w(){d.show({position:"topRight",backgroundColor:"rgb(137, 207, 240, 0.8)",message:"We're sorry, but you've reached the end of search results.",messageColor:"black"})}function v(t){d.show({message:`Error: ${t.message}`,backgroundColor:"#EF4040",messageColor:"#FAFAFB"})}const A=document.querySelector(".form"),O=document.querySelector(".load-more-btn");A.addEventListener("submit",x);O.addEventListener("click",R);let n=1,l="",H=15,c=0;async function x(t){t.preventDefault(),n=1,$(),L(),h(),l=t.currentTarget.elements["search-text"].value;try{const{images:o,totalHits:s}=await u(l,n);o.length===0&&T(),m(o),c=Math.ceil(s/H),n<c?b():n===c&&w()}catch(o){v(o)}finally{y()}}async function R(){n++,L(),h();try{const{images:t}=await u(l,n);m(t);const s=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),n===c&&w(),n<c&&b()}catch(t){v(t)}finally{y()}}
//# sourceMappingURL=index.js.map
