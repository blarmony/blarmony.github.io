# Blarmony

A modern blog with WebGL-powered interactive backgrounds and elegant styling.

## Overview

Blarmony is a blog platform that combines elegant typography with interactive WebGL backgrounds to create a unique and engaging user experience. The site features a responsive design that works well on all devices, with special optimizations for mobile performance.

## Features

- **WebGL Backgrounds**: Interactive, shader-based backgrounds using Three.js
- **Responsive Layout**: Content adapts to different screen sizes
- **Elegant Code Styling**: Syntax highlighting for code snippets
- **Consistent Design**: Unified layout system with content containers
- **Mobile Optimized**: Performance considerations for all devices

## Project Structure

```
blarmony/
├── index.html              # Main landing page
├── about.html              # About page
├── style.css               # Main stylesheet
├── menu.js                 # Navigation menu script
├── README.md               # This file
├── webGL/                  # WebGL category
│   ├── index.html          # WebGL category index
│   ├── three-js-texture-01.html    # Three.js texture tutorial
│   └── using-webgl-backgrounds.html # WebGL backgrounds guide
├── category-2/             # Category 2
│   └── index.html          # Category 2 index
├── category-3/             # Category 3
│   └── index.html          # Category 3 index
└── category-4/             # Category 4
    └── index.html          # Category 4 index
```

## Key Components

### WebGL Background System

The WebGL background system uses Three.js and custom shaders to create interactive backgrounds. The implementation includes:

1. A container element with `id="container"` for the WebGL canvas
2. The `webgl-background` class on the body element
3. Custom shaders for visual effects
4. Performance optimizations for mobile devices

### CSS Architecture

The CSS is organized with these key components:

1. **Base Styles**: Typography, colors, and basic layout
2. **Header & Navigation**: Styling for the site header and menu
3. **Content Container**: Consistent content layout across all pages
4. **WebGL-specific Styles**: Special handling for pages with WebGL backgrounds
5. **Code Styling**: Syntax highlighting for code snippets

## Creating New Pages

### Standard Page

1. Create a new HTML file
2. Link to the stylesheet: `<link rel="stylesheet" href="path/to/style.css">`
3. Add the content within a `content-container` div
4. Include the menu script: `<script src="path/to/menu.js"></script>`

### WebGL Background Page

1. Create a new HTML file using the template from `webGL/using-webgl-backgrounds.html`
2. Add the `webgl-background` class to the body tag
3. Include the container div with `id="container"`
4. Add your content within the `content-container` div
5. Customize the shader code as needed
6. No need to modify style.css - all necessary styling is already included

## Performance Considerations

For WebGL backgrounds, consider these optimizations:

- Pre-render gradient textures instead of per-pixel calculations
- Use texture mapping and transformations for better performance
- Implement adaptive complexity based on device capabilities
- Consider using Canvas 2D + CSS animations for simpler effects
- Render to lower resolution textures on mobile devices

## Browser Compatibility

The site is designed to work on modern browsers including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

For older browsers, the site will fall back to standard styling without WebGL effects.

## Credits

- Three.js for WebGL rendering
- Prism.js for syntax highlighting
