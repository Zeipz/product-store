document.addEventListener('DOMContentLoaded', () => {
    
    const addButton = document.getElementById('add-button');
    const productList = document.getElementById('product-list');
    const productCount = document.getElementById('product-count');
    const productNumber = document.getElementById('product-number');
    const searchProduct = document.getElementById('search-product');
    const filterCategory = document.getElementById('filter-category');

    
    let products = [];
