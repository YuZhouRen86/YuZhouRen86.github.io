document.addEventListener('DOMContentLoaded', () => {
    const footer = document.createElement('div');
    footer.className = 'footer';
    
    const copyright = document.createElement('p');
    copyright.id = '版权声明';
    copyright.innerText = `版权所有©　2021～${new Date().getFullYear()}　宇宙人`;

    footer.appendChild(copyright);
    document.body.appendChild(footer);
});
