document.addEventListener('DOMContentLoaded', () => {
    
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    const cartIcon = document.querySelector('.nav-cart');
    const panelOps = document.querySelectorAll('.panel-ops p');
    const backToTopButton = document.querySelector('.foot-panel1');
    const heroMessageLink = document.querySelector('.hero-mass a');

    //  perform search action
    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query !== '') {
            console.log(`Searching for: ${query}`);
            // direct to search results page or API call to fetch results
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        } else {
            alert('Please enter a search term');
        }
    };

    // Event Listener for Search Icon Click
    searchIcon.addEventListener('click', performSearch);

    // Event Listener for Enter Key in Search Input
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    // Event Listener for Cart Icon Click
    cartIcon.addEventListener('click', () => {
        console.log('Cart icon clicked');
        // Redirect to cart page
        window.location.href = 'cart.html';
    });

    // Event Listener for Panel Options Clicks
    panelOps.forEach(op => {
        op.addEventListener('click', () => {
            console.log(`You clicked on: ${op.textContent}`);
            // Redirect or display relevant content
            window.location.href = `category.html?category=${encodeURIComponent(op.textContent.trim())}`;
        });
    });

    // Scroll to Top Functionality
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Hero Section Message Link
    heroMessageLink.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Navigating to Amazon India');
        // Redirect to Amazon India or perform any desired action
        window.location.href = 'https://www.amazon.in';
    });
    
    // Lazy Loading for Images 
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('.box-img[style]');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const backgroundImage = img.style.backgroundImage;
                    img.style.backgroundImage = backgroundImage;
                    observer.unobserve(img);
                }
            });
        }, options);

        images.forEach(img => {
            observer.observe(img);
        });
    };

    lazyLoadImages();
});
