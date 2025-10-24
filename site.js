// Mobile drawer
const burger = () => {
const d = document.querySelector('.drawer');
if(!d) return; d.classList.toggle('open');
};


// Lightbox
function toggleLightbox(show, src){
const lb = document.getElementById('lightbox');
const img = document.getElementById('lightboxImg');
if(!lb || !img) return;
if(show){ lb.classList.add('open'); img.src = src; }
else { lb.classList.remove('open'); img.removeAttribute('src'); }
}


// Render a gallery from data-* attributes (optional enhancement)
function enhanceGallery(){
const grid = document.getElementById('galleryGrid');
if(!grid) return;
const data = JSON.parse(grid.getAttribute('data-photos') || '[]');
grid.innerHTML = '';
data.forEach(({src,cap}) => {
const a = document.createElement('a');
a.href = src; a.className = 'shot';
a.innerHTML = `<img loading="lazy" src="${src}" alt="${cap}"><span class='cap'>${cap||''}</span>`;
a.addEventListener('click', e => { e.preventDefault(); toggleLightbox(true, src); });
grid.appendChild(a);
});
}


document.addEventListener('DOMContentLoaded', enhanceGallery);

