# Exercise 1: Shopping Cart System

## Objective
Build a functional shopping cart that allows users to add items, remove items, and see a running total. This exercise will teach you to work with arrays and loops to manage dynamic lists.

## What You'll Build
A shopping cart interface where users can:
- Add items with prices
- Remove specific items
- See all items in the cart
- Calculate the total cost
- Clear the entire cart

## Requirements

### 1. HTML Structure
Create a clean interface with:
- Input field for item name
- Input field for item price
- "Add to Cart" button
- Display area showing all cart items
- "Remove" button for each item
- Total price display prominently shown
- "Clear Cart" button

### 2. Array Management
- Use an array to store cart items
- Each item should be an object with `name` and `price`
- Example: `{name: 'Apple', price: 1.99}`

### 3. Core Functions

#### addToCart()
- Get item name and price from inputs
- Validate that both fields are filled
- Validate that price is a valid number
- Create item object
- Push to cart array
- Update display
- Clear input fields

#### removeItem(index)
- Remove item at specific index using `splice()`
- Update display
- Recalculate total

#### displayCart()
- Loop through cart array
- Display each item with name, price, and remove button
- Show "Cart is empty" message if array is empty
- Use `forEach` or traditional `for` loop

#### calculateTotal()
- Loop through all items
- Sum up all prices
- Return total
- Display with 2 decimal places

#### clearCart()
- Set cart array to empty `[]`
- Update display
- Reset total to $0.00

### 4. Display Features
- Show each item in a nice card/box
- Display item name and formatted price ($X.XX)
- Number items (1., 2., 3., etc.)
- Show total in a prominent box
- Show item count (X items in cart)

### 5. Input Validation
Check for:
- Empty item name → "Please enter an item name"
- Empty price → "Please enter a price"
- Non-numeric price → "Please enter a valid number"
- Negative price → "Price must be positive"

## Bonus Challenges

### Challenge 1: Item Quantity
- Add quantity input field
- Store quantity with each item
- Calculate: price × quantity
- Show: "Apple (×3) - $5.97"

### Challenge 2: Discount Code
- Add discount code input
- "SAVE10" = 10% off
- "SAVE20" = 20% off
- Apply discount to total
- Show original price and discounted price

### Challenge 3: Sort Items
- Add "Sort by Price" button
- Sort cart items from cheapest to most expensive
- Or sort alphabetically by name

### Challenge 4: Save to Local Storage
- Save cart when items are added/removed
- Load cart when page loads
- Cart persists even after refresh!

### Challenge 5: Item Search
- Add search box
- Filter displayed items as user types
- Show matching items only
- Still calculate total for all items

## Example Output
```
Shopping Cart (3 items)

1. Apple - $1.99 [Remove]
2. Banana - $0.79 [Remove]
3. Orange - $2.49 [Remove]

Total: $5.27

[Clear Cart]
```

## Tips

### Formatting Prices
```javascript
let price = 1.5;
let formatted = '$' + price.toFixed(2);  // "$1.50"
```

### Array Structure
```javascript
let cart = [
    { name: 'Apple', price: 1.99 },
    { name: 'Banana', price: 0.79 }
];
```

### Looping Through Cart
```javascript
for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    console.log(item.name, item.price);
}

// Or with forEach
cart.forEach((item, index) => {
    console.log(item.name, item.price);
});
```

### Calculating Total
```javascript
let total = 0;
for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
}
```

## Testing Checklist
- [ ] Can add items to cart
- [ ] Can remove items from cart
- [ ] Total updates correctly
- [ ] Cannot add empty items
- [ ] Cannot add negative prices
- [ ] Can clear entire cart
- [ ] Cart shows "empty" message when no items
- [ ] Prices display with $ and 2 decimals
- [ ] Remove button appears for each item
- [ ] Item count is accurate

## Common Mistakes to Avoid
1. **Forgetting to call displayCart()** after adding/removing items
2. **Not converting price to number** → Use `parseFloat()`
3. **Not formatting prices** → Use `.toFixed(2)`
4. **Removing wrong item** → Make sure index is correct
5. **Not resetting total** when cart is cleared

## Estimated Time
30-45 minutes for basic version
+15-30 minutes for each bonus challenge

## What You'll Learn
- Working with arrays of objects
- Adding and removing array elements
- Looping through arrays to calculate totals
- Dynamically creating HTML elements
- Input validation
- String formatting

Ready to code? Open your `student-workspace` folder and start building! 🛒
