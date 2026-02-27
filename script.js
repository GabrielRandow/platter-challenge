const products = [
  { title: "Ribbon Ring", 
    price: "$99.99", 
    image: "https://images.unsplash.com/photo-1770721478216-3e5dbbe8dcc2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1611955117173-b248ebfa2838?...",
    stars: "4.5" },
  { title: "Westminster Frame",
    price: "$62", 
    image: "https://images.unsplash.com/photo-1771551962347-532f35d630ff?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1611955117173-b248ebfa2838?...",
    stars: "3.2" }, 
  { title: "Gift Card", 
    price: "$100", 
    image: "https://plus.unsplash.com/premium_photo-1772065874102-2cfc09013300?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1611955117173-b248ebfa2838?...",
    stars: "4" },
  { title: "Red Jacket", 
    price: "$79.99", 
    image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1611955117173-b248ebfa2838?...",
    stars: "4" },
  { title: "Blue T Shirt",
    price: "$19.99", 
    image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1611955117173-b248ebfa2838?...",
    stars: "5" },
  { title: "Pink Sweater", 
    price: "$50", 
    image: "https://images.unsplash.com/photo-1520591799316-6b30425429aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1611955117173-b248ebfa2838?...",
    stars: "4.3" },
  { title: "Jeans Dress", 
    price: "$80", 
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1611955117173-b248ebfa2838?...",
    stars: "4.7" },
  { title: "Hamburger", 
    price: "$5.99", 
    image: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1611955117173-b248ebfa2838?...",
    stars: "3.8" },
  { title: "Pizza", 
    price: "$14.99", 
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1611955117173-b248ebfa2838?...",
    stars: "2.5" },
  { title: "BMW", 
    price: "$75.000", 
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1611955117173-b248ebfa2838?...",
    stars: "5" },
]

const carouselContainer = document.getElementById("carouselContainer");
const template = document.getElementById("card-template");
const scrollIndicator = document.getElementById("scroll-indicator");

function generateStars(rating) {
  let starsHtml = '';
  const totalStars = 5;
  const numericRating = parseFloat(rating); // Aceita números como 4.5

  for (let i = 1; i <= totalStars; i++) {
    let fillPercentage = 0;

    if (i <= numericRating) {
      fillPercentage = 100;
    } else if (i - 1 < numericRating && i > numericRating) {
      fillPercentage = (numericRating % 1) * 100;
    } else {
      fillPercentage = 0;
    }

    const gradientId = `grad-${Math.random().toString(5)}`;

    starsHtml += `
      <svg class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${gradientId}">
            <stop offset="${fillPercentage}%" stop-color="black" />
            <stop offset="${fillPercentage}%" stop-color="#D1D5DB" /> </linearGradient>
        </defs>
        <path fill="url(#${gradientId})" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    `;
  }
  return starsHtml;
}

products.forEach(product => {
  const clone = template.content.cloneNode(true);

  const img = clone.querySelector("img");
  img.src = product.image;
  img.alt = product.title;

  clone.querySelector("p#product-title").textContent = product.title;
  clone.querySelector("p#product-price").textContent = product.price;

  const starContainer = clone.querySelector(".product-stars");
  if (starContainer) {
    starContainer.innerHTML = generateStars(product.stars);
  }

  const cardContainer = clone.querySelector('div');
  cardContainer.classList.add('product-card', 'flex-none');

  carouselContainer.appendChild(clone)
})

const carousel = document.getElementById("carouselContainer");
const indicator = document.getElementById("scroll-indicator");

carouselContainer.addEventListener("scroll", () => {
  window.requestAnimationFrame(() => {
    const scrollLeft = carouselContainer.scrollLeft;
    const maxScroll = carouselContainer.scrollWidth - carouselContainer.clientWidth;

    if (maxScroll > 0) {
      const scrollPercent = (scrollLeft / maxScroll) * 100;
      
      const travelDistance = 100 - 33.333; 
      const indicatorPosition = (scrollPercent / 100) * travelDistance;

      indicator.style.left = `${indicatorPosition}%`;
    }
  });
}, { passive: true });

const scrollBar = document.getElementById("carousel-scroll");

scrollBar.addEventListener("mousedown", (e) => {
  moveCarouselByBar(e);
  
  const onMouseMove = (event) => moveCarouselByBar(event);
  const onMouseUp = () => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };
  
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
});

function moveCarouselByBar(e) {
  const rect = scrollBar.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const clickPercent = Math.max(0, Math.min(1, x / rect.width));
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  
  carousel.scrollTo({
    left: clickPercent * maxScroll,
    behavior: "auto" 
  });
}
