const items = [
{
title: "Vanilla Cake",
category: "cakes",
desc: "Fresh vanilla layer cake.",
img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
isFav: false
},
{
title: "Sourdough Bread",
category: "breads",
desc: "Freshly baked bread.",
img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400",
isFav: false
},
{
title: "Chocolate Cookie",
category: "cookies",
desc: "Warm chocolate cookie.",
img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400",
isFav: false
},
{
title: "Butter Croissant",
category: "pastries",
desc: "Flaky golden croissant.",
img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",
isFav: false
}
];

let activeList = items;
let currentIndex = 0;

function renderGrid(data) {
  const grid = document.getElementById("gallery-grid");
  grid.innerHTML = "";

  data.forEach((item, index) => {
    grid.innerHTML += `
      <div class="gallery-card" onclick="openLightbox(${index})">
        <img src="${item.img}" alt="${item.title}">
        <h3>${item.title}</h3>
      </div>
    `;
  });
}
function filterCategory(cat) {
  activeList = (cat === 'all') ? items : items.filter(item => item.category === cat);
  renderGrid(activeList);
}

function showFavorites() {
  activeList = items.filter(item => item.isFav === true);
  renderGrid(activeList);
}
function openLightbox(index) {
  currentIndex = index;
  showLightboxItem();
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function navigateImage(dir) {
  currentIndex += dir;
  if (currentIndex < 0) currentIndex = activeList.length - 1;
  if (currentIndex >= activeList.length) currentIndex = 0;
  showLightboxItem();
}

function showLightboxItem() {
  const item = activeList[currentIndex];
  document.getElementById("lightbox-img").src = item.img;
  document.getElementById("lightbox-title").textContent = item.title;
  document.getElementById("lightbox-tag").textContent = item.category;
  document.getElementById("lightbox-description").textContent = item.desc;
}

document.getElementById("gallery-search").addEventListener("input", function(e) {
  const query = e.target.value.toLowerCase();
  renderGrid(items.filter(item => item.title.toLowerCase().includes(query)));
});

renderGrid(items);