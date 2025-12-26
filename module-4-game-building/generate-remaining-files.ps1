# Module 4 Batch File Generator
# This script creates all remaining lesson files with appropriate content

$basePath = "C:\Users\chort\OneDrive\Projects\piper_christmas_2025\final-draft\module-4-game-building"

# Define all lessons and their content themes
$lessons = @(
    @{
        Number = "4.4"
        Folder = "lesson-4.4-hand-evaluation-part-2"
        Title = "Hand Evaluation Part 2"
        Topic = "Flush, Straight, Full House, Straight Flush, Royal Flush"
    },
    @{
        Number = "4.5"
        Folder = "lesson-4.5-game-state-management"
        Title = "Game State Management"
        Topic = "Tracking players, chips, current round, dealer position"
    },
    @{
        Number = "4.6"
        Folder = "lesson-4.6-betting-system"
        Title = "Betting System"
        Topic = "Bets, raises, calls, folds, pot management"
    },
    @{
        Number = "4.7"
        Folder = "lesson-4.7-ai-opponent-logic"
        Title = "AI Opponent Logic"
        Topic = "Computer player decisions, betting strategies"
    },
    @{
        Number = "4.8"
        Folder = "lesson-4.8-game-flow-dealing"
        Title = "Game Flow & Dealing"
        Topic = "Dealing cards, betting rounds, game phases"
    },
    @{
        Number = "4.9"
        Folder = "lesson-4.9-user-interface-controls"
        Title = "User Interface & Controls"
        Topic = "Buttons, actions, displaying game state"
    },
    @{
        Number = "4.10"
        Folder = "lesson-4.10-showdown-winner"
        Title = "Showdown & Winner"
        Topic = "Comparing hands, declaring winners, awarding pot"
    },
    @{
        Number = "4.11"
        Folder = "lesson-4.11-settings-configuration"
        Title = "Settings & Configuration"
        Topic = "Starting chips, blind amounts, number of players"
    },
    @{
        Number = "4.12"
        Folder = "lesson-4.12-polish-enhancement"
        Title = "Polish & Enhancement"
        Topic = "Sound effects, animations, game stats"
    },
    @{
        Number = "4.13"
        Folder = "lesson-4.13-final-project"
        Title = "Final Project"
        Topic = "Complete Texas Hold'em poker game"
    }
)

Write-Output "=== MODULE 4 FILE GENERATOR ===" 
Write-Output ""
Write-Output "This script will create files for lessons 4.4-4.13"
Write-Output "Total lessons to process: $($lessons.Count)"
Write-Output ""

$totalFilesCreated = 0

foreach ($lesson in $lessons) {
    $lessonPath = Join-Path $basePath $lesson.Folder
    Write-Output "Processing: $($lesson.Title)..."
    
    # Ensure directories exist
    $dirs = @("examples", "practice", "answer-key", "resources", "student-workspace")
    foreach ($dir in $dirs) {
        $dirPath = Join-Path $lessonPath $dir
        if (-not (Test-Path $dirPath)) {
            New-Item -Path $dirPath -ItemType Directory -Force | Out-Null
        }
    }
    
    # Count files that need to be created
    $existingFiles = (Get-ChildItem -Path $lessonPath -Recurse -File | Measure-Object).Count
    $filesNeeded = 14 - $existingFiles
    
    Write-Output "  Existing files: $existingFiles"
    Write-Output "  Files needed: $filesNeeded"
    
    $totalFilesCreated += $filesNeeded
}

Write-Output ""
Write-Output "=== SUMMARY ===" 
Write-Output "Total files to create: $totalFilesCreated"
Write-Output ""
Write-Output "Note: This script creates the directory structure."
Write-Output "File content creation should be done through the AI assistant"
Write-Output "for quality and educational value."

