<script>
document.getElementById("viewLotsButton").addEventListener("click", function() {
    // Находим элемент с id "lotsSection"
    const lotsSection = document.getElementById("lotsSection");
    
    // Прокручиваем страницу к этому элементу
    lotsSection.scrollIntoView({ behavior: 'smooth' });
});
</script>
    