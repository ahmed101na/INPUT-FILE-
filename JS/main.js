// Recall items
let fileUpload = document.querySelector("#file");
let labelFile = document.querySelector(".label-file");

// Add event
fileUpload.addEventListener("change", function (e) {
  let file = e.target.files;
  labelFile.textContent = file[0].name;
});
