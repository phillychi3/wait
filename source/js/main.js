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
    if (block.parentNode && !block.parentNode.classList.contains('highlight')) {
        return;
    }
    const codectx = document.createElement('div');
    codectx.classList.add('code_table');
    // 新增codectx div把table包起來
    block.parentNode.insertBefore(codectx, block);
    codectx.appendChild(block);

});

const allth = document.querySelectorAll('table th');
allth.forEach((block) => {
    if (block.getAttribute('align') === 'center') {
        block.classList.add('thcenter');
    }else if (block.getAttribute('align') === 'right') {
        block.classList.add('thright');
    }
});

document.querySelectorAll('pre > code:not(.hljs)').forEach(function(codeElement) {
    var preElement = codeElement.parentElement;
    preElement.classList.add('indentedcode');
});

const copybutton = document.querySelectorAll('.copybutton');
copybutton.forEach((block) => {
    block.addEventListener('click', async() => {
        const code = block.parentNode.parentNode.parentNode.querySelector('code');
        const text = code.innerText;
        try {
            await navigator.clipboard.writeText(text);
            block.classList.add('copied');
            setTimeout(() => {
                block.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
});