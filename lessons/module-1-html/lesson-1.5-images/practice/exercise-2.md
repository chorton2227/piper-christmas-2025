# Exercise 2: Create an Image Gallery with Captions

## 🎯 Goal
Build a photo gallery using `<figure>` and `<figcaption>` tags to add captions to images.

## 📋 Instructions

1. Create a new file called `gallery.html`
2. Create a gallery with:
   - At least 6 images with captions
   - Use `<figure>` and `<figcaption>` for each image
   - Multiple sections/categories
   - Navigation (anchor links to sections)
   - Descriptive captions for each image

### Requirements:
- [ ] At least 6 images total
- [ ] Every image wrapped in `<figure>` tag
- [ ] Every image has a `<figcaption>`
- [ ] At least 3 different sections/categories
- [ ] Table of contents with anchor links
- [ ] All images have proper alt text
- [ ] "Back to Top" links after each section

## ✅ Success Check

Your gallery should have:
- [ ] 6+ images with figure/figcaption
- [ ] 3+ organized sections
- [ ] Navigation with anchor links working
- [ ] Descriptive captions explaining each image
- [ ] Good organization with headings
- [ ] Alt text for all images
- [ ] Professional appearance

## 🌟 Bonus Challenge

- Add 10+ images total
- Create 5+ different sections
- Include clickable thumbnails
- Add a photographer profile section
- Use formatted text in captions (bold, italic)
- Add dates or locations to captions
- Include "Previous/Next" navigation between sections
- Add social media links at the bottom
- Make some images clickable links

## 💡 Tips

- Plan your sections before starting
- Keep captions concise but descriptive
- Use headings to organize content
- Test all anchor links
- Make captions interesting!
- Include context (where, when, why)

---

## 🎨 Example Structure

```html
<h1>My Photo Gallery</h1>

<nav>
    <strong>Categories:</strong>
    <a href="#nature">Nature</a> |
    <a href="#travel">Travel</a> |
    <a href="#food">Food</a>
</nav>

<hr>

<section id="nature">
    <h2>Nature Photography</h2>
    
    <figure>
        <img src="https://placehold.co/400x300" alt="Mountain vista" width="400">
        <figcaption>
            <strong>Mountain Sunrise</strong>
            <br>
            Rocky Mountains, Colorado • Summer 2025
        </figcaption>
    </figure>
    
    <p><a href="#">↑ Back to Top</a></p>
</section>
```

---

## 📊 Gallery Theme Ideas

Choose a theme for your gallery:
- **Travel** - Places you've visited or want to visit
- **Nature** - Landscapes, animals, plants
- **Food** - Favorite dishes, restaurants, recipes
- **Hobbies** - Sports, gaming, art, music
- **Pets** - Your pets or favorite animals
- **Portfolio** - Your creative work
- **Events** - Parties, holidays, special occasions
- **Before/After** - Transformations or progress
- **Collection** - Items you collect or love
