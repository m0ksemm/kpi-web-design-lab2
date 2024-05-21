
class ProductController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      
      $('#add-product-form').submit(this.handleAddProduct.bind(this));
      $('#product-list').on('click', '.btn-delete', this.handleDeleteProduct.bind(this));
  
     
      this.loadProducts();
    }
  
    loadProducts() {
      const products = this.model.getAllProducts();
      this.view.renderProductList(products);
    }
  
    handleAddProduct(event) {
      event.preventDefault();
  
      const product = {
        name: $('#productName').val(),
        code: $('#productCode').val(),
        manufacturer: $('#productManufacturer').val(),
        quantity: $('#productQuantity').val(),
        totalPrice: $('#productTotalPrice').val()
      };
  
      if (this.model.findProductByCode(product.code)) {
        this.view.showMessage('Product with this code already exists.', false);
      } else {
        this.model.addProduct(product);
        this.view.showMessage('Product added successfully.', true);
        this.view.clearForm();
        this.loadProducts();
      }
    }
  
    handleDeleteProduct(event) {
        const productCode = $(event.target).data('code');
        window.location.href = `delete.html?code=${productCode}`;
      }
  }
  
  
  $(document).ready(function() {
    const model = new ProductModel();
    const view = new ProductView();
    new ProductController(model, view);
  });
