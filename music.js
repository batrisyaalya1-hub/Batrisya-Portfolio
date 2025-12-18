// ===== AUDIO HANDLING (SAFE MODE) =====
const audio = document.getElementById("bg-music");

if (audio) {
    // Restore music time when page loads
    window.addEventListener("load", () => {
        const savedTime = localStorage.getItem("audioTime");

        if (savedTime !== null) {
            audio.currentTime = parseFloat(savedTime);
        }

        // Try to play (browser needs interaction)
        audio.play().catch(() => {
            console.log("Autoplay blocked until user interacts");
        });
    });

    // Save current time before leaving page
    window.addEventListener("beforeunload", () => {
        localStorage.setItem("audioTime", audio.currentTime);
    });

    // Allow resume after user clicks anywhere
    document.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        }
    });
}


// ===== CLOCK HANDLING =====
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-GB', { hour12: false });
    document.getElementById("clock").innerText = time;
}

setInterval(updateClock, 1000);
updateClock();


