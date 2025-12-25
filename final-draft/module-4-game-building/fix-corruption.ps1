# Comprehensive corruption fix script for Module 4 lessons 4.6-4.13

$basePath = "C:\Users\chort\OneDrive\Projects\piper_christmas_2025\final-draft\module-4-game-building"

# Define emoji replacements
$emojiMap = @{
    'ðŸŽ¯' = '🎯'
    'âœ' = '✅'
    'ðŸ'¨â€ðŸ'©â€ðŸ'§â€ðŸ'¦' = '👨‍👩‍👧‍👦'
    'ðŸ"‹' = '📋'
    'ðŸ'¡' = '💡'
    'ðŸš€' = '🚀'
    'ðŸŽ"' = '🎓'
    'ðŸ"' = '📝'
    'â±ï¸' = '⏱️'
}

# Define exercise name mappings for each lesson
$exerciseNames = @{
    'lesson-4.6-betting-system' = @(
        @{old = ' implement check call.Value.ToUpper() mplement implement check call.Value.ToUpper() heck implement check call.Value.ToUpper() all'; new = 'Implement Check, Call & Fold'}
        @{old = ' add raise logic.Value.ToUpper() dd add raise logic.Value.ToUpper() aise add raise logic.Value.ToUpper() ogic'; new = 'Add Raise Logic'}
        @{old = ' handle all ins.Value.ToUpper() andle handle all ins.Value.ToUpper() ll handle all ins.Value.ToUpper() ns'; new = 'Handle All-Ins'}
    )
    'lesson-4.7-ai-opponent-logic' = @(
        @{old = ' basic ai.Value.ToUpper() asic basic ai.Value.ToUpper() i'; new = 'Basic AI'}
        @{old = ' probability ai.Value.ToUpper() robability probability ai.Value.ToUpper() i'; new = 'Probability AI'}
        @{old = ' personality ai.Value.ToUpper() ersonality personality ai.Value.ToUpper() i'; new = 'Personality AI'}
    )
    'lesson-4.8-game-flow-dealing' = @(
        @{old = ' basic dealing.Value.ToUpper() asic basic dealing.Value.ToUpper() ealing'; new = 'Basic Dealing'}
        @{old = ' betting rounds.Value.ToUpper() etting betting rounds.Value.ToUpper() ounds'; new = 'Betting Rounds'}
        @{old = ' complete hand flow.Value.ToUpper() omplete complete hand flow.Value.ToUpper() and complete hand flow.Value.ToUpper() low'; new = 'Complete Hand Flow'}
    )
    'lesson-4.9-user-interface-controls' = @(
        @{old = ' create table ui.Value.ToUpper() reate create table ui.Value.ToUpper() able create table ui.Value.ToUpper() i'; new = 'Create Table UI'}
        @{old = ' build controls.Value.ToUpper() uild build controls.Value.ToUpper() ontrols'; new = 'Build Controls'}
        @{old = ' add animations.Value.ToUpper() dd add animations.Value.ToUpper() nimations'; new = 'Add Animations'}
    )
    'lesson-4.10-showdown-winner' = @(
        @{old = ' implement showdown.Value.ToUpper() mplement implement showdown.Value.ToUpper() howdown'; new = 'Implement Showdown'}
        @{old = ' determine winner.Value.ToUpper() etermine determine winner.Value.ToUpper() inner'; new = 'Determine Winner'}
        @{old = ' award pot.Value.ToUpper() ward award pot.Value.ToUpper() ot'; new = 'Award Pot'}
    )
    'lesson-4.11-settings-configuration' = @(
        @{old = ' create settings.Value.ToUpper() reate create settings.Value.ToUpper() ettings'; new = 'Create Settings'}
        @{old = ' build ui.Value.ToUpper() uild build ui.Value.ToUpper() i'; new = 'Build UI'}
        @{old = ' persistence.Value.ToUpper() ersistence'; new = 'Persistence'}
    )
    'lesson-4.12-polish-enhancement' = @(
        @{old = ' add sounds.Value.ToUpper() dd add sounds.Value.ToUpper() ounds'; new = 'Add Sounds'}
        @{old = ' make responsive.Value.ToUpper() ake make responsive.Value.ToUpper() esponsive'; new = 'Make Responsive'}
        @{old = ' optimize performance.Value.ToUpper() ptimize optimize performance.Value.ToUpper() erformance'; new = 'Optimize Performance'}
    )
}

$totalFilesFixed = 0
$totalReplacements = 0
$lessonSummary = @()

foreach ($lessonKey in $exerciseNames.Keys) {
    $lessonPath = Join-Path $basePath $lessonKey
    
    if (!(Test-Path $lessonPath)) {
        Write-Host "Skipping $lessonKey - not found"
        continue
    }
    
    Write-Host "`nProcessing $lessonKey..." -ForegroundColor Cyan
    
    $filesFixed = 0
    $replacementsMade = 0
    
    # Get all .md and .html files
    $files = Get-ChildItem -Path $lessonPath -Recurse -Include *.md,*.html
    
    foreach ($file in $files) {
        $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
        $originalContent = $content
        $modified = $false
        
        # Fix emojis
        foreach ($emoji in $emojiMap.Keys) {
            $escapedOld = [regex]::Escape($emoji)
            if ($content -match $escapedOld) {
                $content = $content -replace $escapedOld, $emojiMap[$emoji]
                $replacementsMade++
                $modified = $true
            }
        }
        
        # Fix exercise names for this lesson
        foreach ($mapping in $exerciseNames[$lessonKey]) {
            $escapedOld = [regex]::Escape($mapping.old)
            if ($content -match $escapedOld) {
                $content = $content -replace $escapedOld, $mapping.new
                $replacementsMade++
                $modified = $true
            }
        }
        
        # Save if modified
        if ($modified) {
            Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
            $filesFixed++
        }
    }
    
    $totalFilesFixed += $filesFixed
    $totalReplacements += $replacementsMade
    
    $lessonSummary += [PSCustomObject]@{
        Lesson = $lessonKey
        FilesFixed = $filesFixed
        Replacements = $replacementsMade
    }
    
    Write-Host "  Files fixed: $filesFixed, Replacements: $replacementsMade" -ForegroundColor Green
}

Write-Host "`n=== SUMMARY ===" -ForegroundColor Yellow
Write-Host "Total files fixed: $totalFilesFixed" -ForegroundColor Green
Write-Host "Total replacements: $totalReplacements" -ForegroundColor Green
Write-Host "`nLesson breakdown:" -ForegroundColor Yellow
$lessonSummary | Format-Table -AutoSize

Write-Host "`nCorruption fix complete!" -ForegroundColor Cyan
