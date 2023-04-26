const DUMMY_URL = `https://dummyjson.com/products`;
const pageDiv = document.getElementById('content-of-page');

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
            const productId = data.products[i].id;
            pageDiv.innerHTML += `
            <div class="card m-2" style="width: 18rem;">
  <img src="${productImage}" class="card-img-top" alt="..." style="aspect-ratio: 16/9; object-fit: cover">
  <div class="card-body">
    <h5 class="card-title">${productTitle}</h5>
    <p class="card-text">${productDescription}</p>
    <a href="moreinfo.html?id=${productId}" class="btn btn-primary">More information</a>
    <button onclick="addtoCart('${productTitle}')" id="add-to-cart" class="btn btn-primary mt-2">Add to Cart</button>
  </div>
</div>
            `
        }
    })
};

const addtoCart = (title) => {
 const dropdownItem = document.getElementById("dropdown");
 dropdownItem.innerHTML += `
 <li><a class="dropdown-item" href="#">${title}</a></li>
 `
}
