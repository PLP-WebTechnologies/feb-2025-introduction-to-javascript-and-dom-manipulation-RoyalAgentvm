// DOM Elements
const textBtn = document.getElementById('textBtn');
const colorBtn = document.getElementById('colorBtn');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const contentBox = document.getElementById('contentBox');
const changeText = document.getElementById('changeText');
const itemList = document.getElementById('itemList');

let clickCount = 0;

// Change Text Content
textBtn.addEventListener('click', () => {
    clickCount++;
    changeText.textContent = `Text changed ${clickCount} time${clickCount !== 1 ? 's' : ''}`;
});

// Toggle Background Color
colorBtn.addEventListener('click', () => {
    contentBox.classList.toggle('highlight');
    changeText.style.color = contentBox.classList.contains('highlight') 
        ? '#ffffff' 
        : '#000000';
});

// Add New Items
addBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    const itemNumber = itemList.children.length + 1;
    newItem.textContent = `Item ${itemNumber}`;
    itemList.appendChild(newItem);
});

// Remove Last Item
removeBtn.addEventListener('click', () => {
    if (itemList.children.length > 0) {
        itemList.lastElementChild.remove();
    }
});

// Add initial item
itemList.appendChild(document.createElement('li')).textContent = 'Item 1';