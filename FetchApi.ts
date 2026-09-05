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

// Câu 27
async function fetchWithRetry(
    url: string,
    retries: number
): Promise<any> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Request failed");
        }

        return await response.json();
    } catch (error) {
        if (retries > 0) {
            console.log("Câu 27: Retry...");

            return fetchWithRetry(url, retries - 1);
        }

        throw error;
    }
}

async function runCau27() {
    try {
        const data = await fetchWithRetry(
            "https://jsonplaceholder.typicode.com/todos/1",
            3
        );

        console.log("Câu 27:", data);
    } catch (error) {
        console.log("Câu 27 lỗi:", (error as Error).message);
    }
}

runCau27();

// Câu 28
async function processTask(id: number): Promise<string> {
    await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
    });

    return `Task ${id} done`;
}

async function batchProcess() {
    const results = await Promise.all([
        processTask(1),
        processTask(2),
        processTask(3),
        processTask(4),
        processTask(5)
    ]);

    console.log("Câu 28:", results);
}

batchProcess();

// Câu 29
async function queueProcess() {
    for (let i = 1; i <= 5; i++) {
        const result = await processTask(i);
        console.log("Câu 29:", result);
    }
}

queueProcess();

// Câu 30
async function fetchTodo(url: string): Promise<any> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
}

async function runCau30() {
    const results = await Promise.allSettled([
        fetchTodo("https://jsonplaceholder.typicode.com/todos/1"),
        fetchTodo("https://jsonplaceholder.typicode.com/todos/2"),
        fetchTodo("https://jsonplaceholder.typicode.com/invalid")
    ]);

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(
                `Câu 30 - API ${index + 1}: Success`,
                result.value
            );
        } else {
            console.log(
                `Câu 30 - API ${index + 1}: Failed`,
                result.reason.message
            );
        }
    });
}

runCau30();