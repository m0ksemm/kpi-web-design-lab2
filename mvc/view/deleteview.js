class DeleteProductView {
    renderProductDetails(product) {
      if (product) {
        $('#productName').val(product.name);
        $('#productCode').val(product.code);
        $('#productManufacturer').val(product.manufacturer);
        $('#productQuantity').val(product.quantity);
        $('#productTotalPrice').val(product.totalPrice);
      } else {
        $('#delete-product-form').hide();
        $('#message').text('Product not found').addClass('alert alert-danger').show();
      }
    }
  }
  