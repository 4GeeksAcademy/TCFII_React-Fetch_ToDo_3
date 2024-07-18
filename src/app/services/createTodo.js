export async function createTodo (task) {

    const todo = {
        label: task,
        is_done: false,
    };

    await fetch ({
        url: `https://playground.4geeks.com/todo/users/${user}`,
        method: 'POST',
        headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });

    if (Response.status === 201) {
        const data = await Response.json();
        return data;
    }
    return null;
}