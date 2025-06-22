import{a as S,S as M,i as d}from"./assets/vendor-D8_O3--j.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const U="50842900-bcdcb4b14e1b1067d3f853731",x="https://pixabay.com/api/";async function u(t,o){const s=await S.get(x,{params:{key:U,q:t,per_page:15,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}),a=s.data.hits,e=s.data.totalHits;return{images:a,totalHits:e}}const g=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-more-btn"),C=new M(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function p(t){const o=t.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:i,comments:v,downloads:E})=>{const B=e.split(",").slice(0,3).join(", ");return`
  <li class="cat list">
    <a href="${a}">
      <img src="${s}" alt="${B}" />
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
    <p>${v}</p>
    <p>${E}</p>
  </div>
</div>
  </li>
    `}).join("");g.insertAdjacentHTML("beforeend",o),C.refresh()}function F(){g.innerHTML=""}function h(){f.classList.remove("hidden")}function A(){f.classList.add("hidden")}function y(){m.classList.remove("hidden")}function w(){m.classList.add("hidden")}const P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==";function R(){d.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:P})}function b(){d.show({position:"topRight",backgroundColor:"rgb(137, 207, 240, 0.8)",message:"We're sorry, but you've reached the end of search results.",messageColor:"black"})}function L(t){d.show({message:`Error: ${t.message}`,backgroundColor:"#EF4040",messageColor:"#FAFAFB"})}const q=document.querySelector(".form"),Y=document.querySelector(".load-more-btn");q.addEventListener("submit",J);Y.addEventListener("click",H);let n=1,l="",j=15,c=0;async function J(t){t.preventDefault(),n=1,F(),w(),h(),l=t.currentTarget.elements["search-text"].value;try{const{images:o,totalHits:s}=await u(l,n);o.length===0&&R(),p(o),c=Math.ceil(s/j),n<c?y():n===c&&b()}catch(o){L(o)}finally{A()}}async function H(){n++,w(),h();try{const{images:t}=await u(l,n);p(t);const s=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),n===c&&b(),n<c&&y()}catch(t){L(t)}finally{A()}}
//# sourceMappingURL=index.js.map
