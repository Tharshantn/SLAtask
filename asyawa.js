// Function to request a file using async/await
async function requestFile(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Usage example
const url = "http://localhost/data.txt";

async function main() {
  try {
    const fileContents = await requestFile(url);
    console.log("File contents:", fileContents);
    document.getElementById("output").innerText = fileContents;
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
