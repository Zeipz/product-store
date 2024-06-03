document.addEventListener('DOMContentLoaded', () => {
    
    const addButton = document.getElementById('add-button');
    const productList = document.getElementById('product-list');
    const productCount = document.getElementById('product-count');
    const productNumber = document.getElementById('product-number');
    const searchProduct = document.getElementById('search-product');
    const filterCategory = document.getElementById('filter-category');

    let products = [];
    
    addButton.addEventListener('click', () => {
       
        const category = document.getElementById('category').value;
        const product = document.getElementById('product').value;
        const price = document.getElementById('price').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const quantity = document.getElementById('quantity').value;

      
        const newProduct = { category, product, price, expiryDate, quantity };
       
        products.push(newProduct);

        
        displayProducts(products);
        
       
        productNumber.textContent = products.length;
        productCount.style.display = 'block';

 
        clearForm();
        
    });
    
    searchProduct.addEventListener('input', () => {
        const searchValue = searchProduct.value.toLowerCase();
        
        const filteredProducts = products.filter(p => p.product.toLowerCase().includes(searchValue));
        
        displayProducts(filteredProducts);
    });

filterCategory.addEventListener('change', () => {
    const filterValue = filterCategory.value.toLowerCase();
    if (filterValue === 'all') {
      
        displayProducts(products);
    } else {
        
        const filteredProducts = products.filter(p => p.category.toLowerCase() === filterValue);
       
        displayProducts(filteredProducts);
       }
    });
