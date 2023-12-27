const switch_theme = () =>{
    let datatheme = document.documentElement.getAttribute('data-theme');

    newtheme = datatheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newtheme);
    localStorage.setItem('theme', newtheme);
}

document.getElementById('dark_mode_switch').addEventListener('click', switch_theme);

const navbar = document.querySelector('.header');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('header-black');
        } else {
            navbar.classList.remove('header-black');
        }
    });
}


const figureHighlight = document.querySelectorAll('figure.highlight');
figureHighlight.forEach((block) => {
    const code_top = document.createElement('div');
    const lang = block.getAttribute('class').split(' ')[1]

    code_top.innerHTML = `
        <div class="code_top">
            <div class="code_langname">${lang}</div>
            <div class="copybutton">
                <i class="fa fa-copy"></i>
            </div>
        </div>
            `;
    block.insertBefore(code_top, block.firstChild)
});


const tbody = document.querySelectorAll('table');
tbody.forEach((block) => {
    const codectx = document.createElement('div');
    codectx.classList.add('code_table');
    // 新增codectx div把table包起來
    block.parentNode.insertBefore(codectx, block);
    codectx.appendChild(block);

});