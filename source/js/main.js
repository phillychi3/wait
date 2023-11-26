const switch_theme = () =>{
    let datatheme = document.documentElement.getAttribute('data-theme');

    newtheme = datatheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newtheme);
    localStorage.setItem('theme', newtheme);
}

document.getElementById('dark_mode_switch').addEventListener('click', switch_theme);