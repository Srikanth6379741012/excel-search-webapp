let jsonData = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    jsonData = data;
  });

function searchData() {
  const query = document.getElementById('searchBox').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  const match = jsonData.find(row => {
    return Object.values(row).some(value =>
      String(value).toLowerCase().includes(query)
    );
  });

  if (match) {
    let output = `
      <h3>Match Found:</h3>
      <table border="1" cellpadding="10" style="border-collapse: collapse; font-size: 18px;">
        <thead>
          <tr><th>Field</th><th>Value</th></tr>
        </thead>
        <tbody>
    `;
    for (let key in match) {
      output += `<tr><th>${key}</th><td>${match[key]}</td></tr>`;
    }
    output += `
        </tbody>
      </table>
    `;
    resultDiv.innerHTML = output;
  } else {
    resultDiv.innerHTML = '<p style="color:red;"><strong>No matching heading found.</strong></p>';
  }
}

function clearResult() {
  document.getElementById("searchBox").value = "";
  document.getElementById("result").innerHTML = "";
}
