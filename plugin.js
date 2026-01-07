// function to copy text to clipboard
function copyToClipboard(event) {
    const textToCopy = "niuv";

    navigator.clipboard.writeText(textToCopy).then(() => {
        // create a notification message
        const notification = document.createElement("div");
        notification.innerText = "Copied Summer's username to clipboard!";
        notification.style.position = "absolute";
        notification.style.backgroundColor = "green";
        notification.style.color = "white";
        notification.style.padding = "5px 10px";
        notification.style.borderRadius = "5px";
        notification.style.fontSize = "14px";
        notification.style.top = `${event.clientY}px`; 
        notification.style.left = `${event.clientX}px`;
        notification.style.transform = "translate(-50%, -100%)"; 
        notification.style.zIndex = "1000";
        notification.style.opacity = "1";
        notification.style.transition = "opacity 1s ease-in-out"; 

        // append the notification to the body
        document.body.appendChild(notification);

        // remove the notification after 5 seconds
        setTimeout(() => {
            notification.style.opacity = "0"; // start fading out
            setTimeout(() => {
                notification.remove(); // remove after fade out 
            }, 10000); // match the transition duration
        }, 5000); // keep the notification visible for 5 seconds
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}

// attach the click event to the Discord image on page load
document.addEventListener("DOMContentLoaded", () => {
    const discordImage = document.querySelector('img[alt="discord logo"]');
    if (discordImage) {
        discordImage.addEventListener("click", copyToClipboard);
    }
});
