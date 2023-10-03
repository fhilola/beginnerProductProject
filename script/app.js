const productsWrapper = document.querySelector(".products-wrapper")

fetch("https://api.escuelajs.co/api/v1/products")
.then(response => response.json())
.then(data => {
    // console.log(data);
    data.forEach(product => {
        const productFragment = document.createDocumentFragment()
        const div = document.createElement("div")
        div.className = "product-div"
        div.innerHTML = `
        <img src="${product.images}"/>
        <h3 title="${product.title}"> ${product.title.split("").length > 20 ? product.title.slice(0, 15) + "..." : product.title}</h3>
        <div class="action-wrapper">
        <strong> &dollar;${product.price}</strong>
        <button class="add-btn">+</button>
        <i class="bi bi-heart-fill"></i>
        </div>
        <a class="about-book" href="../pages/product.html?productId=${product.id}">About Product</a>
        <button>Delete</button>
        `
        productFragment.appendChild(div)
        productsWrapper.appendChild(productFragment)
    })
})