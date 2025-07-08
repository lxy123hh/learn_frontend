const promise = new Promise(
    (resolve , reject) => {
        const success = true;
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected.");
        }
    }
)

