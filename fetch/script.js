const usersDiv = document.getElementById("users");

usersDiv.textContent = "Loading users...";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    usersDiv.innerHTML = "";
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
                            <h2>${user.name}</h2>
                            <p>Email: ${user.email}</p>
                            <p>Phone: ${user.phone}</p>
                            <p>Website: ${user.website}</p>
                        `;
      usersDiv.appendChild(userDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
    usersDiv.innerHTML = "<p>Error fetching users. Please try again later.</p>";
  });
