function create(str)
{
    return (str2) => console.log(str2 == str);
}

const tom = create("pass_for_Tom");
tom("pass_for_Tom");
tom("pass_for_tom");