document.addEventListener("DOMContentLoaded", function () {
  // Находим все элементы формы с классом "image-widget"
  const imageWidgets = document.querySelectorAll(".image-widget");

  // Создаем объект, который будет содержать информацию о каждой картинке
  const imagesData = [];

  // Проходимся по каждому элементу формы
  imageWidgets.forEach(function (widget) {
    // Находим input типа file внутри каждого виджета
    const fileInput = widget.querySelector('input[type="file"]');
    const fileName = fileInput.name; // Имя поля файла

    // Если файл выбран, добавляем его к объекту imagesData
    if (fileInput.files.length > 0) {
      // Получаем файл(ы)
      const files = fileInput.files;

      // Проходимся по каждому файлу и добавляем информацию о нем в imagesData
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imageData = {
          fileName: fileName, // Имя поля файла
          main: true, // Указываем, что это главное изображение
          file: file, // Сам файл
        };
        imagesData.push(imageData);
      }
    }
  });

  // Отправляем объект imagesData на сервер с помощью fetch
  fetch("/your/server/endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(imagesData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка при отправке данных на сервер");
      }
      return response.json(); // Если сервер отвечает JSON, можно использовать response.json()
    })
    .then((data) => {
      // Обработка успешного ответа от сервера
      console.log(data);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
});
