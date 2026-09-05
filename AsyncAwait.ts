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