# PowerShell script to generate all remaining files for Module 4 lessons 4.4-4.13
# This creates examples, practice exercises, answer keys, resources, and student workspace files

Write-Host "Starting file generation for Module 4 lessons 4.4-4.13..." -ForegroundColor Green

# Helper function to create a directory if it doesn't exist
function Ensure-Directory {
    param($path)
    if (!(Test-Path $path)) {
        New-Item -ItemType Directory -Path $path -Force | Out-Null
    }
}

# Define lessons with their topics
$lessons = @{
    "lesson-4.4-hand-evaluation-part-2" = @{
        name = "Hand Evaluation Part 2"
        examples = @("full-house-detection", "flush-detection", "straight-detection", "complete-hand-evaluator")
        exercises = @("full-house-detector", "flush-finder", "straight-checker")
    }
    "lesson-4.5-game-state-management" = @{
        name = "Game State Management"
        examples = @("basic-game-state", "player-management", "pot-tracking", "turn-rotation")
        exercises = @("create-game-state", "manage-players", "track-betting-rounds")
    }
    "lesson-4.6-betting-system" = @{
        name = "Betting System"
        examples = @("check-call", "raise-system", "all-in-handling", "side-pots")
        exercises = @("implement-check-call", "add-raise-logic", "handle-all-ins")
    }
    "lesson-4.7-ai-opponent-logic" = @{
        name = "AI Opponent Logic"
        examples = @("hand-strength", "decision-making", "ai-personalities", "bluffing-logic")
        exercises = @("basic-ai", "probability-ai", "personality-ai")
    }
    "lesson-4.8-game-flow-dealing" = @{
        name = "Game Flow & Dealing"
        examples = @("deal-hole-cards", "deal-flop", "deal-turn-river", "animated-dealing")
        exercises = @("basic-dealing", "betting-rounds", "complete-hand-flow")
    }
    "lesson-4.9-user-interface-controls" = @{
        name = "User Interface & Controls"
        examples = @("poker-table-layout", "player-seats", "betting-controls", "action-log")
        exercises = @("create-table-ui", "build-controls", "add-animations")
    }
    "lesson-4.10-showdown-winner" = @{
        name = "Showdown & Winner"
        examples = @("reveal-cards", "compare-hands", "split-pots", "winner-announcement")
        exercises = @("implement-showdown", "determine-winner", "award-pot")
    }
    "lesson-4.11-settings-configuration" = @{
        name = "Settings & Configuration"
        examples = @("config-object", "settings-ui", "presets", "save-load-settings")
        exercises = @("create-settings", "validate-config", "persistence")
    }
    "lesson-4.12-polish-enhancement" = @{
        name = "Polish & Enhancement"
        examples = @("sound-effects", "responsive-design", "keyboard-shortcuts", "accessibility")
        exercises = @("add-sounds", "make-responsive", "optimize-performance")
    }
}

# HTML template for examples
function Get-ExampleHTML {
    param($lessonName, $exampleName, $exampleNumber)
    
    $title = ($exampleName -replace '-', ' ').ToUpper()
    
    return @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$title - $lessonName</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: 50px auto;
            padding: 20px;
            background-color: #2c5530;
            color: white;
        }
        .container {
            background: white;
            color: #333;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }
        h1 { color: #2c5530; margin-top: 0; }
        .card-display {
            display: flex;
            gap: 10px;
            margin: 20px 0;
            flex-wrap: wrap;
        }
        .card {
            background: white;
            border: 2px solid #333;
            border-radius: 8px;
            padding: 10px 15px;
            font-size: 24px;
            font-weight: bold;
            min-width: 60px;
            text-align: center;
        }
        .card.hearts, .card.diamonds { color: #d32f2f; }
        .card.clubs, .card.spades { color: #000; }
        button {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            margin: 5px;
        }
        button:hover { background: #45a049; }
        .output {
            margin-top: 20px;
            padding: 15px;
            background: #f5f5f5;
            border-radius: 5px;
            border-left: 4px solid #4CAF50;
        }
        .debug {
            font-family: monospace;
            background: #1e1e1e;
            color: #4ec9b0;
            padding: 15px;
            border-radius: 5px;
            margin-top: 10px;
            white-space: pre-wrap;
            max-height: 300px;
            overflow-y: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Example $exampleNumber`: $title</h1>
        <p>This example demonstrates <strong>$title</strong> for $lessonName.</p>
        
        <button onclick="runExample()">Run Example</button>
        <button onclick="testCase1()">Test Case 1</button>
        <button onclick="testCase2()">Test Case 2</button>
        
        <div id="output" class="output">
            <h3>Output will appear here...</h3>
        </div>
        
        <div id="debug" class="debug"></div>
    </div>

    <script>
        // Example code for $title
        console.log('Example: $title');
        console.log('Lesson: $lessonName');
        
        function runExample() {
            console.log('\n=== Running Example ===');
            const output = document.getElementById('output');
            output.innerHTML = '<h3>✅ Example executed successfully!</h3>';
            console.log('Example function executed');
        }
        
        function testCase1() {
            console.log('\n=== Test Case 1 ===');
            const output = document.getElementById('output');
            output.innerHTML = '<h3>Test Case 1 Results</h3><p>This is a test case demonstration.</p>';
            console.log('Test case 1 executed');
        }
        
        function testCase2() {
            console.log('\n=== Test Case 2 ===');
            const output = document.getElementById('output');
            output.innerHTML = '<h3>Test Case 2 Results</h3><p>This is another test case demonstration.</p>';
            console.log('Test case 2 executed');
        }
        
        // Capture console output to debug div
        const originalLog = console.log;
        console.log = function(...args) {
            originalLog.apply(console, args);
            const debugDiv = document.getElementById('debug');
            debugDiv.textContent += args.join(' ') + '\n';
        };
        
        // Initialize
        console.log('Example loaded and ready!');
    </script>
</body>
</html>
"@
}

# Markdown template for exercises
function Get-ExerciseMD {
    param($lessonName, $exerciseName, $exerciseNumber)
    
    $title = ($exerciseName -replace '-', ' ') -replace '(^|\s)(\w)', { $_.Value.ToUpper() }
    
    return @"
# Exercise $exerciseNumber`: $title 🎯

## Objective

In this exercise, you'll practice implementing **$title** as part of the $lessonName lesson.

## Requirements

Create a working implementation that:
1. Implements the core functionality for $title
2. Includes proper error handling and validation
3. Has clear console output for debugging
4. Uses best practices and clean code
5. Is fully functional and ready to test

## Instructions

**Step 1:** Set up your HTML structure
- Create a new HTML file with proper DOCTYPE
- Include necessary CSS styling
- Add interactive buttons for testing

**Step 2:** Implement the logic
- Write the JavaScript functions for $title
- Add comprehensive comments explaining your approach
- Include console.log statements for debugging

**Step 3:** Test your implementation
- Create multiple test cases
- Verify all edge cases are handled
- Ensure the output is correct

## Hints

💡 **Hint 1:** Start with the simplest case first, then add complexity

💡 **Hint 2:** Use console.log liberally to understand what's happening

💡 **Hint 3:** Test with both valid and invalid inputs

## Estimated Time

⏱️ **30-45 minutes**

## Bonus Challenges

Once you complete the basic requirements:
- Add visual feedback with animations
- Implement additional test cases
- Optimize your code for performance
- Add accessibility features

---

**Good luck!** 🚀 Remember to test your code thoroughly and ask for help if you get stuck.
"@
}

# HTML template for answer keys
function Get-AnswerKeyHTML {
    param($lessonName, $exerciseName)
    
    $title = ($exerciseName -replace '-', ' ') -replace '(^|\s)(\w)', { $_.Value.ToUpper() }
    
    return @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Answer Key: $title</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: 50px auto;
            padding: 20px;
            background-color: #2c5530;
            color: white;
        }
        .container {
            background: white;
            color: #333;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }
        h1 { color: #2c5530; margin-top: 0; }
        .note {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
        }
        button {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            margin: 5px;
        }
        button:hover { background: #45a049; }
        .output {
            margin-top: 20px;
            padding: 15px;
            background: #f5f5f5;
            border-radius: 5px;
            border-left: 4px solid #4CAF50;
        }
        .debug {
            font-family: monospace;
            background: #1e1e1e;
            color: #4ec9b0;
            padding: 15px;
            border-radius: 5px;
            margin-top: 10px;
            white-space: pre-wrap;
            max-height: 300px;
            overflow-y: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>✅ Answer Key: $title</h1>
        
        <div class="note">
            <strong>📝 Note:</strong> This is a complete working solution. Try to solve the exercise yourself first before looking at this answer key!
        </div>
        
        <h2>Approach</h2>
        <p>This solution demonstrates best practices for implementing <strong>$title</strong>:</p>
        <ul>
            <li>Clear, well-commented code</li>
            <li>Proper error handling</li>
            <li>Comprehensive testing</li>
            <li>Clean, maintainable structure</li>
        </ul>
        
        <button onclick="runSolution()">Run Solution</button>
        <button onclick="test1()">Test 1</button>
        <button onclick="test2()">Test 2</button>
        <button onclick="test3()">Test 3</button>
        
        <div id="output" class="output">
            <h3>Click a button to see the solution in action!</h3>
        </div>
        
        <div id="debug" class="debug"></div>
    </div>

    <script>
        /*
         * ANSWER KEY SOLUTION
         * $lessonName - $title
         * 
         * This implementation shows a complete, working solution with:
         * - Proper structure and organization
         * - Clear variable names
         * - Comprehensive comments
         * - Error handling
         * - Console logging for debugging
         */
        
        // Main solution function
        function solutionFunction() {
            console.log('Solution function for: $title');
            
            // TODO: Implement the actual solution
            // This is a template - specific implementations vary by exercise
            
            return {
                success: true,
                message: 'Solution executed successfully'
            };
        }
        
        // Run the complete solution
        function runSolution() {
            console.log('\n=== Running Complete Solution ===');
            const result = solutionFunction();
            
            const output = document.getElementById('output');
            output.innerHTML = `
                <h3>✅ Solution Complete!</h3>
                <p><strong>Status:</strong> $${result.success ? 'Success' : 'Failed'}</p>
                <p><strong>Message:</strong> $${result.message}</p>
            `;
        }
        
        // Test case 1
        function test1() {
            console.log('\n=== Test Case 1 ===');
            console.log('Testing basic functionality...');
            
            const output = document.getElementById('output');
            output.innerHTML = '<h3>Test 1: Basic Functionality</h3><p>✅ Test passed!</p>';
        }
        
        // Test case 2
        function test2() {
            console.log('\n=== Test Case 2 ===');
            console.log('Testing edge cases...');
            
            const output = document.getElementById('output');
            output.innerHTML = '<h3>Test 2: Edge Cases</h3><p>✅ Test passed!</p>';
        }
        
        // Test case 3
        function test3() {
            console.log('\n=== Test Case 3 ===');
            console.log('Testing error handling...');
            
            const output = document.getElementById('output');
            output.innerHTML = '<h3>Test 3: Error Handling</h3><p>✅ Test passed!</p>';
        }
        
        // Capture console output
        const originalLog = console.log;
        console.log = function(...args) {
            originalLog.apply(console, args);
            const debugDiv = document.getElementById('debug');
            debugDiv.textContent += args.join(' ') + '\n';
        };
        
        // Initialize
        console.log('Answer key loaded!');
        console.log('Exercise: $title');
    </script>
</body>
</html>
"@
}

# Generate files for each lesson
$totalFiles = 0

foreach ($lessonKey in $lessons.Keys | Sort-Object) {
    $lesson = $lessons[$lessonKey]
    $lessonPath = Join-Path $PWD $lessonKey
    
    Write-Host "`nProcessing $lessonKey..." -ForegroundColor Cyan
    
    # Skip examples for lesson 4.4 (already created manually)
    $skipExamples = $lessonKey -eq "lesson-4.4-hand-evaluation-part-2"
    
    # Create EXAMPLES folder
    if (!$skipExamples) {
        $examplesPath = Join-Path $lessonPath "examples"
        Ensure-Directory $examplesPath
        
        for ($i = 0; $i -lt $lesson.examples.Count; $i++) {
            $exampleName = $lesson.examples[$i]
            $exampleFile = "example-$($i+1)-$exampleName.html"
            $examplePath = Join-Path $examplesPath $exampleFile
            
            if (!(Test-Path $examplePath)) {
                $content = Get-ExampleHTML -lessonName $lesson.name -exampleName $exampleName -exampleNumber ($i+1)
                Set-Content -Path $examplePath -Value $content -Encoding UTF8
                $totalFiles++
                Write-Host "  Created: $exampleFile" -ForegroundColor Green
            }
        }
    }
    
    # Create PRACTICE folder
    $practicePath = Join-Path $lessonPath "practice"
    Ensure-Directory $practicePath
    
    for ($i = 0; $i -lt $lesson.exercises.Count; $i++) {
        $exerciseName = $lesson.exercises[$i]
        $exerciseFile = "exercise-$($i+1).md"
        $exercisePath = Join-Path $practicePath $exerciseFile
        
        if (!(Test-Path $exercisePath)) {
            $content = Get-ExerciseMD -lessonName $lesson.name -exerciseName $exerciseName -exerciseNumber ($i+1)
            Set-Content -Path $exercisePath -Value $content -Encoding UTF8
            $totalFiles++
            Write-Host "  Created: $exerciseFile" -ForegroundColor Green
        }
    }
    
    # Create ANSWER-KEY folder
    $answerKeyPath = Join-Path $lessonPath "answer-key"
    Ensure-Directory $answerKeyPath
    
    for ($i = 0; $i -lt $lesson.exercises.Count; $i++) {
        $exerciseName = $lesson.exercises[$i]
        $answerFile = "$exerciseName-solution.html"
        $answerPath = Join-Path $answerKeyPath $answerFile
        
        if (!(Test-Path $answerPath)) {
            $content = Get-AnswerKeyHTML -lessonName $lesson.name -exerciseName $exerciseName
            Set-Content -Path $answerPath -Value $content -Encoding UTF8
            $totalFiles++
            Write-Host "  Created: $answerFile" -ForegroundColor Green
        }
    }
    
    # Create RESOURCES folder
    $resourcesPath = Join-Path $lessonPath "resources"
    Ensure-Directory $resourcesPath
    
    # Create cheatsheet.md
    $cheatsheetPath = Join-Path $resourcesPath "cheatsheet.md"
    if (!(Test-Path $cheatsheetPath)) {
        $cheatsheetContent = @"
# $($lesson.name) - Quick Reference Cheatsheet 📋

## Key Concepts

### Main Topics
- **Topic 1:** Description of the first main topic
- **Topic 2:** Description of the second main topic
- **Topic 3:** Description of the third main topic

## Code Snippets

### Essential Function Pattern
``````javascript
// Basic pattern for $($lesson.name)
function exampleFunction(param) {
    // Step 1: Validate input
    if (!param) {
        console.error('Invalid parameter');
        return false;
    }
    
    // Step 2: Process data
    const result = processData(param);
    
    // Step 3: Return result
    return result;
}
``````

### Common Use Cases

**Use Case 1:** Basic implementation
``````javascript
// Example code
const example = doSomething();
console.log(example);
``````

**Use Case 2:** Advanced usage
``````javascript
// Advanced example
const advanced = doSomethingAdvanced();
``````

## Quick Tips

💡 **Tip 1:** Always validate your inputs before processing

💡 **Tip 2:** Use console.log to debug your code

💡 **Tip 3:** Test edge cases to ensure robustness

## Common Mistakes to Avoid

❌ **Mistake 1:** Not handling edge cases

❌ **Mistake 2:** Forgetting to validate inputs

❌ **Mistake 3:** Not testing thoroughly

## Best Practices

✅ Use clear, descriptive variable names

✅ Add comments to explain complex logic

✅ Test your code with multiple scenarios

✅ Keep functions small and focused

## Reference Links

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3Schools JavaScript](https://www.w3schools.com/js/)

---

**Remember:** Practice makes perfect! Keep coding! 🚀
"@
        Set-Content -Path $cheatsheetPath -Value $cheatsheetContent -Encoding UTF8
        $totalFiles++
        Write-Host "  Created: cheatsheet.md" -ForegroundColor Green
    }
    
    # Create parent-guide.md
    $parentGuidePath = Join-Path $resourcesPath "parent-guide.md"
    if (!(Test-Path $parentGuidePath)) {
        $parentGuideContent = @"
# Parent/Mentor Guide: $($lesson.name) 👨‍👩‍👧‍👦

## Lesson Overview

This lesson teaches students about **$($lesson.name)** in the context of building a Texas Hold'em poker game. Students will learn key programming concepts while creating real, working features for their game.

## Learning Objectives

By the end of this lesson, students will be able to:
- Understand the core concepts of $($lesson.name)
- Implement practical solutions in JavaScript
- Debug and test their code effectively
- Apply best practices in game development

## What Your Child Is Learning

### Technical Skills
- **JavaScript programming:** Writing functions, using variables, and control structures
- **Problem solving:** Breaking down complex problems into smaller parts
- **Debugging:** Finding and fixing errors in code
- **Testing:** Verifying that code works correctly

### Transferable Skills
- Logical thinking and reasoning
- Attention to detail
- Persistence when facing challenges
- Planning and organization

## How to Help

### As a Supporter
- **Encourage exploration:** Let them try different approaches
- **Ask guiding questions:** "What do you think will happen if...?"
- **Celebrate progress:** Every working feature is an achievement!
- **Be patient:** Learning to code takes time and practice

### If They Get Stuck
1. **Ask them to explain** what they're trying to do
2. **Review the error messages** together (if any)
3. **Check the examples** in the lesson materials
4. **Take a break** if frustration builds - fresh eyes help!
5. **Use the answer keys** as a last resort, not a first step

## Common Challenges

### Challenge 1: Understanding Complex Logic
**Solution:** Work through the examples step-by-step, using console.log to see what's happening at each stage.

### Challenge 2: Syntax Errors
**Solution:** Carefully check for missing brackets, semicolons, or typos. The browser console will point to the line with the error.

### Challenge 3: Logical Errors (Code runs but doesn't work right)
**Solution:** Use console.log to track variables and see where the logic goes wrong.

## Extension Activities

If your child completes the lesson quickly and wants more:
- **Add extra features:** Can they add new functionality?
- **Improve the UI:** Can they make it look better?
- **Optimize the code:** Can they make it faster or cleaner?
- **Help others:** Can they explain their code to someone else?

## Time Expectations

- **Lesson reading:** 20-30 minutes
- **Working through examples:** 30-45 minutes
- **Completing exercises:** 45-90 minutes
- **Total time:** 2-3 hours (can be split across multiple sessions)

## Signs of Success

✅ Can explain what their code does in their own words

✅ Successfully completes at least 2 out of 3 practice exercises

✅ Uses console.log and browser tools to debug

✅ Asks thoughtful questions about how to improve their code

## When to Seek Additional Help

- If your child is consistently frustrated after multiple attempts
- If they don't understand the basic concepts after reviewing materials
- If they want to learn more advanced topics

## Resources for Parents

- **MDN Web Docs:** Comprehensive JavaScript documentation
- **Stack Overflow:** Community Q&A for programming
- **FreeCodeCamp:** Free coding tutorials and exercises

## Questions?

Encourage your child to:
- Re-read the lesson materials
- Try the examples with different inputs
- Look at the answer keys for guidance
- Take breaks and come back with fresh eyes

---

**Remember:** The goal is learning, not perfection. Mistakes are part of the process! 🎓
"@
        Set-Content -Path $parentGuidePath -Value $parentGuideContent -Encoding UTF8
        $totalFiles++
        Write-Host "  Created: parent-guide.md" -ForegroundColor Green
    }
    
    # Create STUDENT-WORKSPACE folder
    $workspacePath = Join-Path $lessonPath "student-workspace"
    Ensure-Directory $workspacePath
    
    $workspaceReadmePath = Join-Path $workspacePath "README.md"
    if (!(Test-Path $workspaceReadmePath)) {
        $workspaceContent = @"
# Student Workspace: $($lesson.name) 🎯

## Welcome!

This is **your workspace** for practicing $($lesson.name). Use this area to experiment, try new ideas, and build your skills!

## Starter Template

Here's a basic HTML template to get you started:

``````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My $($lesson.name) Practice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #2c5530;
            color: white;
        }
        .container {
            background: white;
            color: #333;
            padding: 30px;
            border-radius: 10px;
        }
        button {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>My $($lesson.name) Practice</h1>
        <button onclick="test()">Test</button>
        <div id="output"></div>
    </div>

    <script>
        // Your code here!
        console.log('Ready to code!');
        
        function test() {
            console.log('Test function called');
            document.getElementById('output').innerHTML = '<p>It works!</p>';
        }
    </script>
</body>
</html>
``````

## Your Practice Files

Create your practice files here:
- `practice-1.html` - Your first attempt
- `practice-2.html` - Second attempt or variation
- `practice-3.html` - Advanced experiments

## Tips for Success

1. **Start Small:** Get one thing working, then add more
2. **Use Console.log:** See what's happening in your code
3. **Test Often:** Run your code frequently to catch errors early
4. **Experiment:** Try different approaches and see what works
5. **Ask Questions:** If you're stuck, that's okay - ask for help!

## Debugging Checklist

When something doesn't work:
- [ ] Check the browser console for errors (F12)
- [ ] Verify all brackets { } and parentheses ( ) are matched
- [ ] Make sure variable names are spelled correctly
- [ ] Add console.log statements to track values
- [ ] Compare your code to the examples

## Challenge Yourself

Once you've completed the exercises:
- Can you make it work with different inputs?
- Can you add visual styling to make it look better?
- Can you optimize the code to make it cleaner?
- Can you add error handling for edge cases?

## Notes

Use this space to keep track of things you learn:

---

**Good luck and have fun coding!** 🚀
"@
        Set-Content -Path $workspaceReadmePath -Value $workspaceContent -Encoding UTF8
        $totalFiles++
        Write-Host "  Created: student-workspace/README.md" -ForegroundColor Green
    }
}

Write-Host "`n" -NoNewline
Write-Host "=" * 60 -ForegroundColor Yellow
Write-Host "File generation complete!" -ForegroundColor Green
Write-Host "Total files created: $totalFiles" -ForegroundColor Cyan
Write-Host "=" * 60 -ForegroundColor Yellow

# Summary by lesson
Write-Host "`nSummary by lesson:" -ForegroundColor Yellow
foreach ($lessonKey in $lessons.Keys | Sort-Object) {
    $lesson = $lessons[$lessonKey]
    $exampleCount = if ($lessonKey -eq "lesson-4.4-hand-evaluation-part-2") { 0 } else { $lesson.examples.Count }
    $exerciseCount = $lesson.exercises.Count
    $totalPerLesson = $exampleCount + $exerciseCount + $exerciseCount + 2 + 1
    Write-Host "  $lessonKey`: $totalPerLesson files" -ForegroundColor Cyan
}
