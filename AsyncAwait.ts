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

// Câu 14
async function multiplyByThree(number: number): Promise<number> {
    await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
    });

    return number * 3;
}

async function runCau14() {
    const result = await multiplyByThree(5);
    console.log("Câu 14:", result);
}

runCau14();

// Câu 15
async function runCau15() {
    const result1 = await multiplyByThree(1);
    const result2 = await multiplyByThree(2);
    const result3 = await multiplyByThree(3);

    console.log("Câu 15:", result1, result2, result3);
}

runCau15();