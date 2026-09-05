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

// Câu 16
async function runCau16() {
    const results = await Promise.all([
        multiplyByThree(1),
        multiplyByThree(2),
        multiplyByThree(3)
    ]);

    console.log("Câu 16:", results);
}

runCau16();

// Câu 17
async function runCau17() {
    const promises = [
        Promise.resolve("Task 1"),
        Promise.resolve("Task 2"),
        Promise.resolve("Task 3")
    ];

    for await (const result of promises) {
        console.log("Câu 17:", result);
    }
}

runCau17();

// Câu 18
type UserInfo = {
    id: number;
    name: string;
};

async function fetchUser(id: number): Promise<UserInfo> {
    await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
    });

    return {
        id: id,
        name: `User ${id}`
    };
}

async function runCau18() {
    const user = await fetchUser(1);
    console.log("Câu 18:", user);
}

runCau18();

// Câu 19
async function fetchUsers(ids: number[]): Promise<UserInfo[]> {
    const users = await Promise.all(
        ids.map((id) => fetchUser(id))
    );

    return users;
}

async function runCau19() {
    const users = await fetchUsers([1, 2, 3]);
    console.log("Câu 19:", users);
}

runCau19();


// Câu 20
function apiCall(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("API Success");
        }, 3000);
    });
}

function timeout(ms: number): Promise<never> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("API call timed out"));
        }, ms);
    });
}

async function runCau20() {
    try {
        const result = await Promise.race([
            apiCall(),
            timeout(2000)
        ]);

        console.log("Câu 20:", result);
    } catch (error) {
        console.log("Câu 20:", (error as Error).message);
    }
}

runCau20();