function sortProducts() {
    const container = document.getElementById('product-container');
    const products = Array.from(container.getElementsByClassName('product'));
    const sortOrder = document.getElementById('sort').value;

    products.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute('data-price'));
        const priceB = parseFloat(b.getAttribute('data-price'));
        return sortOrder === 'low-to-high' ? priceA - priceB : priceB - priceA;
    });

    products.forEach(product => container.appendChild(product));
}


{   //For Navbar Resposivity
    let isMobileView = false;

    function screenSizer() {
        let currentScreenSize = window.innerWidth;
        let navList = document.querySelector(".nav-list");
        let ul = document.querySelector(".ul-links");
        let logo = document.querySelector(".logo");
        let logoUl = document.querySelector(".logo-ul");
        let menuLogo = document.querySelector(".menu-logo");
        let navSearchIcon = document.querySelector(".nav-icon-search");
        let navSearchIconMobile = document.querySelector(".nav-icon-search-mobile");
    
        if (currentScreenSize <= 911 && !isMobileView) {
            logo.style.display = "none";
            ul.style.display = "none";  
            logoUl.style.display = "block";
            menuLogo.style.display = "block"; 
            navSearchIcon.style.display = "none";
            navSearchIconMobile.style.display = "block";
            isMobileView = true;
        } 
        else if (currentScreenSize >= 912 && isMobileView) {
            logo.style.display = "block";
            ul.style.display = "flex";  
            menuLogo.style.display = "none"; 
            logoUl.style.display = "none";
            navSearchIcon.style.display = "block";
            navSearchIconMobile.style.display = "none";
            isMobileView = false;
        }
    }
    
    window.addEventListener("load", screenSizer);
    window.addEventListener("resize", screenSizer);

}

{ //For mobile menu opening and closing action
    let mobileNav = document.querySelector(".mobile-nav");

    function openMenu(){
        mobileNav.style.display = "flex";
    }

    function closeMenu(){
        mobileNav.style.display = "none";
    }
    
}

function removeSale(){
    let sale = document.querySelector(".sale");
    sale.classList.add("hidden");
}

