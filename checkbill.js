document.addEventListener("DOMContentLoaded", displayCheckbill);

function displayCheckbill() {
    const storeDataLocal = localStorage.getItem("storeData")
        ? JSON.parse(localStorage.getItem("storeData"))
        : [];

    const container = document.getElementById("container");

    const checkbillList = document.createElement("ul");
    checkbillList.classList.add("checkbill-list");

    storeDataLocal.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.classList.add("checkbill-item");

        const itemInfo = document.createElement("div");
        itemInfo.classList.add("item-info");

        const itemName = document.createElement("h3");
        itemName.textContent = item.title;
        itemInfo.appendChild(itemName);

        const itemCount = document.createElement("span");
        itemCount.textContent = `Quantity: ${item.count}`;
        itemInfo.appendChild(itemCount);

        listItem.appendChild(itemInfo);

        const itemPrice = document.createElement("span");
        itemPrice.classList.add("item-price");
        itemPrice.textContent = item.price;
        listItem.appendChild(itemPrice);

        checkbillList.appendChild(listItem);
    });

    container.appendChild(checkbillList);
}
