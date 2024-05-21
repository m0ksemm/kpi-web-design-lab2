class DeleteProductController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      const productCode = this.getProductCodeFromURL();
      if (productCode) {
        const product = this.model.findProductByCode(productCode);
        this.view.renderProductDetails(product);
      }
  
      $('#delete-product-form').submit(this.handleDeleteProduct.bind(this));
    }
  
    getProductCodeFromURL() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('code');
    }
  
    handleDeleteProduct(event) {
      event.preventDefault();
      const productCode = $('#productCode').val();
      this.model.deleteProduct(productCode);
      window.location.href = 'index.html';
    }
  }
  
  $(document).ready(function() {
    const model = new ProductModel();
    const view = new DeleteProductView();
    new DeleteProductController(model, view);
  });
  