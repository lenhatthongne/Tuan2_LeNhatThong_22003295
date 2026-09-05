// Câu 21
async function runCau21() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    console.log("Câu 21:", data);
}

runCau21();