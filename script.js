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
function displayProducts(productsToDisplay) {
    
    productList.innerHTML = `
        <div class="product-header">
            <span>Ítem</span>
            <span>Categoría</span>
            <span>Producto</span>
            <span>Precio</span>
            <span>Fecha de Vencimiento</span>
            <span>Cantidad</span>
            <span>Acciones</span>
        </div>
    `;
    
    productsToDisplay.forEach((product, index) => {
        productList.innerHTML += `
            <div class="product-item">
                <span>${index + 1}</span>
                <span>${product.category}</span>
                <span>${product.product}</span>
                <span>${product.price}</span>
                <span>${product.expiryDate}</span>
                <span>${product.quantity}</span>
                <span><button class="sell-button" data-index="${index}">Vender</button></span>
            </div>
        `;
    });

    
    const sellButtons = document.querySelectorAll('.sell-button');
    sellButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            
            products.splice(index, 1);
            
            displayProducts(products);
            
            productNumber.textContent = products.length;
            productCount.style.display = products.length > 0 ? 'block' : 'none';
            alert('Gracias por su Compra');
        });
       });
    }
function clearForm() {
    
    document.getElementById('category').value = '';
    document.getElementById('product').value = '';
    document.getElementById('price').value = '';
    document.getElementById('expiry-date').value = '';
    document.getElementById('quantity').value = '';
    }
});