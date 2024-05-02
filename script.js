function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function sendEmail() {
    var recipient = 'stevejacobt@gmail.com'; // Specify the recipient email address
    var subject = 'Hello Steve!'; // Specify the email subject
    var body = 'I would like to get in touch with you.'; // Specify the email body
  
    // Construct the mailto URL with recipient, subject, and body
    var mailtoURL = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  
    // Open the default email client with the pre-filled email
    window.location.href = mailtoURL;
  }
  function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close modal on outside click
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
