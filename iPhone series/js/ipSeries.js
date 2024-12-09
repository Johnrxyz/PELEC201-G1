const storagePrices = {
    "iphone13": {
        "128GB": "₱26,000",
        "256GB": "₱28,500"
    },
    "iphone13pro": {
        "128GB": "₱33,000",
        "256GB": "₱35,500"
    },
    "iphone13promax": {
        "128GB": "₱38,000",
        "256GB": "₱40,500"
    },
    "iphone14": {
        "128GB": "₱32,000",
        "256GB": "₱36,500"
    },
    "iphone14plus": {
        "128GB": "₱31,000",
        "256GB": "OUT OF STOCK"
    },
    "iphone14pro": {
        "128GB": "₱40,000",
        "256GB": "₱42,000"
    },
    "iphone14promax": {
        "128GB": "₱44,500",
        "256GB": "₱46,500"
    }
};

const storageSelects = document.querySelectorAll(".storage");

storageSelects.forEach(select => {
    select.addEventListener("change", (event) => {
        const selectedStorage = event.target.value; 
        const productId = event.target.getAttribute("dataProductId"); 
        
        const priceElement = document.querySelector(`[dataPriceId="${productId}Price"]`);
        priceElement.textContent = storagePrices[productId][selectedStorage];
    });
});
