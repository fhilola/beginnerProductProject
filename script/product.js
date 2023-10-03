const productImg = document.querySelector(".product-img > img")
const productTitle = document.querySelector(".product-title")
const productPrice = document.querySelector(".product-price")
const productDescription = document.querySelector(".product-description")

async function renderSingleProductData (){
    try{
        let productLocation = +new URLSearchParams(window.location.search).get("productId")
        console.log(productLocation);
        let response = await fetch(`https://api.escuelajs.co/api/v1/products/${productLocation}`) 
        let data = await response.json()
        console.log(data);
        productImg.src = `${data.images[0]}`
        productTitle.innerHTML = `${data.title}`
        productPrice.innerHTML = `Price: &dollar;${data.price}`
        productDescription.innerHTML = `${data.description}`
    }
    catch(err){
        console.log(err);
    }
}
renderSingleProductData()

