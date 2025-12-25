# Batch file creator for Module 4 lessons

$lessonData = @{
    "4.4" = @{
        "name" = "lesson-4.4-hand-evaluation-part-2"
        "title" = "Hand Evaluation Part 2"
        "detail" = "high"
    }
    "4.5" = @{
        "name" = "lesson-4.5-game-state-management"
        "title" = "Game State Management"
        "detail" = "good"
    }
    "4.6" = @{
        "name" = "lesson-4.6-betting-system"
        "title" = "Betting System"
        "detail" = "high"
    }
    "4.7" = @{
        "name" = "lesson-4.7-ai-opponent-logic"
        "title" = "AI Opponent Logic"
        "detail" = "good"
    }
    "4.8" = @{
        "name" = "lesson-4.8-game-flow-dealing"
        "title" = "Game Flow & Dealing"
        "detail" = "solid"
    }
    "4.9" = @{
        "name" = "lesson-4.9-user-interface-controls"
        "title" = "User Interface & Controls"
        "detail" = "good"
    }
    "4.10" = @{
        "name" = "lesson-4.10-showdown-winner"
        "title" = "Showdown & Winner"
        "detail" = "good"
    }
    "4.11" = @{
        "name" = "lesson-4.11-settings-configuration"
        "title" = "Settings & Configuration"
        "detail" = "solid"
    }
    "4.12" = @{
        "name" = "lesson-4.12-polish-enhancement"
        "title" = "Polish & Enhancement"
        "detail" = "solid"
    }
    "4.13" = @{
        "name" = "lesson-4.13-final-project"
        "title" = "Final Project"
        "detail" = "high"
    }
}

Write-Output "Lesson data structure created with $($lessonData.Count) lessons"
