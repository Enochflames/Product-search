function search() {
    let input = document.getElementById('search-item').value.toLowerCase();
    let productList = document.getElementById('product-list');
    let products = productList.getElementsByClassName('product');

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let productName = product.getElementsByClassName('p-details')[0].getElementsByTagName('h2')[0].innerText.toLowerCase();
        
        if (productName.includes(input)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    }
}
