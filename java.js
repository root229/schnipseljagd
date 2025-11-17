function lösungswortChecken() {
        const lösungswort = prompt("Was ist dein Lösungswort?");
        if (lösungswort && lösungswort.toLowerCase() === "meinung") {
            window.open("https://forms.gle/bzeTBfoebryMJDmu7", "_blank");
        }
        if (lösungswort.toLowerCase() === "start") {
            window.open("https://docs.google.com/forms/d/e/1FAIpQLSfjG_xzTMmzNkgtNZpIAD2OVkhEJDk9W6CGO-RXNXp1qVeevg/viewform?usp=header", "_blank");
        }
        if (lösungswort.toLowerCase() === "usikra") {
            window.open("https://forms.gle/yroMJwJoj5cTbTXw9", "_blank")
        }
        if (lösungswort.toLowerCase() === "musikraum") {
            window.open("https://root229.github.io/info_und_anleitung/", "_blank")
        }
    }