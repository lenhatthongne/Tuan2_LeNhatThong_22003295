// Câu 11
async function helloAsync(): Promise<string> {
    await new Promise<void>((resolve) => {
        setTimeout(resolve, 2000);
    });

    return "Hello Async";
}

async function runCau11() {
    const result = await helloAsync();
    console.log("Câu 11:", result);
}

runCau11();

// Câu 12
function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}

async function runCau12() {
    const result = await simulateTask(2000);
    console.log("Câu 12:", result);
}

runCau12();

// Câu 13
function createError(): Promise<never> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}

async function runCau13() {
    try {
        await createError();
    } catch (error) {
        console.log("Câu 13:", (error as Error).message);
    }
}

runCau13();