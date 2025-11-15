function lösungswortChecken() {
        const lösungswort = prompt("Was ist dein Lösungswort?");
        if (lösungswort && lösungswort.toLowerCase() === "meinung") {
            window.open("https://forms.gle/bzeTBfoebryMJDmu7", "_blank");
        }
        else if (lösungswort && lösungswort.toLowerCase() === "start") {
            window.open("https://docs.google.com/forms/d/e/1FAIpQLSfjG_xzTMmzNkgtNZpIAD2OVkhEJDk9W6CGO-RXNXp1qVeevg/viewform?usp=header", "_blank");
        }
    }