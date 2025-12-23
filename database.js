const SHEET_ID = "192jU8uX6F6kMetKcFzCnu7fvUx33HcMlbRc6sAhqFTQ";
const SHEET_NAME = "Sheet1"; // ganti jika nama sheet berbeda

async function searchData() {
  const code = document.getElementById("lockerCode").value.trim();
  const resultDiv = document.getElementById("result");

  if (!code) {
    resultDiv.innerHTML = "<p>Please enter locker code</p>";
    return;
  }

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_NAME}`;

  const res = await fetch(url);
  const text = await res.text();

  const json = JSON.parse(text.substr(47).slice(0, -2));
  const rows = json.table.rows;

  let found = false;

  rows.forEach(row => {
    const lockerCode = row.c[2]?.v; // Kolom C
    const name = row.c[3]?.v;       // Kolom D

    if (lockerCode && lockerCode.toString() === code) {
      found = true;
      const downloadLink = `https://drive.google.com/uc?export=download&id=${getFileId(code)}`;

      resultDiv.innerHTML = `
        <h2>WELCOME ${name}</h2>
        <a href="https://drive.google.com/drive/folders/11izxiFk8OkspJPopduzoD9gFudvg08Ku" target="_blank">
          <button>Download Certificate</button>
        </a>
      `;
    }
  });

  if (!found) {
    resultDiv.innerHTML = "<p>Data not found</p>";
  }
}
