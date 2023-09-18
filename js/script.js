const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');
const closeButton = document.getElementById('closeButton');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('show'); // Переключаем класс для отображения/скрытия меню
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('show'); // Скрываем меню при нажатии на крестик
});
