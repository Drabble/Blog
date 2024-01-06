Krud is a feature-rich sporting clothes shopping website developed using a classic stack comprising MySQL for the database, PHP for server-side logic, and HTML for the frontend structure. This project seamlessly integrates these technologies to create an interactive and efficient e-commerce platform for athletic apparel.

**Database Design with MySQL:**

The backbone of Krud's data management is MySQL, a relational database system. The database stores essential information such as product details, user accounts, order history, and inventory status. The database schema is carefully designed to ensure efficient queries and data retrieval.

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

PHP serves as the server-side scripting language, handling dynamic content generation and interaction with the MySQL database. PHP scripts process user requests, manage sessions, and execute business logic, ensuring a seamless flow of data between the frontend and the database.

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

HTML is used to create the structure of Krud's frontend, defining the layout and presenting content to users. HTML is combined with PHP to dynamically generate pages based on user interactions and database queries.

```html
<div class="product-details">
    <h2><?php echo $productData['name']; ?></h2>
    <p><?php echo $productData['description']; ?></p>
    <p>Price: $<?php echo $productData['price']; ?></p>
    <p>In Stock: <?php echo $productData['stock_quantity']; ?></p>
</div>
```

**Secure User Authentication:**

Krud incorporates secure user authentication mechanisms to protect user data. Passwords are hashed before storage in the database, and sessions are managed securely to verify the identity of users across different pages.

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
