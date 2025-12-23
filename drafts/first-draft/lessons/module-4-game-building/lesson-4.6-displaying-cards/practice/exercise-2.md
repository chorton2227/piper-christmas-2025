# Exercise 2: Custom Animation Effects 🎨

**Goal**: Create your own unique animations and visual effects.

**Time**: 45-60 minutes

**Challenge**: Make your poker game stand out with custom animations!

---

## 🎯 Part 1: Custom Card Animations (20 minutes)

### Challenge 1: Spin Deal Animation

Create cards that spin while dealing:

```css
@keyframes spinDeal {
    0% {
        transform: translateY(-200px) rotate(0deg) scale(0);
        opacity: 0;
    }
    50% {
        transform: translateY(-50px) rotate(720deg) scale(1.2);
    }
    100% {
        transform: translateY(0) rotate(1080deg) scale(1);
        opacity: 1;
    }
}

.card.spin-deal {
    animation: spinDeal 1s ease-out;
}
```

**Task**: Modify `displayHandAnimated` to use this animation instead of `dealing`.

### Challenge 2: Bounce Animation

Cards bounce when landing:

```css
@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(-30px);
    }
    50% {
        transform: translateY(0);
    }
    75% {
        transform: translateY(-15px);
    }
}

.card.bounce {
    animation: bounce 0.6s ease-out;
}
```

### Challenge 3: Slide From Sides

Player cards from left, dealer cards from right:

```css
@keyframes slideFromLeft {
    from {
        transform: translateX(-500px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideFromRight {
    from {
        transform: translateX(500px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
```

**Task**: Apply different animations to player vs dealer cards.

---

## 🌟 Part 2: Win/Lose Effects (20 minutes)

### Challenge 4: Screen Shake on Lose

```css
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
    20%, 40%, 60%, 80% { transform: translateX(10px); }
}

.game-screen.shake {
    animation: shake 0.5s;
}
```

```javascript
function shakeScreen() {
    let gameScreen = document.getElementById('game-screen');
    gameScreen.classList.add('shake');
    setTimeout(() => {
        gameScreen.classList.remove('shake');
    }, 500);
}

// Use when player loses
if (result === 'lose') {
    shakeScreen();
}
```

### Challenge 5: Confetti on Win

```javascript
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = (Math.random() * 3) + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        
        document.body.appendChild(confetti);
        
        // Remove after falling
        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }
}
```

```css
.confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    top: -10px;
    animation: fall linear;
    z-index: 9999;
}

@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}
```

### Challenge 6: Fireworks Effect

```javascript
function createFirework(x, y) {
    const colors = ['#ff0000', '#ffa500', '#ffff00', '#00ff00', '#0000ff', '#ff00ff'];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        let particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        let angle = (i / particleCount) * Math.PI * 2;
        let velocity = 2 + Math.random() * 2;
        let vx = Math.cos(angle) * velocity;
        let vy = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--vx', vx);
        particle.style.setProperty('--vy', vy);
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// CSS
/*
.firework-particle {
    position: fixed;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    animation: explode 1s ease-out;
}

@keyframes explode {
    to {
        transform: translate(calc(var(--vx) * 100px), calc(var(--vy) * 100px));
        opacity: 0;
    }
}
*/
```

---

## 💎 Part 3: Advanced Visual Polish (15 minutes)

### Challenge 7: Glowing Winner Border

```css
@keyframes glow-pulse {
    0%, 100% {
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.5),
                    0 0 20px rgba(255, 215, 0, 0.3),
                    0 0 30px rgba(255, 215, 0, 0.1);
    }
    50% {
        box-shadow: 0 0 20px rgba(255, 215, 0, 1),
                    0 0 40px rgba(255, 215, 0, 0.7),
                    0 0 60px rgba(255, 215, 0, 0.4);
    }
}

.player-area.winner {
    animation: glow-pulse 1.5s ease-in-out infinite;
    border: 3px solid #ffd700;
}
```

### Challenge 8: Card Fan Effect

```javascript
function fanCards(containerId) {
    let container = document.getElementById(containerId);
    let cards = container.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        let totalCards = cards.length;
        let middleIndex = (totalCards - 1) / 2;
        let offset = index - middleIndex;
        
        let rotation = offset * 5;  // 5 degrees per card
        let translateY = Math.abs(offset) * 10;
        
        card.style.transform = `rotate(${rotation}deg) translateY(${translateY}px)`;
        card.style.transition = 'transform 0.5s ease';
    });
}
```

### Challenge 9: Chip Counter Animation

```javascript
function animateChipCount(elementId, startValue, endValue, duration = 1000) {
    let element = document.getElementById(elementId);
    let range = endValue - startValue;
    let startTime = null;
    
    function updateCount(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = (currentTime - startTime) / duration;
        
        if (progress < 1) {
            let currentValue = Math.floor(startValue + (range * progress));
            element.textContent = currentValue;
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = endValue;
        }
    }
    
    requestAnimationFrame(updateCount);
}

// Usage:
animateChipCount('player-chips', 1000, 1100, 1000);  // Count from 1000 to 1100
```

---

## 🎮 Part 4: Interactive Animations (10 minutes)

### Challenge 10: Click to Select Cards

```javascript
function makeCardsSelectable(containerId) {
    let container = document.getElementById(containerId);
    let cards = container.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            card.classList.toggle('selected');
        });
    });
}

// CSS
/*
.card.selected {
    transform: translateY(-20px);
    border: 3px solid #00ff00;
    box-shadow: 0 10px 30px rgba(0, 255, 0, 0.5);
}
*/
```

### Challenge 11: Drag and Drop

```javascript
function makeCardDraggable(cardElement) {
    cardElement.draggable = true;
    
    cardElement.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
        cardElement.classList.add('dragging');
    });
    
    cardElement.addEventListener('dragend', (e) => {
        cardElement.classList.remove('dragging');
    });
}

// CSS
/*
.card.dragging {
    opacity: 0.5;
    transform: rotate(5deg);
}
*/
```

---

## 🌈 Part 5: Theme Variations (Optional)

### Challenge 12: Neon Theme

```css
/* Neon glow theme */
.card.neon {
    background: #000;
    color: #0ff;
    border: 2px solid #0ff;
    box-shadow: 0 0 10px #0ff,
                inset 0 0 10px #0ff;
    text-shadow: 0 0 10px #0ff;
}

.card.neon:hover {
    box-shadow: 0 0 20px #0ff,
                inset 0 0 20px #0ff;
}
```

### Challenge 13: 3D Card Flip

```css
.card-container-3d {
    perspective: 1000px;
}

.card.flip-3d {
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card.flip-3d.flipped {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    backface-visibility: hidden;
    position: absolute;
}

.card-back {
    transform: rotateY(180deg);
}
```

---

## ✅ Completion Checklist

- [ ] Created at least 3 custom card animations
- [ ] Implemented win/lose effects
- [ ] Added visual polish (glows, pulses, etc.)
- [ ] Tested all animations work smoothly
- [ ] No performance issues (smooth 60fps)
- [ ] Customized at least one animation timing
- [ ] Added personal creative touch
- [ ] Tested on different screen sizes

---

## 🎨 Creative Challenges

Pick ONE to implement:

**Option A: Seasonal Theme**
- Holiday decorations
- Snowflakes falling (winter)
- Leaves falling (autumn)
- Themed card backs

**Option B: Casino Lights**
- Flashing borders
- Slot machine-style win animation
- Neon signs
- Spinning chips

**Option C: Magical Effects**
- Sparkles when cards dealt
- Magic wand pointer cursor
- Card transformation effects
- Mystical glows

**Option D: Your Own Idea!**
- Design something unique
- Combine multiple effects
- Create signature style

---

## 📝 Document Your Work

Create a file called `MY_ANIMATIONS.md`:

```markdown
# My Custom Animations

## Animation 1: [Name]
**What it does:** [Description]
**Why I chose it:** [Reason]
**Code location:** [File and line number]

## Animation 2: [Name]
...

## Favorite Effect
My favorite is [animation name] because [reason].

## What I Learned
[Key learnings]

## Future Ideas
- [Idea 1]
- [Idea 2]
```

---

## 🎓 What You've Learned

✅ Creating custom CSS animations  
✅ Combining multiple animation effects  
✅ Particle systems (confetti, fireworks)  
✅ Interactive animations  
✅ Performance optimization  
✅ Creative problem-solving  

**You're now an animation expert!** 🎨✨

---

**Parent/Teacher Sign-Off:**

Student completed: _____ custom animations

Most creative effect: _________________________________

Date: _______

Notes: ___________________________________________________
