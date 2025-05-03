# Project Plan: Blarmony CMS

## Overview
Blarmony is a simple content management system designed for blogging and general-purpose static websites. Each post is a standalone HTML page with its own HTML, CSS, and JavaScript. The platform will have a default `style.css` in the root directory to provide styling for posts that do not include their own CSS.

## Structure
- **Root Directory**
  - `index.html`: The front page containing a logo, navigation, and a list of the 10 most recent posts with descriptions.
  - `style.css`: Default styling for all posts.
  - `about.html`: An about page for the platform.
  - Category Subfolders: Each category will have its own subfolder containing posts and an `index.html` for the category.

- **Category Subfolders**
  - Start with 4 categories using placeholder names, e.g., `category-1`, `category-2`, `category-3`, `category-4`.
  - Each category subfolder will contain:
    - `index.html`: A page listing all posts in the category.
    - Individual post files (e.g., `post-1.html`, `post-2.html`).

## Features
- Standalone HTML pages for each post.
- Default styling provided by `style.css` if no specific CSS is included in a post.
- A front page that lists the 10 most recent posts.
- Category-specific pages listing posts within the category.
- An about page to provide information about the platform.

## Workflow
1. **Adding a New Post**
   - Create a new HTML file for the post in the appropriate category subfolder.
   - If needed, include specific CSS and JavaScript for the post.
   - Update the `index.html` in the root directory with the post description.
   - Update the relevant category's `index.html` to include the new post.

2. **Updating the Front Page**
   - Use an AI coding assistant to generate descriptions for new posts.
   - Manually update the front page to reflect the 10 most recent posts.

## Questions
- Are there any specific design elements or branding guidelines to follow?
- How should the navigation be structured on the `index.html` and category pages?
- Are there any specific functionalities or features you would like to include in the future?
