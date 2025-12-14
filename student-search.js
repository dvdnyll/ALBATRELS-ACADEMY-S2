function searchStudent() {
  const input = document.getElementById("studentInput").value.toLowerCase();
  const img = document.getElementById("resultImg");
  const box = document.getElementById("resultBox");
  const download = document.getElementById("downloadLink");

  let file = "";

  if (input === "english") {
    file = "ENGLISH.png";
  } else if (input === "geo") {
    file = "GEO.png";
  } else if (input === "math") {
    file = "MATH.png";
  } else if (input === "music") {
    file = "MUSIC.png";
  } else if (input.length > 0) {
    file = "error.png";
  } else {
    box.style.display = "none";
    return;
  }

  const path = "./assets/" + file;

  img.src = path;
  download.href = path;
  box.style.display = "block";
}

box.style.opacity = "1";

box.style.transform = "translateY(0)";
