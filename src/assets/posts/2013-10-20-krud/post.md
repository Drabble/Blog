Krud was a sportswear shopping website built with MySQL, PHP, and HTML. It stored products, accounts, orders, and inventory.

**Database Design with MySQL:**

MySQL stored the shop data. This example shows a product table.

```sql
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price DECIMAL(10, 2),
    stock_quantity INT
);
```

**Server-Side Logic with PHP:**

PHP handled requests, sessions, and database access. The historical example below is incomplete and interpolates input directly into SQL. It is not safe code to copy into a live application.

```php
<?php
    $productId = $_GET['productId'];
    $query = "SELECT * FROM products WHERE id = $productId";
    $result = mysqli_query($connection, $query);
    $productData = mysqli_fetch_assoc($result);
    echo json_encode($productData);
?>
```

**HTML for Frontend Structure:**

PHP generated the HTML for product pages.

```html
<div class="product-details">
    <h2><?php echo $productData['name']; ?></h2>
    <p><?php echo $productData['description']; ?></p>
    <p>Price: $<?php echo $productData['price']; ?></p>
    <p>In Stock: <?php echo $productData['stock_quantity']; ?></p>
</div>
```

**Secure User Authentication:**

The shop used password hashing and login sessions. The example below is preserved from the original post, but it does not check a stored account password and is not a correct authentication implementation.

```php
// Example PHP script for user login authentication
<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Check against the stored hashed password
    if (password_verify($password, $hashedPassword)) {
        // Successful login
        $_SESSION['user_id'] = $userId;
        header('Location: dashboard.php');
    } else {
        // Failed login
        echo 'Invalid username or password';
    }
?>
```

![Screenshot](assets/posts/2013-10-20-krud/1.webp "Screenshot")
![Screenshot](assets/posts/2013-10-20-krud/2.webp "Screenshot")
![Screenshot](assets/posts/2013-10-20-krud/3.webp "Screenshot")
![Screenshot](assets/posts/2013-10-20-krud/4.webp "Screenshot")
*Screenshot of the website*
