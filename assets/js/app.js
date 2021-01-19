$(function () {
    $('body').scrollspy({
        target: '#navbar'
    });


});
window.onload = function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}