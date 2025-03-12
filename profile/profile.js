document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is logged in
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("Please log in to view your profile.");
        window.location.href = "login/loginweb.html";
    } else {
        // Populate profile details
        document.getElementById("profile-name").textContent = currentUser.name;
        document.getElementById("profile-email").textContent = currentUser.email;
        document.getElementById("profile-account-type").textContent = currentUser.accountType;

        // Set profile picture if available
        if (currentUser.profilePic) {
            document.getElementById("profile-pic").src = currentUser.profilePic;
        }

        
        // Pre-fill edit form
        document.getElementById("edit-name").value = currentUser.name;
        document.getElementById("edit-email").value = currentUser.email;

        // Set login/logout button text correctly
        document.getElementById("login-logout-text").textContent = "Logout";
    }

    // Handle logout
    const logoutButton = document.getElementById("login-logout-text");
    logoutButton.addEventListener("click", function () {
        sessionStorage.removeItem("currentUser");
        window.location.href = "index.html";
    });

    // Handle profile picture change
    const changeProfilePicButton = document.getElementById("change-profile-pic");
    const profilePicInput = document.createElement("input");
    profilePicInput.type = "file";
    profilePicInput.accept = "image/*";
    profilePicInput.style.display = "none";

    changeProfilePicButton.addEventListener("click", function () {
        profilePicInput.click();
    });

    profilePicInput.addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("profile-pic").src = e.target.result;
                sessionStorage.setItem("currentUser", JSON.stringify({
                    ...currentUser,
                    profilePic: e.target.result
                }));
                showAlert("Profile picture updated successfully!", "success");
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle form submission (fixes updating issue)
    const editProfileForm = document.getElementById("edit-profile-form");
    editProfileForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get updated values
        const updatedName = document.getElementById("edit-name").value;
        const updatedEmail = document.getElementById("edit-email").value;
        const updatedPassword = document.getElementById("edit-password").value;

        if (!updatedName || !updatedEmail) {
            showAlert("Name and email cannot be empty.", "error");
            return;
        }

        // Update session storage
        const updatedUser = {
            ...currentUser,
            name: updatedName,
            email: updatedEmail,
            password: updatedPassword || currentUser.password
        };

        sessionStorage.setItem("currentUser", JSON.stringify(updatedUser));

        // Fix: Reload page to reflect changes immediately
        setTimeout(() => location.reload(), 500);
    });

    // Handle delete account
    document.getElementById("delete-account").addEventListener("click", function () {
        if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            sessionStorage.removeItem("currentUser");
            window.location.href = "index.html";
        }
    });

    // Function to show alerts
    function showAlert(message, type) {
        const alertDiv = document.createElement("div");
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;
        document.querySelector(".profile-container").insertBefore(alertDiv, document.querySelector(".profile-container").firstChild);
        setTimeout(() => alertDiv.remove(), 3000);
    }
});
