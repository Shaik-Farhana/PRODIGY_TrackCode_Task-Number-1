document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Menu Items Data
    const menuItems = [
        {
            image: "images/simple chicken.jpg",
            title: "Classic Broasted Chicken",
            price: "$12.99"
        },
        {
            image: "images/spicy-chicken.jpg",
            title: "Special Broasted Chicken",
            price: "$14.99"
        },
        {
            image: "images/burger.jpg",
            title: "Chicken Burger Meal",
            price: "$12.99"
        },
        {
            image: "images/full-bucket.jpg",
            title: "Family Bucket",
            price: "$22.99"
        },
        {
            image: "images/chicken-meal.jpg",
            title: "Chicken Full Meal",
            price: "$32.99"
        },
        {
            image: "images/nuggets.jpg",
            title: "Chicken Nuggets",
            price: "$22.99"
        }
    ];

    // Function to create menu items
    function populateMenuGrid(containerSelector, items) {
        const grid = document.querySelector(containerSelector);
        if (!grid) return;

        grid.innerHTML = items.map(item => `
            <div class="menu-item">
                <div class="menu-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="menu-content">
                    <h3>${item.title}</h3>
                    <p class="price">${item.price}</p>
                    <button class="cta-btn add-to-cart">Add to Cart</button>
                </div>
            </div>
        `).join('');
    }

    // Populate menu and best sellers sections
    populateMenuGrid('.menu-grid', menuItems);
    populateMenuGrid('.sellers-grid', menuItems.slice(0, 4)); // Show first 4 as best sellers

    // Add to Cart Interaction (using event delegation)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const button = e.target;
            button.textContent = 'Added!';
            button.disabled = true;
            setTimeout(() => {
                button.textContent = 'Add to Cart';
                button.disabled = false;
            }, 2000);
        }
    });
});
