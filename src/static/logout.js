const logoutButton = document.getElementById("logout_btn");

if (logoutButton) {
    logoutButton.addEventListener("click", logout);
  }

async function logout() {
    try {
      const response = await fetch("/api/logout", {
        method: "DELETE",
      });
        if (response.status === 200) {
        window.location = "/";
      }
    } catch (error) {
      console.error(error);
    }
  }