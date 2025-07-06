//修正顶栏样式
var body = document.querySelector('body');
var navbar = document.querySelector('.顶栏包装器');
var navbarplaceholder = document.createElement("div");

navbar.style.position = 'fixed';
navbarplaceholder.style.backgroundColor = 'transparent';
navbarplaceholder.style.height = navbar.clientHeight + 'px';

body.insertBefore(navbarplaceholder, navbar);

function page_scroll_callback () {
    var pageYOffset;
    if (window.pageYOffset !== undefined) {
        pageYOffset = window.pageYOffset;
    } else {
        pageYOffset = document.documentElement.scrollTop;
    }
    if (pageYOffset > 0) {
        navbar.style.padding = '5px 0';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    } else {
        navbar.style.padding = '18px 0';
        navbar.style.backgroundColor = '#FFFFFF';
    }
}
if ('addEventListener' in window) {
    window.addEventListener('scroll', page_scroll_callback);
} else {
    window.attachEvent('onmousewheel', page_scroll_callback);
}
if ('ResizeObserver' in window) {
    var resizeObserver = new ResizeObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            navbarplaceholder.style.height = navbar.clientHeight + 'px';
        }
    });
    resizeObserver.observe(navbar);
}

function navbar_click_callback() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
if ('addEventListener' in navbar) {
    navbar.addEventListener('click', navbar_click_callback);
} else {
    navbar.attachEvent('onclick', navbar_click_callback);
}

//显示页脚
var footer = document.createElement('div');
footer.className = 'footer';

var copyright = document.createElement('p');
copyright.id = '版权声明';
copyright.innerText = '版权所有©　2021～' + new Date().getFullYear() + '　宇宙人';

var links = document.createElement('p');
var mainpagelink = document.createElement('a');
mainpagelink.id = '主页链接';
mainpagelink.innerText = '主页';
mainpagelink.href = 'https://yuzhouren86.github.io';
var donationpagelink = document.createElement('a');
donationpagelink.id = '捐赠链接';
donationpagelink.innerText = '捐赠';
donationpagelink.href = 'https://yuzhouren86.github.io/juanzeng';

var shuxian = document.createElement('span');
shuxian.className = '竖线';

links.appendChild(mainpagelink);
links.appendChild(shuxian.cloneNode(true));
links.appendChild(donationpagelink);
footer.appendChild(links);
footer.appendChild(copyright);
document.body.appendChild(footer);
