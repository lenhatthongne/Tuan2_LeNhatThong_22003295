// Câu 21
async function runCau21() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    console.log("Câu 21:", data);
}

runCau21();

// Câu 22
async function runCau22() {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
        "https://jsonplaceholder.typicode.com/todos/3"
    ];

    for (const url of urls) {
        const response = await fetch(url);
        const data = await response.json();

        console.log("Câu 22:", data);
    }
}

runCau22();

// Câu 23
type Todo = {
    id: number;
    title: string;
    completed: boolean;
};

async function getCompletedTodos(): Promise<Todo[]> {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
    );

    const todos = await response.json() as Todo[];

    return todos.filter((todo) => todo.completed);
}

async function runCau23() {
    const todos = await getCompletedTodos();
    console.log("Câu 23:", todos);
}

runCau23();

// Câu 24
async function postData() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "TypeScript",
                body: "Async Await",
                userId: 1
            })
        }
    );

    const data = await response.json();
    console.log("Câu 24:", data);
}

postData();
// Câu 25
function downloadFile(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Download completed");
        }, 3000);
    });
}

downloadFile().then((result) => {
    console.log("Câu 25:", result);
});

// Câu 26
function wait(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function runCau26() {
    console.log("Câu 26: Waiting...");

    await wait(5000);

    console.log("Câu 26: Waited 5 seconds");
}

runCau26();