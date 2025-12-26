# Exercise 3: Smart Calculator 🧮

Build an advanced calculator using functions to perform all kinds of calculations!

---

## 🎯 Your Mission

Create a calculator program with at least **15 functions** that can perform math operations, unit conversions, and solve real-world problems.

---

## 📋 Requirements

### Function Categories

Create functions in each of these categories:

#### 1. Basic Math Operations (4 functions minimum)
- `add(a, b)` - Addition
- `subtract(a, b)` - Subtraction
- `multiply(a, b)` - Multiplication
- `divide(a, b)` - Division (check for divide by zero!)

#### 2. Advanced Math (3 functions minimum)
- `calculatePercentage(value, total)` - What percent is value of total?
- `percentageOf(percent, number)` - What is X% of a number?
- `calculateAverage(num1, num2, num3)` - Average of numbers
- `calculateSquare(number)` - Number squared
- `calculatePower(base, exponent)` - Base to the power of exponent

#### 3. Unit Conversions (4 functions minimum)
- `milesToKm(miles)` - Convert miles to kilometers
- `kmToMiles(km)` - Convert kilometers to miles
- `celsiusToFahrenheit(celsius)` - Temperature conversion
- `fahrenheitToCelsius(fahrenheit)` - Temperature conversion
- `poundsToKg(pounds)` - Weight conversion
- `kgToPounds(kg)` - Weight conversion

#### 4. Real-World Calculations (4 functions minimum)
- `calculateTip(billAmount, tipPercent)` - Restaurant tip
- `calculateTax(price, taxRate)` - Sales tax
- `calculateDiscount(price, discountPercent)` - Discount amount
- `calculateFinalPrice(price, taxRate, discountPercent)` - Price after tax and discount
- `calculateInterest(principal, rate, years)` - Simple interest
- `calculateGradeAverage(test1, test2, test3, test4, test5)` - School grades

---

## 💡 Demonstration Sections

Your calculator should demonstrate all functions in organized sections:

### Section 1: Basic Operations
Test all basic math functions with different numbers.

### Section 2: Advanced Math
Show percentage calculations, averages, powers.

### Section 3: Unit Conversions
Convert various measurements.

### Section 4: Real-World Problems
Solve practical problems:
- **Restaurant Bill** - Calculate subtotal, tax, tip, and total
- **Shopping** - Calculate discount, tax, and final price
- **Savings Account** - Calculate interest earned over time
- **Grade Calculator** - Calculate test average and letter grade
- **Budget Tracker** - Calculate income, expenses, and remaining money

---

## 📝 Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Calculator</title>
</head>
<body>
    <h1>🧮 Smart Calculator</h1>
    <p>Open the console (F12) to see all calculations!</p>

    <script>
        console.log('====================================');
        console.log('🧮 SMART CALCULATOR');
        console.log('====================================');

        // =============================
        // BASIC MATH OPERATIONS
        // =============================

        function add(a, b) {
            return a + b;
        }

        function subtract(a, b) {
            return a - b;
        }

        // Add more basic functions...


        // =============================
        // ADVANCED MATH
        // =============================

        function calculatePercentage(value, total) {
            return (value / total) * 100;
        }

        // Add more advanced functions...


        // =============================
        // UNIT CONVERSIONS
        // =============================

        function milesToKm(miles) {
            return miles * 1.60934;
        }

        // Add more conversion functions...


        // =============================
        // REAL-WORLD CALCULATIONS
        // =============================

        function calculateTip(billAmount, tipPercent) {
            return billAmount * (tipPercent / 100);
        }

        // Add more real-world functions...


        // =============================
        // DEMONSTRATION
        // =============================

        console.log('\n=== SECTION 1: BASIC OPERATIONS ===');
        console.log('5 + 3 =', add(5, 3));
        console.log('10 - 4 =', subtract(10, 4));
        // Test all basic operations...


        console.log('\n=== SECTION 2: ADVANCED MATH ===');
        console.log('Average of 10, 20, 30:', calculateAverage(10, 20, 30));
        // Test all advanced functions...


        console.log('\n=== SECTION 3: UNIT CONVERSIONS ===');
        console.log('10 miles =', milesToKm(10).toFixed(2), 'km');
        // Test all conversion functions...


        console.log('\n=== SECTION 4: REAL-WORLD PROBLEMS ===');
        
        // Problem 1: Restaurant Bill
        console.log('\n💰 RESTAURANT BILL:');
        let billAmount = 50.00;
        let tipPercent = 20;
        let taxRate = 0.08;
        
        let tip = calculateTip(billAmount, tipPercent);
        let tax = calculateTax(billAmount, taxRate);
        let total = billAmount + tip + tax;
        
        console.log('Bill: $' + billAmount.toFixed(2));
        console.log('Tip (20%): $' + tip.toFixed(2));
        console.log('Tax (8%): $' + tax.toFixed(2));
        console.log('Total: $' + total.toFixed(2));

        // Add more real-world problems...


        console.log('\n====================================');
        console.log('✅ ALL CALCULATIONS COMPLETE!');
        console.log('====================================');
    </script>
</body>
</html>
```

---

## ✅ Checklist

- [ ] Created HTML file `smart-calculator.html`
- [ ] At least 4 basic math functions
- [ ] At least 3 advanced math functions
- [ ] At least 4 unit conversion functions
- [ ] At least 4 real-world calculation functions
- [ ] Total of at least 15 functions
- [ ] All functions tested in demonstration section
- [ ] At least 4 real-world problem examples
- [ ] Restaurant bill calculation complete
- [ ] Shopping calculation complete
- [ ] Grade calculation complete
- [ ] Budget or savings calculation complete
- [ ] Clear console output with labels
- [ ] Functions have descriptive names
- [ ] All functions work correctly

---

## 🌟 Bonus Challenges

1. **Helper Functions** - Create `roundToTwoDecimals(number)` to format money
2. **Currency Converter** - Convert USD to EUR, GBP, JPY, etc.
3. **Loan Calculator** - Calculate monthly payments
4. **Recipe Scaler** - Scale ingredients up or down
5. **Time Converter** - Hours to minutes, minutes to seconds
6. **Distance Calculator** - Calculate distance between two points
7. **BMI Calculator** - Calculate Body Mass Index
8. **Age Calculator** - Calculate age from birth year
9. **Compound Interest** - Calculate compound interest (more complex than simple)
10. **Letter Grade Function** - Convert numeric grade to letter grade

---

## 💭 Tips

- **Test incrementally** - Test each function as you create it
- **Use helper functions** - Use toFixed(2) for money, Math.round() for whole numbers
- **Handle edge cases** - What if someone divides by zero? Negative numbers?
- **Format output nicely** - Use labels, units, and proper spacing
- **Organize by category** - Keep related functions together
- **Add comments** - Explain what each function calculates
- **Use descriptive names** - Function name should explain what it calculates
- **Real-world relevance** - Make examples realistic and relatable
- **Show your work** - Display intermediate steps, not just final answer

---

## 🎯 Example Output

Your calculator output should look something like this:

```
====================================
🧮 SMART CALCULATOR
====================================

=== SECTION 1: BASIC OPERATIONS ===
5 + 3 = 8
10 - 4 = 6
6 × 7 = 42
20 ÷ 4 = 5

=== SECTION 2: ADVANCED MATH ===
Average of 10, 20, 30: 20
25 out of 100 = 25%
20% of 100 = 20

=== SECTION 3: UNIT CONVERSIONS ===
10 miles = 16.09 km
100 km = 62.14 miles
25°C = 77°F

=== SECTION 4: REAL-WORLD PROBLEMS ===

💰 RESTAURANT BILL:
Bill: $50.00
Tip (20%): $10.00
Tax (8%): $4.00
Total: $64.00

🛒 SHOPPING:
Original price: $100.00
Discount (25%): -$25.00
Subtotal: $75.00
Tax (8%): $6.00
Final price: $81.00

... more problems ...

====================================
✅ ALL CALCULATIONS COMPLETE!
====================================
```

---

## 🎯 Success Criteria

You're done when:
- At least 15 functions created and working
- All function categories represented
- Each function tested with console output
- At least 4 complete real-world problem examples
- Output is clear, formatted, and easy to read
- Function names are descriptive and consistent
- You can explain what each function does
- All calculations are accurate
- Code is well-organized with comments

Time to build an amazing calculator! 🧮✨