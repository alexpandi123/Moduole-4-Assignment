const DUMMY_URL = `https://dummyjson.com/products/`;
const pageDiv = document.getElementById('content-of-page-iphone');
const params = new URLSearchParams(location.search);
const id = params.get("id");

fetchURLforProducts();

function fetchURLforProducts () {
    fetch (DUMMY_URL + id) 
    .then (r => r.json())
    .then (data => {
        console.log(data);
        console.log(data.products);
        const {thumbnail, title, description, images, price, brand, category, discountPercentage, rating, stock} = data;
        let string = "";
        for (let i = 0 ; i < data.images.length ; i++) {
          const imgproduct = data.images[i];
          let imageTag = `<img src="${imgproduct}" class="card-img-top" alt="Product Thumbnail" style="aspect-ratio: 16/9; object-fit: cover">`
          string += imageTag;
        }
            pageDiv.innerHTML += `
            <div class="card m-2" style="width: 35.5rem;">
  <div class="card-header d-flex justify-content-between">
    <span>${title}</span>
    <span>${brand} ${category}</span> 
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><img src="${thumbnail}" class="card-img-top" alt="Product Thumbnail" style="aspect-ratio: 16/9; object-fit: cover"></li>
    <li class="list-group-item">$${price} <p>Discount: ${discountPercentage}%</p></li>
    <li class="list-group-item">${description}</li>
    <li class="list-group-item">Rating: ${rating}</li>
    <li class="list-group-item">In Stock: ${stock}</li>
    <li class="list-group-item">${string}</li>
  </ul>
</div>
            `
        }
    )
};