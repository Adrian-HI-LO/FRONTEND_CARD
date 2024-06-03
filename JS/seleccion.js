document.addEventListener("DOMContentLoaded", function () {
     const selectElement = document.getElementById("options");

     // Constantes para la opcion Uno
     const inputAGR = document.getElementById("inputAGR");
     const mostrarPreview = document.getElementById("mostrarPreview");
     const previewIMG = document.getElementById("previewIMG");

     // Constantes para la opcion Dos

     selectElement.addEventListener("change", function () {
         if (selectElement.value === "option1") {
             inputAGR.style.display = "block";
             mostrarPreview.style.display = "none";  // Ocultar la vista previa inicialmente
         } else {
             inputAGR.style.display = "none";
         }
     });

     document.getElementById('imgAGR').addEventListener('change', function (event) {
         const file = event.target.files[0];
         if (file) {
             const reader = new FileReader();
             reader.onload = function (e) {
                 previewIMG.src = e.target.result;
                 mostrarPreview.style.display = "block";
             }
             reader.readAsDataURL(file);
         } else {
             mostrarPreview.style.display = "none";  // Ocultar si no hay imagen seleccionada
         }
     });
 });