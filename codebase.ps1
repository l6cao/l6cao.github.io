#!/usr/bin/env pwsh

# Create code.txt with project structure and file contents
$output = @"
# Project Structure

"@

# Function to get directory tree with limited depth
function Get-LimitedTree {
    param (
        [string]$Path = ".",
        [int]$Depth = 4,
        [string[]]$Exclude = @("node_modules", ".next", "out", "build", "dist", ".git", ".cache", "__pycache__", "*.log", "coverage", ".vercel", ".turbo", ".swc")
    )

    # Start with the root directory
    $indent = ""
    $rootName = Split-Path -Leaf (Resolve-Path $Path)
    $result = "."

    # Function for recursive traversal with controlled depth
    function Traverse-Directory {
        param (
            [string]$CurrentPath,
            [string]$CurrentIndent,
            [int]$CurrentDepth
        )
        
        if ($CurrentDepth -gt $Depth) {
            return
        }

        # Get directories
        $dirs = Get-ChildItem -Path $CurrentPath -Directory | Where-Object {
            $skipDir = $false
            foreach ($pattern in $Exclude) {
                if ($_.Name -like $pattern) {
                    $skipDir = $true
                    break
                }
            }
            -not $skipDir
        } | Sort-Object Name

        # Get files
        $files = Get-ChildItem -Path $CurrentPath -File | Where-Object {
            $skipFile = $false
            foreach ($pattern in $Exclude) {
                if ($_.Name -like $pattern) {
                    $skipFile = $true
                    break
                }
            }
            -not $skipFile
        } | Sort-Object Name

        # Process directories
        $lastDirIndex = $dirs.Count - 1
        for ($i = 0; $i -lt $dirs.Count; $i++) {
            $dir = $dirs[$i]
            $isLast = ($i -eq $lastDirIndex) -and ($files.Count -eq 0)
            
            if ($isLast) {
                $result += "`n$($CurrentIndent)└───$($dir.Name)"
                Traverse-Directory -CurrentPath $dir.FullName -CurrentIndent "$CurrentIndent    " -CurrentDepth ($CurrentDepth + 1)
            } else {
                $result += "`n$($CurrentIndent)├───$($dir.Name)"
                Traverse-Directory -CurrentPath $dir.FullName -CurrentIndent "$CurrentIndent│   " -CurrentDepth ($CurrentDepth + 1)
            }
        }

        # Process files
        $lastFileIndex = $files.Count - 1
        for ($i = 0; $i -lt $files.Count; $i++) {
            $file = $files[$i]
            $isLast = ($i -eq $lastFileIndex)
            
            if ($isLast) {
                $result += "`n$($CurrentIndent)└───$($file.Name)"
            } else {
                $result += "`n$($CurrentIndent)├───$($file.Name)"
            }
        }
    }

    Traverse-Directory -CurrentPath $Path -CurrentIndent "" -CurrentDepth 1
    return $result
}

# Get directory structure limited to 4 levels
$treeOutput = Get-LimitedTree -Path "." -Depth 4
$output += $treeOutput
$output += @"

# File Contents

"@

# Components
$output += @"
## components/Header.js
```javascript
$(Get-Content -Path "components/Header.js" -Raw)
```

"@

# Layout components
$output += @"
## components/layout/Card.js
```javascript
$(Get-Content -Path "components/layout/Card.js" -Raw)
```

## components/layout/Footer.js
```javascript
$(Get-Content -Path "components/layout/Footer.js" -Raw)
```

## components/layout/GradientBackground.js
```javascript
$(Get-Content -Path "components/layout/GradientBackground.js" -Raw)
```

## components/layout/Navigation.js
```javascript
$(Get-Content -Path "components/layout/Navigation.js" -Raw)
```

## components/layout/RightNavigation.js
```javascript
$(Get-Content -Path "components/layout/RightNavigation.js" -Raw)
```

## components/layout/Section.js
```javascript
$(Get-Content -Path "components/layout/Section.js" -Raw)
```

"@

# UI components
$output += @"
## components/ui/Button.js
```javascript
$(Get-Content -Path "components/ui/Button.js" -Raw)
```

## components/ui/FlipCard.js
```javascript
$(Get-Content -Path "components/ui/FlipCard.js" -Raw)
```

## components/ui/IconButton.js
```javascript
$(Get-Content -Path "components/ui/IconButton.js" -Raw)
```

## components/ui/Icons.js
```javascript
$(Get-Content -Path "components/ui/Icons.js" -Raw)
```

## components/ui/ProjectCard.js
```javascript
$(Get-Content -Path "components/ui/ProjectCard.js" -Raw)
```

"@

# Utils
$output += @"
## components/utils/ScrollProvider.js
```javascript
$(Get-Content -Path "components/utils/ScrollProvider.js" -Raw)
```

"@

# Config files
$output += @"
## jsconfig.json
```json
$(Get-Content -Path "jsconfig.json" -Raw)
```

## next.config.js
```javascript
$(Get-Content -Path "next.config.js" -Raw)
```

## next.config.mjs
```javascript
$(Get-Content -Path "next.config.mjs" -Raw)
```

## package.json
```json
$(Get-Content -Path "package.json" -Raw)
```

## postcss.config.js
```javascript
$(Get-Content -Path "postcss.config.js" -Raw)
```

## tailwind.config.js
```javascript
$(Get-Content -Path "tailwind.config.js" -Raw)
```

"@

# Pages
$output += @"
## pages/api/hello.js
```javascript
$(Get-Content -Path "pages/api/hello.js" -Raw)
```

## pages/_app.js
```javascript
$(Get-Content -Path "pages/_app.js" -Raw)
```

## pages/_document.js
```javascript
$(Get-Content -Path "pages/_document.js" -Raw)
```

## pages/index.js
```javascript
$(Get-Content -Path "pages/index.js" -Raw)
```

## pages/cv.js
```javascript
$(Get-Content -Path "pages/cv.js" -Raw)
```

"@

# SVG files
$output += @"
## public/icons/github.svg
```svg
$(Get-Content -Path "public/icons/github.svg" -Raw)
```

## public/icons/linkedin.svg
```svg
$(Get-Content -Path "public/icons/linkedin.svg" -Raw)
```

## public/next.svg
```svg
$(Get-Content -Path "public/next.svg" -Raw)
```

## public/vercel.svg
```svg
$(Get-Content -Path "public/vercel.svg" -Raw)
```

"@

# Styles
$output += @"
## styles/globals.css
```css
$(Get-Content -Path "styles/globals.css" -Raw)
```

## styles/Home.module.css
```css
$(Get-Content -Path "styles/Home.module.css" -Raw)
```

"@

# README
$output += @"
## README.md
```markdown
$(Get-Content -Path "README.md" -Raw)
```

"@

# Binary files note
$output += @"
## Binary Files
The following files are binary and not included in the text output:
- public/favicon.ico
- public/profile.jpg
"@

# Write the output to code.txt
$output | Out-File -FilePath "code.txt" -Encoding utf8

Write-Host "Successfully created code.txt with file structure and contents."
