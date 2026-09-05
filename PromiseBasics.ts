// Tạo Promise trả về "Hello Async" sau 2 giây
const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});

// Câu 2
function getNumber(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

getNumber().then((result) => {
    console.log("Câu 2:", result);
});

// Câu 3
function getError(): Promise<string> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}

getError().catch((error) => {
    console.log("Câu 3:", error.message);
});