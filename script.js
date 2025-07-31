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
function clearResult() {
  document.getElementById("searchInput").value = "";
  document.getElementById("result").innerHTML = "";
}

  const match = jsonData.find(row => {
    return Object.values(row).some(value =>
      String(value).toLowerCase().includes(query)
    );
  });

  if (match) {
    let output = '<h3>Match Found:</h3><ul>';
    for (let key in match) {
      output += `<li><strong>${key}:</strong> ${match[key]}</li>`;
    }
    output += '</ul>';
    resultDiv.innerHTML = output;
  } else {
    resultDiv.innerHTML = 'No matching heading found.';
  }
}
