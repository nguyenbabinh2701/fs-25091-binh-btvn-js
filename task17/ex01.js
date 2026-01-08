
function toggleMode() {
    const body = document.body;
    const currentMode = body.classList.contains('light-mode') ? 'light' : 'dark';
    const newMode = currentMode === 'light' ? 'dark' : 'light';

    body.classList.remove(currentMode + '-mode');
    body.classList.add(newMode + '-mode');

    localStorage.setItem('mode', newMode);
}


function loadMode() {
    const savedMode = localStorage.getItem('mode') || 'light';
    const body = document.body;

    body.classList.add(savedMode + '-mode');
}

window.addEventListener('load', loadMode);
