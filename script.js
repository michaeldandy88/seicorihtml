document.getElementById('search').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.location.href = 'search.html?q=' + this.value;
    }
});
function lihatMenu(id) {
    var menu = document.getElementById('menu-' + id);
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}