var products

fetch("/data/products.json")
.then(response => {
    return response.json();
 })
 .then(data => { 
    //console.log(data)
    //dataRow1 = JSON.stringify(data[0].products)
    products = data.products
    console.log(products)
 })

 
  