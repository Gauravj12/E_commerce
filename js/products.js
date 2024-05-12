let products
let all_sec=document.querySelector('#all_sec')
let women_sec=document.querySelector('#women_sec')
let men_sec=document.querySelector('#men_sec')
let kids_sec=document.querySelector('#kids_sec')
let val

let getVal=(e)=>{

    val=e
    console.log(e)
}


fetch("/data/products.json")
.then(response => {
    return response.json();
 })
 .then(data => { 
    //console.log(data)
    //dataRow1 = JSON.stringify(data[0].products)
    products = data.products
    let allProducts=[]
    allProducts=[...products.kids, ...products.men, ...products.women]
    console.log(allProducts)

    allProducts.map((product, index) => {
    
        all_sec.innerHTML += ` <div class = "col-md-6 col-lg-4 col-xl-3 p-2 best">
        <div class = "collection-img position-relative">
            <img src = ${product.thumbnail} class = "rounded mx-auto d-block img-fluid">
            <span class = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
        </div>
        <div class = "text-center">
            <div class = "rating mt-3">
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
            </div>
            <p class = "text-capitalize my-1">${product.title}</p>
            <span class = "fw-bold">${product.price}</span>
        </div>
    </div>
    `
    
    });


    products.women.map((product, index) => {
    
        women_sec.innerHTML += ` <div class = "col-md-6 col-lg-4 col-xl-3 p-2 best">
        <div class = "collection-img position-relative">
            <img src = ${product.thumbnail} class = "rounded mx-auto d-block img-fluid">
            <span class = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
        </div>
        <div class = "text-center">
            <div class = "rating mt-3">
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
            </div>
            <p class = "text-capitalize my-1">${product.title}</p>
            <span class = "fw-bold">${product.price}</span>
        </div>
    </div>
    `
    
    });


    products.men.map((product, index) => {
    
        men_sec.innerHTML += ` <div class = "col-md-6 col-lg-4 col-xl-3 p-2 best">
        <div class = "collection-img position-relative">
            <img src = ${product.thumbnail} class = "rounded mx-auto d-block img-fluid">
            <span class = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
        </div>
        <div class = "text-center">
            <div class = "rating mt-3">
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
            </div>
            <p class = "text-capitalize my-1">${product.title}</p>
            <span class = "fw-bold">${product.price}</span>
        </div>
    </div>
    `
    
    });


    products.kids.map((product, index) => {
    
        kids_sec.innerHTML += ` <div class = "col-md-6 col-lg-4 col-xl-3 p-2 best">
        <div class = "collection-img position-relative">
            <img src = ${product.thumbnail} class = "rounded mx-auto d-block img-fluid">
            <span class = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
        </div>
        <div class = "text-center">
            <div class = "rating mt-3">
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
                <span class = "text-primary"><i class = "fas fa-star"></i></span>
            </div>
            <p class = "text-capitalize my-1">${product.title}</p>
            <span class = "fw-bold">${product.price}</span>
        </div>
    </div>
    `
    
    });


 })

 
  