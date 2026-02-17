import{a as d,S as f,i as n}from"./assets/vendor-DQiTczw4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="54688812-abefd5b120166b01d1b3bea24",p="https://pixabay.com/api/";function y(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(p,{params:o}).then(e=>e.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img 
              class="gallery-image" 
              src="${e.webformatURL}" 
              alt="${e.tags}" 
            />
          </a>
          <div class="info">
            <div class="info-item"><b>Likes</b><span>${e.likes}</span></div>
            <div class="info-item"><b>Views</b><span>${e.views}</span></div>
            <div class="info-item"><b>Comments</b><span>${e.comments}</span></div>
            <div class="info-item"><b>Downloads</b><span>${e.downloads}</span></div>
          </div>
        </li>`).join("");l.innerHTML=o,h.refresh()}function b(){l.innerHTML=""}function v(){u.classList.add("is-active")}function L(){u.classList.remove("is-active")}const c=document.querySelector(".form"),S=document.querySelector(".search-input");document.querySelector(".gallery");document.querySelector(".loader");c.addEventListener("submit",s=>{s.preventDefault();const o=S.value.trim();if(o===""){n.error({message:"Please enter a search query!",position:"topRight"});return}b(),v(),y(o).then(e=>{if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query.",position:"topRight"});return}g(e.hits),c.reset()}).catch(e=>{n.error({message:"Something went wrong!"})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
