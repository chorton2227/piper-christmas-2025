# Lesson 1.1 Cheatsheet

## 🏷️ Tags You Learned

### Headings
```html
<h1>Biggest heading</h1>
<h2>Second biggest</h2>
<h3>Third biggest</h3>
<h4>Fourth</h4>
<h5>Fifth</h5>
<h6>Smallest heading</h6>
```

### Paragraphs
```html
<p>This is a paragraph of text.</p>
```

---

## 📖 Key Terms

| Term | Definition | Example |
|------|------------|---------|
| **HTML** | HyperText Markup Language | The code that makes websites |
| **Tag** | A label wrapped in `< >` | `<h1>` or `</h1>` |
| **Element** | Opening tag + content + closing tag | `<h1>Hello</h1>` |
| **Browser** | Program that displays websites | Chrome, Firefox, Edge |
| **Opening Tag** | Starts an element | `<p>` |
| **Closing Tag** | Ends an element (has `/`) | `</p>` |

---

## ✅ HTML Rules

1. Most tags come in **pairs** (opening and closing)
2. Closing tags have a **forward slash** `/`
3. Content goes **between** the tags
4. HTML is **not case sensitive** (but lowercase is standard)
5. Use proper **indentation** to make code readable

---

## 🏗️ Basic HTML Structure

Every HTML page should have:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title Here</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
```

Don't worry about understanding all of this yet - we'll learn it in Lesson 1.2!

---

## 🐛 Common Mistakes

### ❌ Forgetting Closing Tag
```html
<h1>Hello World!
```

### ✅ Correct
```html
<h1>Hello World!</h1>
```

---

### ❌ Wrong Slash Direction
```html
<h1>Hello World!<\h1>
```

### ✅ Correct
```html
<h1>Hello World!</h1>
```

---

### ❌ Tags in Wrong Order
```html
<html>
<body>
</html>
</body>
```

### ✅ Correct (close inner tags first)
```html
<html>
<body>
</body>
</html>
```

---

## 💡 Pro Tips

- **Save often!** Press Ctrl+S (Windows) or Cmd+S (Mac)
- **Refresh browser** to see changes: F5 or Ctrl+R
- **Indent your code** to make it easier to read
- **Experiment!** The best way to learn is by trying things
- **Use comments** to leave notes: `<!-- This is a comment -->`

---

## 🔗 Quick Links

- Next Lesson: 1.2 - Basic Document Structure
- Practice: Complete all 3 exercises
- Examples: Open and explore all 3 example files

---

## 🎯 Can You Answer These?

Test yourself:
1. What does HTML stand for?
2. What are the three parts of an HTML element?
3. Which heading is bigger: `<h1>` or `<h6>`?
4. What tag do you use for a paragraph?
5. How do you close a tag?

(Check the lesson if you're not sure!)
