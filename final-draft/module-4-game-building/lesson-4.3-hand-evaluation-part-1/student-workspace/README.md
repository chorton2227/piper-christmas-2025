# Student Workspace - Lesson 4.3

## 🚀 Your Practice Area

This is your workspace for practicing hand evaluation algorithms!

## 📁 What to Create Here

Use this folder for:
1. **Testing** your hand evaluation functions
2. **Experimenting** with different card combinations
3. **Building** your own evaluator from scratch
4. **Debugging** when things don't work

## 💡 Practice Ideas

### Beginner
- Create a function that counts aces
- Sort a hand of 5 cards
- Display card ranks in the console

### Intermediate
- Implement pair detection
- Create a two-pair detector
- Build a trips finder

### Advanced
- Complete hand evaluator for all Part 1 hands
- Add visualization of matching cards
- Compare two hands and declare winner

## 🎯 Starter Template

Create a file like `my-evaluator.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Hand Evaluator</title>
</head>
<body>
    <h1>Hand Evaluation Practice</h1>
    <div id="output"></div>

    <script>
        function createCard(suit, rank, value) {
            return { suit, rank, value };
        }

        // Your code here!
        
    </script>
</body>
</html>
```

## ✅ Progress Checklist

Before moving on, make sure you can:
- [ ] Create card objects
- [ ] Sort cards by value
- [ ] Count rank frequencies
- [ ] Detect one pair
- [ ] Detect two pair
- [ ] Detect three of a kind
- [ ] Detect four of a kind
- [ ] Compare two hands

## 🆘 Need Help?

- Review the examples in `../examples/`
- Check the cheatsheet in `../resources/cheatsheet.md`
- Look at solutions in `../answer-key/` (but try first!)
- Use `console.log()` to debug your code

## 🎮 Challenge Yourself

Try these extra challenges:
1. Find the highest pair in a hand with multiple pairs
2. Count how many different hand types appear in 100 random hands
3. Create a function that generates hands with specific patterns
4. Build a "hand strength meter" visualization

## 💭 Think About It

- Why is counting frequencies a powerful technique?
- How would you make your evaluator faster?
- What other problems could use similar algorithms?

Happy coding! 🎴
