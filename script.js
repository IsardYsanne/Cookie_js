
const cookElement = document.querySelector('.cookie-block');
const button = document.querySelector('.ok');

button.addEventListener('click', () => {
    cookElement.style.display = 'none'; // когда нажмем ок, скрываем окно
});

let cookie = () => {
    if (!Cookies.get('hide-cookie')) { //если куки не существует, то показываем блок "мы используем кукисы"
        cookElement.style.display = 'block';
    }

    Cookies.set('hide-cookie', 'true', { // устанавливаем кукис
        expires: 1 // хранится 1 день
    });
}

cookie();