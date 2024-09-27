function requestFile(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(null, xhr.responseText);
    } else {
      callback(xhr.status, null);
    }
  };
  xhr.onerror = function () {
    callback(xhr.status, null);
  };
  xhr.open("GET", url, true);
  xhr.send();
}

const url = "(link unavailable)";
requestFile(url, function (err, data) {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("File contents:", data);
    document.getElementById("output").innerText = data;
  }
});
