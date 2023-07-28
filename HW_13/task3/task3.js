document.addEventListener("DOMContentLoaded", fetchUserInfo);

async function fetchUserInfo() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    const user = data.results[0];

    document.getElementById("avatar").src = user.picture.large;
    document.getElementById("name").innerText = `${user.name.first} ${user.name.last}`;
    document.getElementById("age").innerText = user.dob.age;
    document.getElementById("gender").innerText = user.gender;
    document.getElementById("country").innerText = user.location.country;
    document.getElementById("login").innerText = user.login.username;
    document.getElementById("password").innerText = user.login.password;
    document.getElementById("email").innerText = user.email;
}
