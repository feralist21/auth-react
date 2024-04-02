const authLogin = (data) => {
    return fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((responce) => responce.json())
        .catch((error) => error);
};

export { authLogin };
