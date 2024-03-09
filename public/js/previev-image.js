// jpreviev-image.js

function previewImage(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const preview = document.querySelector(".image-preview");
      preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById(
    "edit-field-tarif-foto-main-und-0-upload"
  );
  if (fileInput) {
    fileInput.addEventListener("change", previewImage);
  }
});
