// Simple menu configuration
const menuItems = [
    { name: 'Home', link: 'index.html' },
    { name: 'About', link: 'about.html' },
    { name: 'WebGL', link: 'webGL/index.html' },
    { name: 'SVG', link: 'SVG/index.html' },
    { name: 'Category 3', link: 'category-3/index.html' },
    { name: 'Category 4', link: 'category-4/index.html' }
];

// Function to determine if we're in a subdirectory
function isInSubdirectory() {
    const path = window.location.pathname;
    return path.includes('/category-') || path.includes('/webGL/') || path.includes('/SVG/');
}

// Function to create the header with navigation
function createHeader() {
    // Create header element
    const header = document.createElement('header');
    
    // Determine if we need to adjust paths for subdirectories
    const prefix = isInSubdirectory() ? '../' : '';
    
    // Add logo with link to home
    const logoLink = document.createElement('a');
    logoLink.href = prefix + 'index.html';
    
    const logo = document.createElement('img');
    logo.src = prefix + 'logo.png';
    logo.alt = "Blarmony Logo";
    
    logoLink.appendChild(logo);
    header.appendChild(logoLink);
    
    // Add hamburger menu
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<div></div><div></div><div></div>';
    hamburger.onclick = toggleMenu;
    header.appendChild(hamburger);
    
    // Create navigation
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.className = 'menu';
    
    // Add menu items with correct paths
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = prefix + item.link;
        a.textContent = item.name;
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    nav.appendChild(ul);
    header.appendChild(nav);
    
    // Insert at the beginning of the body
    document.body.insertBefore(header, document.body.firstChild);
}

// Function to toggle the menu visibility
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Initialize header when DOM is loaded
document.addEventListener('DOMContentLoaded', createHeader);
