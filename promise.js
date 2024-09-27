function requestFile(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.text();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const url = "http://localhost/data.txt";
requestFile(url)
  .then((data) => {
    document.getElementById("output").innerText = data;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
