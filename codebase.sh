#!/bin/bash

# Create code.txt with project structure and file contents
(
  echo "# Project Structure"
  echo ""
  tree -L 4 -I "node_modules|.next|out|build|dist|.git|.cache|__pycache__|*.log|coverage|.vercel|.turbo|.swc" --prune
  echo ""
  echo "# File Contents"
  echo ""
  
  # Components
  echo "## components/Header.js"
  echo '```javascript'
  cat components/Header.js
  echo '```'
  echo ""
  
  # Layout components
  echo "## components/layout/Card.js"
  echo '```javascript'
  cat components/layout/Card.js
  echo '```'
  echo ""
  
  echo "## components/layout/Footer.js"
  echo '```javascript'
  cat components/layout/Footer.js
  echo '```'
  echo ""
  
  echo "## components/layout/GradientBackground.js"
  echo '```javascript'
  cat components/layout/GradientBackground.js
  echo '```'
  echo ""
  
  echo "## components/layout/Navigation.js"
  echo '```javascript'
  cat components/layout/Navigation.js
  echo '```'
  echo ""
  
  echo "## components/layout/RightNavigation.js"
  echo '```javascript'
  cat components/layout/RightNavigation.js
  echo '```'
  echo ""
  
  echo "## components/layout/Section.js"
  echo '```javascript'
  cat components/layout/Section.js
  echo '```'
  echo ""
  
  # UI components
  echo "## components/ui/Button.js"
  echo '```javascript'
  cat components/ui/Button.js
  echo '```'
  echo ""
  
  echo "## components/ui/FlipCard.js"
  echo '```javascript'
  cat components/ui/FlipCard.js
  echo '```'
  echo ""
  
  echo "## components/ui/IconButton.js"
  echo '```javascript'
  cat components/ui/IconButton.js
  echo '```'
  echo ""
  
  echo "## components/ui/Icons.js"
  echo '```javascript'
  cat components/ui/Icons.js
  echo '```'
  echo ""
  
  echo "## components/ui/ProjectCard.js"
  echo '```javascript'
  cat components/ui/ProjectCard.js
  echo '```'
  echo ""
  
  # Utils
  echo "## components/utils/ScrollProvider.js"
  echo '```javascript'
  cat components/utils/ScrollProvider.js
  echo '```'
  echo ""
  
  # Config files
  echo "## jsconfig.json"
  echo '```json'
  cat jsconfig.json
  echo '```'
  echo ""
  
  echo "## next.config.js"
  echo '```javascript'
  cat next.config.js
  echo '```'
  echo ""
  
  echo "## next.config.mjs"
  echo '```javascript'
  cat next.config.mjs
  echo '```'
  echo ""
  
  echo "## package.json"
  echo '```json'
  cat package.json
  echo '```'
  echo ""
  
  echo "## postcss.config.js"
  echo '```javascript'
  cat postcss.config.js
  echo '```'
  echo ""
  
  echo "## tailwind.config.js"
  echo '```javascript'
  cat tailwind.config.js
  echo '```'
  echo ""
  
  # Pages
  echo "## pages/api/hello.js"
  echo '```javascript'
  cat pages/api/hello.js
  echo '```'
  echo ""
  
  echo "## pages/_app.js"
  echo '```javascript'
  cat pages/_app.js
  echo '```'
  echo ""
  
  echo "## pages/_document.js"
  echo '```javascript'
  cat pages/_document.js
  echo '```'
  echo ""
  
  echo "## pages/index.js"
  echo '```javascript'
  cat pages/index.js
  echo '```'
  echo ""
  
  echo "## pages/cv.js"
  echo '```javascript'
  cat pages/cv.js
  echo '```'
  echo ""
  
  # SVG files
  echo "## public/icons/github.svg"
  echo '```svg'
  cat public/icons/github.svg
  echo '```'
  echo ""
  
  echo "## public/icons/linkedin.svg"
  echo '```svg'
  cat public/icons/linkedin.svg
  echo '```'
  echo ""
  
  echo "## public/next.svg"
  echo '```svg'
  cat public/next.svg
  echo '```'
  echo ""
  
  echo "## public/vercel.svg"
  echo '```svg'
  cat public/vercel.svg
  echo '```'
  echo ""
  
  # Styles
  echo "## styles/globals.css"
  echo '```css'
  cat styles/globals.css
  echo '```'
  echo ""
  
  echo "## styles/Home.module.css"
  echo '```css'
  cat styles/Home.module.css
  echo '```'
  echo ""
  
  # README
  echo "## README.md"
  echo '```markdown'
  cat README.md
  echo '```'
  echo ""
  
  # Binary files note
  echo "## Binary Files"
  echo "The following files are binary and not included in the text output:"
  echo "- public/favicon.ico"
  echo "- public/profile.jpg"
  
) > code.txt

echo "Successfully created code.txt with file structure and contents."