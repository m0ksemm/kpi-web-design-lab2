class ProductModel {
    constructor() {
      this.products = JSON.parse(localStorage.getItem('products')) || [];
    }
  
    getAllProducts() {
      return this.products;
    }
  
    addProduct(product) {
      this.products.push(product);
      this.saveProducts();
    }
  
    deleteProduct(productCode) {
      this.products = this.products.filter(product => product.code !== productCode);
      this.saveProducts();
    }
  
    saveProducts() {
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  
    findProductByCode(productCode) {
      return this.products.find(product => product.code === productCode);
    }
  }
  