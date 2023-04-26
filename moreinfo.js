const DUMMY_URL = `https://dummyjson.com/products`;
const pageDiv = document.getElementById('content-of-page-iphone');

fetchURLforProducts();

function fetchURLforProducts () {
    fetch (DUMMY_URL) 
    .then (r => r.json())
    .then (data => {
        console.log(data);
        console.log(data.products);
        for (let i = 0; i < data.products.length; i++) {
            const productImage = data.products[i].thumbnail;
            const productTitle = data.products[i].title;
            const productDescription = data.products[i].description;
            const morePictures = data.products[i].images;
            const productPrice = data.products[i].price;
            const productBrand = data.products[i].brand;
            const productCategory = data.products[i].category;
            const productDiscount = data.products[i].discountPercentage;
            const productRating = data.products[i].rating;
            const productStock = data.products[i].stock;
            pageDiv.innerHTML += `
            <div class="card m-2" style="width: 35.5rem;">
  <div class="card-header d-flex justify-content-between">
    <span>${productTitle}</span>
    <span>${productBrand} ${productCategory}</span> 
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><img src="${productImage}" class="card-img-top" alt="Product Thumbnail" style="aspect-ratio: 16/9; object-fit: cover"></li>
    <li class="list-group-item">$${productPrice} <p>Discount: ${productDiscount}%</p></li>
    <li class="list-group-item">${productDescription}</li>
    <li class="list-group-item"></li>
    <li class="list-group-item">Rating: ${productRating}</li>
    <li class="list-group-item">In Stock: ${productStock}</li>
    <li class="list-group-item"><img src="${morePictures}" class="card-img-top" alt="Product Pictures" style="aspect-ratio: 16/9; object-fit: cover"></li>
  </ul>
</div>
            `
        }
    })
};
