const storagePrices = {
    "iphone6": {
        "16GB": "₱3,200",
        "64GB": "₱4,000"
    },
    "iphone6plus": {
        "16GB": "₱5,000",
        "64GB": "₱5,300"
    },
    "iphone6S": {
        "16GB": "₱4,000",
        "64GB": "₱5,000"
    },
    "iphone6sp": {
        "64GB": "₱7,000",
        "128GB": "₱7,500"
    },
    "iphone8": {
        "64GB": "₱7,000",
        "128GB": "₱8,000"
    },
    "iphone8plus": {
        "64GB": "₱10,000",
        "256GB": "₱11,000"
    },
    "iphoneX": {
        "64GB": "₱10,500",
        "256GB": "₱12,000"
    },
    "iphoneXR": {
        "64GB": "₱12,500",
        "128GB": "₱13,000",
        "256GB": "₱15,000"
    },
    "iphoneXS": {
        "64GB": "₱12,500",
        "256GB": "₱13,500"
    },
    "iphoneXSMAX": {
        "64GB": "₱14,000",
        "256GB": "₱15,000",
        "512GB": "₱16,500"
    },
    "iphone11": {
        "64GB": "₱15,500",
        "128GB": "₱16,000","128GB": "₱16,000",
        "256GB": "₱18,000"
    },
    "iphone11pro": {
        "64GB": "₱19,500",
        "256GB": "₱21,500"
    },
    "iphone11promax": {
        "64GB": "₱23,000",
        "256GB": "₱24,000",
        "512GB": "₱26,000"
    },
    "iphone12": {
        "64GB": "₱19,600",
        "128GB": "₱20,500",
        "256GB": "₱21,500"
    },
    "iphone12pro": {
        "128GB": "₱24,500",
        "256GB": "₱26,000"
    },
    "iphone12promax": {
        "128GB": "₱28,500",
        "256GB": "₱30,500",
        "512GB": "₱33,000"
    },
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
