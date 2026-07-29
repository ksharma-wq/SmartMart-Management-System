$(function () {

    // Fetch all orders
    $.get(orderListApiUrl, function (response) {

        if (response) {

            var table = "";
            var totalCost = 0;

            $.each(response, function (index, order) {

                totalCost += parseFloat(order.total);

                // Build product list
                var products = "";

                if (order.order_details && order.order_details.length > 0) {

                    $.each(order.order_details, function (i, item) {

                        products += item.product_name +
                            " (Qty: " + item.quantity + ")";

                        if (i < order.order_details.length - 1) {
                            products += "<br>";
                        }

                    });

                } else {
                    products = "No Products";
                }

                table +=
                    "<tr>" +

                    "<td>" +
                    order.date +
                    "<br><small>" +
                    order.time +
                    "</small></td>" +

                    "<td>" +
                    order.order_id +
                    "</td>" +

                    "<td>" +
                    order.customer_name +
                    "</td>" +

                    "<td>" +
                    products +
                    "</td>" +

                    "<td>" +
                    parseFloat(order.total).toFixed(2) +
                    " Rs</td>" +

                    "</tr>";

            });

            table +=
                "<tr>" +
                "<td colspan='4' style='text-align:right'><b>Total</b></td>" +
                "<td><b>" +
                totalCost.toFixed(2) +
                " Rs</b></td>" +
                "</tr>";

            $("table tbody").html(table);

        }

    });

});