// Define your api here
var productListApiUrl = 'https://smartmart-management-system-production.up.railway.app/getProducts';
var uomListApiUrl = 'https://smartmart-management-system-production.up.railway.app/getUOM';
var productSaveApiUrl = 'https://smartmart-management-system-production.up.railway.app/insertProduct';
var productDeleteApiUrl = 'https://smartmart-management-system-production.up.railway.app/deleteProduct';
var orderListApiUrl = 'https://smartmart-management-system-production.up.railway.app/getAllOrders';
var orderSaveApiUrl = 'https://smartmart-management-system-production.up.railway.app/insertOrder';

// For product drop in order
var productsApiUrl = 'https://fakestoreapi.com/products';

function callApi(method, url, data) {
    $.ajax({
        method: method,
        url: url,
        data: data
    }).done(function(msg) {
        window.location.reload();
    });
}

function calculateValue() {
    var total = 0;
    $(".product-item").each(function(index) {
        var qty = parseFloat($(this).find('.product-qty').val());
        var price = parseFloat($(this).find('#product_price').val());
        price = price * qty;
        $(this).find('#item_total').val(price.toFixed(2));
        total += price;
    });
    $("#product_grand_total").val(total.toFixed(2));
}

function orderParser(order) {
    return {
        id: order.order_id,
        date: order.date,
        orderNo: order.order_id,
        customerName: order.customer_name,
        cost: parseFloat(order.total)
    }
}

function productParser(product) {
    return {
        id: product.id,
        name: product.employee_name,
        unit: product.employee_name,
        price: product.employee_name
    }
}

function productDropParser(product) {
    return {
        id: product.id,
        name: product.title
    }
}