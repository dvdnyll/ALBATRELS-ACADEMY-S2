function searchStudent() {
  const input = document
    .getElementById("studentInput")
    .value
    .trim()
    .toLowerCase();

  const img = document.getElementById("resultImg");
  const box = document.getElementById("resultBox");
  const download = document.getElementById("downloadLink");
  const loading = document.getElementById("loadingText");

  // Reset tampilan
  box.style.display = "none";
  loading.style.display = "block";

  if (!input) {
    loading.style.display = "none";
    return;
  }

  let file = "";

  if (input === "english") {
    file = "ENGLISH.png";
  } else if (input === "geo") {
    file = "GEO.png";
  } else if (input === "math") {
    file = "MATH.png";
  } else if (input === "music") {
    file = "MUSIC.png";
  } else {
    file = "error2.png";
  }

  // SIMULASI LOADING

setTimeout(() => {
  const path = "./assets/" + file;

  img.src = path;

  // JIKA ERROR → SEMBUNYIKAN DOWNLOAD
  if (file === "error2.png") {
    download.style.display = "none";
  } else {
    download.href = path;
    download.style.display = "inline-block";
  }

  loading.style.display = "none";
  box.style.display = "block";
}, 1200);
}

document
  .getElementById("studentInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchStudent();
    }
  });

box.style.opacity = "1";
box.style.transform = "translateY(0)";
