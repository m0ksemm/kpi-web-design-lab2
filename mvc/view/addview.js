
class ProductView {
    constructor() {
      this.productList = $('#product-list');
      this.message = $('#message');
    }
  
    renderProductList(products) {
      this.productList.empty();
      products.forEach(product => this.addProductRow(product));
    }
  
    addProductRow(product) {
      const row = `<tr>
                    <td>${product.name}</td>
                    <td>${product.code}</td>
                    <td>${product.manufacturer}</td>
                    <td>${product.quantity}</td>
                    <td>${product.totalPrice}</td>
                    <td><button class="btn btn-danger btn-xs btn-delete" data-code="${product.code}">Delete</button></td>
                  </tr>`;
      this.productList.append(row);
    }
  
    showMessage(message, isSuccess) {
      this.message.removeClass('alert-success alert-danger')
        .addClass(isSuccess ? 'alert-success' : 'alert-danger')
        .text(message)
        .show();
    }
  
    clearForm() {
      $('#add-product-form')[0].reset();
    }
  }
  