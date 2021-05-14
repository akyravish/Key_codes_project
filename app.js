// jshint esversion:6
const container = document.querySelector('.container');

window.addEventListener('keydown', (event) => {
	container.innerHTML = `
    <div id="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>
    <div id="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>
    <div id="key">
        ${event.code}
        <small>event.code</small>
    </div>
    `;
});
