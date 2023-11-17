    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
    var recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const diagnostic = document.querySelector("#output");
    const bg = document.querySelector("html");

    bg.onclick = () => {
        recognition.start();
        console.log("Ready to receive a color command.");
    };

    recognition.onresult = (event) => {
        const receivedText = event.results[0][0].transcript;
        diagnostic.textContent = `Message: ${receivedText}`;
        bg.style.backgroundColor = receivedText;
        recognition.stop();

        if(receivedText === "play video") {
            console.log("Video command was registered");
            let videoHTML = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EceyCgxG1c8?si=ajB_0uZalpx8VbHH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
            diagnostic.innerHTML = videoHTML;
        }
        if(receivedText === "find me a hotel") {
            console.log("Travel command was registered");
            window.open("https://expedia.ca", "_blank");
        }
    };
