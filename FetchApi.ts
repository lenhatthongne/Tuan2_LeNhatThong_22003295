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