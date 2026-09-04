const titrePrincipal = document.querySelector('h1.title');

titrePrincipal.addEventListener('click', function() {
    titrePrincipal.textContent = "Tu as cliqué sur le titre !";
});