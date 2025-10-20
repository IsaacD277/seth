const form = document.getElementById("signup-form");
const msg = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const emailAddress = document.getElementById("emailAddress").value.trim();
  const token = document.querySelector('input[name="token"]').value;

  msg.textContent = "Submitting...";
  msg.style.color = "#666";

  try {
    const response = await fetch(`https://api.dinod2.com/v0/signup?token=${token}&firstName=${encodeURIComponent(firstName)}&emailAddress=${encodeURIComponent(emailAddress)}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      msg.textContent = "You're subscribed! 🎉";
      msg.style.color = "green";
      form.reset();
      
      setTimeout(() => {
        msg.textContent = "";
      }, 5000);
    } else {
      msg.textContent = "Something went wrong. Please try again.";
      msg.style.color = "red";
      
      setTimeout(() => {
        msg.textContent = "";
      }, 5000);
    }
  } catch (error) {
    console.error(error);
    msg.textContent = "Network error. Please try again later.";
    msg.style.color = "red";
    
    setTimeout(() => {
      msg.textContent = "";
    }, 5000);
  }

});

