const users = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}];

function showUser(id)
{
    if(id < 0)
        throw new Error(`ID must not be negative: ${id}`);
    for (const obj of users) {
        if(obj.id === id)
            return obj;
    }
}

function showUsers(ids)
{
    let newUsers = [];
    for (const id of ids) 
    {
        try
        {
            user = showUser(id);
            newUsers.push(user);
        }
        catch(error)
        {
            console.log(error.message);
        }
    }
    console.log(newUsers);
}


showUsers([1, -12, 2, -4, 8, 5, 4]);