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

// Câu 4
const randomPromise = new Promise<number>((resolve, reject) => {
    const number = Math.random();

    if (number >= 0.5) {
        resolve(number);
    } else {
        reject("Random number is less than 0.5");
    }
});

randomPromise
    .then((result) => {
        console.log("Câu 4 thành công:", result);
    })
    .catch((error) => {
        console.log("Câu 4 lỗi:", error);
    });

// Câu 5
function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}

simulateTask(2000).then((result) => {
    console.log("Câu 5:", result);
});

// Câu 6 note:: Dùng lại simulateTask() của câu 5
Promise.all([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(3000)
]).then((results) => {
    console.log("Câu 6:", results);
});

// Câu 7
Promise.race([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(3000)
]).then((result) => {
    console.log("Câu 7:", result);
});

// Câu 8
Promise.resolve(2)
    .then((number) => number * number)
    .then((number) => number * 2)
    .then((number) => number + 5)
    .then((result) => {
        console.log("Câu 8:", result);
    });