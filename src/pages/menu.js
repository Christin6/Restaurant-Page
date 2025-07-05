const menuDiv = document.createElement("div");

menuDiv.innerHTML = `
    <section class="content-middle">
        <h1 class="title-text">Our Menu</h1>
        <section class="content-left">
            <h2>Phở - Noodle Soups</h2>
            <table>
                <tr><th>Dish</th><th>Description</th><th>Price</th></tr>
                <tr><td>Phở Tái</td><td>Rare sliced beef steak</td><td>$13.50</td></tr>
                <tr><td>Phở Chín</td><td>Well-done brisket</td><td>$13.00</td></tr>
                <tr><td>Phở Tái Nạm</td><td>Rare steak & flank</td><td>$14.00</td></tr>
                <tr><td>Phở Đặc Biệt</td><td>House special: steak, brisket, tendon, tripe, meatball</td><td>$15.50</td></tr>
                <tr><td>Phở Bò Viên</td><td>Beef meatballs</td><td>$13.00</td></tr>
                <tr><td>Phở Gà</td><td>Chicken pho</td><td>$12.50</td></tr>
                <tr><td>Phở Rau Củ (Vegetarian)</td><td>Tofu & vegetables with veggie broth</td><td>$12.00</td></tr>
            </table>
        </section>

        <section class="content-left">
            <h2>Cơm - Rice Plates</h2>
            <table>
                <tr><th>Dish</th><th>Description</th><th>Price</th></tr>
                <tr><td>Cơm Sườn Nướng</td><td>Grilled pork chop over rice</td><td>$14.00</td></tr>
                <tr><td>Cơm Gà Nướng</td><td>Grilled lemongrass chicken</td><td>$13.50</td></tr>
                <tr><td>Cơm Bò Lúc Lắc</td><td>Shaking beef with garlic rice</td><td>$15.00</td></tr>
                <tr><td>Cơm Chay</td><td>Stir-fried tofu and vegetables</td><td>$12.00</td></tr>
            </table>
        </section>

        <section class="content-left">
            <h2>Bánh Mì - Vietnamese Sandwiches</h2>
            <table>
                <tr><th>Dish</th><th>Description</th><th>Price</th></tr>
                <tr><td>Bánh Mì Thịt Nướng</td><td>Grilled pork banh mi</td><td>$9.00</td></tr>
                <tr><td>Bánh Mì Gà</td><td>Lemongrass chicken</td><td>$8.50</td></tr>
                <tr><td>Bánh Mì Đặc Biệt</td><td>Cold cuts, pâté, and pickled veggies</td><td>$9.50</td></tr>
                <tr><td>Bánh Mì Chay</td><td>Tofu and veggie banh mi</td><td>$8.00</td></tr>
            </table>
        </section>

        <section class="content-left">
            <h2>Appetizers</h2>
            <table>
                <tr><th>Dish</th><th>Description</th><th>Price</th></tr>
                <tr><td>Gỏi Cuốn</td><td>Fresh spring rolls (2 pcs) with shrimp & pork</td><td>$6.50</td></tr>
                <tr><td>Chả Giò</td><td>Fried egg rolls (4 pcs) with pork or veggie</td><td>$6.00</td></tr>
                <tr><td>Cánh Gà Chiên Nước Mắm</td><td>Fried chicken wings with fish sauce</td><td>$8.50</td></tr>
                <tr><td>Bánh Xèo</td><td>Vietnamese crispy pancake with shrimp & pork</td><td>$10.00</td></tr>
            </table>
        </section>

        <section class="content-left">
            <h2>Beverages</h2>
            <table>
                <tr><th>Drink</th><th>Price</th></tr>
                <tr><td>Vietnamese Iced Coffee (Cà Phê Sữa Đá)</td><td>$5.00</td></tr>
                <tr><td>Thai Iced Tea</td><td>$4.50</td></tr>
                <tr><td>Iced Jasmine Tea</td><td>$3.00</td></tr>
                <tr><td>Fresh Coconut</td><td>$5.50</td></tr>
                <tr><td>Soft Drinks / Bottled Water</td><td>$2.50</td></tr>
            </table>
        </section>
    </section>`;

export { menuDiv };
