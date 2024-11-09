

const loadComponent = (targetId, componentFilePath) => {
    fetch(componentFilePath).then(response => response.text()).then(html => {
        document.getElementById(targetId).innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // loadComponent("header", "header.html");
    loadComponent("nav", "/components/Navbar.html");
    loadComponent("carousel", "/components/carousel.html");
    loadComponent("catagories", "/components/catagories.html");
    loadComponent("onSale", "/components/onSaleNow.html");
    loadComponent("newArrival", "/components/NewArraival.html");
    loadComponent("trending", "/components/trendingProducts.html");
    loadComponent("contact", "/components/contactUs.html");
    loadComponent("about", "/components/about.html");
    loadComponent("trustAndPayment", "/components/trustAndPayment.html");
    loadComponent("footer", "/components/footer.html");
});
