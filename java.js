function lösungswortChecken() {
        const lösungswort = prompt("Was ist dein Lösungswort?");
        if (lösungswort && lösungswort.toLowerCase() === "meinung") {
            window.open("https://forms.gle/bzeTBfoebryMJDmu7", "_blank");
        }
        else if (lösungswort.toLowerCase() === "start") {
            window.open("https://docs.google.com/forms/d/e/1FAIpQLSfjG_xzTMmzNkgtNZpIAD2OVkhEJDk9W6CGO-RXNXp1qVeevg/viewform?usp=header", "_blank");
        }
        else if (lösungswort.toLowerCase() === "usikra") {
            window.open("https://forms.gle/yroMJwJoj5cTbTXw9", "_blank")
        }
        else if (lösungswort.toLowerCase() === "musikraum") {
            window.open("https://root229.github.io/Info_und_Anleitung/", "_blank")
        }
    }