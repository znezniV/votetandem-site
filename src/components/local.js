import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    en:{
        headerIntro: "A platform that gives politically excluded people in Switzerland a possibility to vote — simple to use, social, and meant to persist.",
        heroTitle: "Including All People in Politics",
        heroText: "In Switzerland many inhabitants are excluded from votings, most of whom are foreigners making up 25 % of the population. Votetandem.org enables a direct possibility to vote by meeting up with Swiss people who supply their vote for exchange. The platform is based on blockchain technology for a secure and independent operation.",

        roleGiver: "The Vote Giver",
        roleRecipient: "The Vote Recipient",

        actionSignUp: "Sign Up",

        sectionHeaderConcept: "How it works",
        sectionHeaderBrowser: "Prepare your Browser",
        sectionHeaderFAQ: "FAQ",

        blockHeaderGiveVote: "1a. Register a Vote",
        blockHeaderReceiveVote: "1b. Select a Vote",
        blockHeaderMeeting: "2. Meeting",
        blockHeaderConformation: "3. Confirmation",

        blockDescGiveVote: "The Vote Giver registers their vote with a location, date, and time on the platform, making it available.",
        blockDescReceiveVote: "The Vote Recipient selects one of the listed votes on the platform, fixing the meeting.",
        blockDescMeeting: "Both meet at the established location, discuss, and the Vote Giver fills out the ballot paper.",
        blockDescConfirmation: "Both confirm on the platform that the vote was exchanged.",
        blockDescBrowser: "- Install the browser extension MetaMask. \n \n - Write down your seedphrase. \n \n - Switch to the Ropsten Network. \n \n - Get test money on  faucet.metamask.io and wait a few minutes.",

        footerContribute: "Do you want to contribute?",

        faq: "- **Who should fill out the ballot paper?** \n \n The ballot paper has to be filled out by the Swiss Vote Giver.\n - **Can I exchange votes several times?** \n \n No, the platform locks your account after the meeting, and only re-activates it four weeks before the next voting/election.\n - **Who is actually willing to sign up?** \n \n The platform is for people who have the urge to have their voice heard, but also for anyone who is charitable or simply interested to supply their vote and help people in need.\n - **What should I discuss during the meeting?** \n \n When the meeting is fixed, you can download a discussion guideline onto you digital calender. It’s meant to help you during the meeting.\n - **Why is the platform based on blockchain technology?** \n \n Blockchain technology allows votetandem.org to operate independantly. This means that no one can take it down or modify or control the source code and data. In addition, votetandem.org does not rely on private infrastructure, such as centralized servers. \n - **Why do I need the browser extension MetaMask?** \n \n This browser extension allows you to interact and connect with the smart contract, which is the code of the platform running on the blockchain. \n - **What is a seed phrase?** \n \n With your seed phrase you can log into votetandem.org with MetaMask from anywhere. Think of it as a password, keep it safe and write it on a piece of paper! \n - **Why do I need to switch to the Ropsten Network?** \n \n This is a network, on which you do not need to pay with actual money, because everytime you interact with the smart contract you pay around CHF 0.05.\n - **What is test money and why do I need it?** \n \n This is money you can spend on the test network. It’s free and it enables you to interact with votetandem.org on the blockchain."
    },
    de: {
      headerIntro: "Eine Plattform die politisch ausgeschlossenen Menschen in der Schweiz das Wählen ermöglicht. – einfach zu bedienen, sozial und beständig.",
      heroTitle: "Alle Menschen in Politik einbeziehen",
      heroText: "In der Schweiz sind viele Personen von der Teilnahme an Abstimmungen ausgeschlossen, die meisten davon sind Ausländer mit einem Bevölkerungsanteil von über 25 %. Votetandem.org ermöglicht eine direkte Stimmabgabe durch Treffen mit Schweizerinnen und Schweizern, die ihren Wahlzettel für den Austausch zur Verfügung stellen. Die Plattform basiert auf Blockchain-Technologie für einen sicheren und unabhängigen Betrieb.",

      roleGiver: "Stimmgebende Person",
      roleRecipient: "Stimmsuchende Person",

      actionSignUp: "Anmelden",

      sectionHeaderConcept: "So funktioniert's",
      sectionHeaderBrowser: "Browser vorbereiten",
      sectionHeaderFAQ: "FAQ",

      blockHeaderGiveVote: "1a. Stimme anbieten",
      blockHeaderReceiveVote: "1b. Stimme aussuchen",
      blockHeaderMeeting: "2. Treffen",
      blockHeaderConformation: "3. Bestätigung",

      blockDescGiveVote: "Die stimmgebende Person registriert ihren Stimmzettel und gibt Ort, Datum und Uhrzeit auf der Plattform an, um ihn verfügbar zu machen.",
      blockDescReceiveVote: "Die stimmsuchende Person wählt eine der gelisteten Stimmen aus und fixiert somit das Treffen.",
      blockDescMeeting: "Beide treffen sich am vereinbarten Ort, diskutieren und die stimmberechtigte Person füllt anschliessend den Stimmzettel aus.",
      blockDescConfirmation: "Beide bestätigen auf der Plattform, dass der Stimmzettel ausgetauscht wurde.  ",
      blockDescBrowser: "- Installiere die Browsererweiterung MetaMask. \n \n - Schreibe deine Seedphrase auf. \n \n - Wechsle zum Ropsten Network. \n \n - Hol dir Testgeld auf  faucet.metamask.io und warte ein paar Minuten.",

      footerContribute: "Willst du deinen Teil beitragen?",

      faq: "- **Wer soll den Stimmzettel ausfüllen?** \n \n Der Stimmzettel muss von der Schweizer stimmgebenden Person ausgefüllt werden.\n - **Kann ich mehrmals den Stimmzettel tauschen?** \n \n Nein die Plattform sperrt nach dem Treffen deinen Account und reaktiviert ihn erst vier Wochen vor der nächsten Abstimmung/Wahl. \n - **Wer will sich denn überhaupt anmelden?** \n \n Die Plattform ist für Menschen, die den Drang haben, ihre Stimme hören zu lassen, aber auch für alle, die gemeinnützig sind oder einfach daran interessiert sind, ihre Stimme abzugeben und Menschen zu helfen.\n - **Was soll ich während dem Treffen diskutieren?** \n \n Wenn das Treffen feststeht, kannst du einen Gesprächsleitfaden auf deinen digitalen Kalender herunterladen. Der Leitfaden soll dir während des Treffens helfen.\n - **Warum basiert die Plattform auf Blockchain-Technologie?** \n \n Die Blockchain-Technologie ermöglicht es votetandem.org, unabhängig zu funktionieren. Das bedeutet, dass niemand den Quellcode und die Daten herunternehmen, modifizieren oder kontrollieren kann. Darüber hinaus ist votetandem.org nicht auf privater Infrastruktur wie z.B. zentralisierte Server angewiesen. \n - **Wieso brauche ich die MetaMask Browser-Erweiterung?** \n \n Diese Browsererweiterung ermöglicht es dir, dich mit dem Smart Contract zu verbinden und mit ihm zu interagieren, das ist der Code der Plattform, der auf der Blockchain läuft. \n - **Was ist eine Seed Phrase?** \n \n Mit deiner Seed Phrase kannst du dich von überall bei votetandem.org mit MetaMask anmelden. Betrachte es als dein Passwort, bewahre es sicher auf und schreibe es auf ein Blatt Papier!\n - **Warum muss ich auf das Ropsten Network wechseln?** \n \n Das ist ein Netzwerk, auf dem du nicht mit echtem Geld bezahlen musst, denn jedes Mal, wenn du mit dem Smart Contract interagierst, zahlt man rund CHF 0.05.\n - **Was ist Testgeld und wieso brauche ich es?** \n \n Das ist Geld, das du im Testnetzwerk ausgeben kannst. Es ist gratis und ermöglicht es dir, mit votetandem.org auf der Blockchain zu interagieren."
    },
    it: {
      headerIntro: "Una piattaforma che permette a persone politicamente escluse in Svizzera di partecipare al voto - Semplice da usare, sociale e destinato a persistere.",
      heroTitle: "Includendo tutte le persone in politica",
      heroText: "In Svizzera numerosi abitanti sono esclusi dalle elezioni, la maggior parte dei quali sono stranieri, costituendo il 25 % della popolazione. Votetandem.org offre la possibilità di votare direttamente incontrando persone svizzere che forniscono la loro scheda di voto per lo scambio. La piattaforma si basa sulla tecnologia Blockchain per un servizio sicuro e indipendente.",

      roleGiver: "Il donatore del voto",
      roleRecipient: "Il ricevente del voto",

      actionSignUp: "Iscriviti",

      sectionHeaderConcept: "Come funziona",
      sectionHeaderBrowser: "Prepara il tuo browser",
      sectionHeaderFAQ: "FAQ",

      blockHeaderGiveVote: "1a. Registra un voto",
      blockHeaderReceiveVote: "1b. Seleziona un voto",
      blockHeaderMeeting: "2. Incontro",
      blockHeaderConformation: "3. Conferma",

      blockDescGiveVote: "Il donatore del voto registra la sua scheda elettorale e indica luogo, ora e data sulla piattaforma mettendola a disposizione.",
      blockDescReceiveVote: "Il ricevente del voto seleziona uno dei voti elencati sulla piattaforma, fissando l'incontro.",
      blockDescMeeting: "Entrambi s'incontrano nel luogo stabilito, discutono e il donatore del voto alla fine compila la scheda elettorale.",
      blockDescConfirmation: "Entrambi confermano sulla piattaforma, dopo l'incontro avvenuto, che la scheda di voto è stata scambiata.",
      blockDescBrowser: "- Installa l'estensione del browser MetaMask. \n \n - Annota la seedphrase. \n \n - Passa al Ropsten Network. \n \n - Ricevi denaro da test su  faucet.metamask.io e aspetta qualche minuto.",

      footerContribute: "Vuoi contribuire?",

      faq: "- **Chi deve compilare la scheda elettorale?** \n \n  La scheda elettorale deve essere compilata dal datore del voto svizzero.\n - **Posso scambiare voti più volte?** \n \n No, la piattaforma blocca il tuo account dopo l'incontro e lo riattiva solo quattro settimane prima delle prossime votazioni/elezioni. \n - **Chi e' veramente disposto ad iscriversi?** \n \n La piattaforma è per le persone che hanno la voglia di far sentire la propria voce, ma anche per chiunque sia di beneficenza o semplicemente interessato a fornire il proprio voto e aiutare le persone.\n - **Che cosa devo discutere durante l'incontro?** \n \n Quando l'incontro è fissato, è possibile scaricare una linea guida per la discussione sul proprio calendario digitale. Ha lo scopo di aiutarti durante l'incontro.\n - **Perché la piattaforma è basata sulla tecnologia blockchain?** \n \n La tecnologia Blockchain permette a votetandem.org di operare in modo indipendente. Questo significa che nessuno può rimuovere, modificare o controllare il codice e i dati. Inoltre, votetandem.org non si affida a infrastrutture private, come i server centralizzati.\n - **Perché ho bisogno dell'estensione del browser MetaMask?** \n \n Questa estensione del browser permette di connettersi e interagire con lo smart contract, che è il codice della piattaforma eseguito sulla blockchain. \n - **Cos'e una seed phrase?** \n \n Con la tua seed phrase puoi accedere a votetandem.org con MetaMask da qualsiasi luogo. Considerala come una password, tienila al sicuro e scrivila su un pezzo di carta!\n - **Perché devo passare alla Ropsten Network?** \n \n Si tratta di una network sulla quale non è necessario pagare con denaro reale, dato che ogni volta si interagisce con lo smart contract si paga circa CHF 0.05.\n - **Cos'è il denaro da test e perché mi serve?** \n \n Questi sono soldi che puoi spendere sulla network di test. Sono gratuiti e ti permettono di interagire con votetandem.org sulla blockchain."
    },
    fr:{
        headerIntro: "Une plateforme qui permet aux personnes politiquement exclues en Suisse de participer au vote - Simple à utiliser, sociale et destinée à perdurer.",
        heroTitle: "Intégrer tous les citoyens à la politique",
        heroText: "En Suisse, de nombreux habitants sont exclus des élections, la plupart d'entre eux étant étrangers et représentant 25 % de la population. Votetandem.org permet une possibilité directe de voter en rencontrant les Suisses qui fournissent leur vote pour l'échange. La plate-forme est basée sur la technologie Blockchain pour un fonctionnement sécurisé et indépendant.",

        roleGiver: "Le donneur de vote",
        roleRecipient: "Le receveur de vote",

        actionSignUp: "Inscris-toi",

        sectionHeaderConcept: "Comment cela fonctionne",
        sectionHeaderBrowser: "Prépare le navigateur",
        sectionHeaderFAQ: "FAQ",

        blockHeaderGiveVote: "1a. Inscris un vote",
        blockHeaderReceiveVote: "1b. Sélectionne un vote",
        blockHeaderMeeting: "2. Rendez-vous",
        blockHeaderConformation: "3. Confirmation",

        blockDescGiveVote: "Le donneur de vote inscrit son bulletin de vote et indique le lieu, l'heure et la date sur la plate-forme pour le rendre disponible.",
        blockDescReceiveVote: "Le receveur de vote cherche un des bulletins de vote listés sur la plate-forme et fixe ainsi la rencontre.",
        blockDescMeeting: "Tous deux se réunissent à l'endroit établi, discutent et le donneur de vote remplit finalement le bulletin de vote.",
        blockDescConfirmation: "Tous deux confirment sur la plate-forme après s'être rencontrés que le vote a été échangé.",
        blockDescBrowser: "- Installe l'extension du navigateur MetaMask. \n \n - Note ton seedphrase. \n \n - Passe au Ropsten Network. \n \n - Obtiens l'argent du test sur  faucet.metamask.io et attends quelques minutes.",

        footerContribute: "Veux-tu contribuer?",

        faq: "- **Qui doit remplir le bulletin de vote?** \n \n  Le bulletin de vote doit être rempli par le donneur de vote suisse.\n - **Puis-je échanger des votes plusieurs fois?** \n \n Non, la plateforme bloque ton compte après la rencontre et ne le réactive que quatre semaines avant le prochain vote/élection. \n - **Qui est réellement disposé à s'inscrire?** \n \n La plateforme s'adresse aux personnes qui ont envie de faire entendre leur voix, mais aussi à toutes personnes qui sont dcaritatives ou simplement qui sont intéressées à donner leur vote et à aider les personnes.\n - **De quoi devrais-je discuter pendant la rencontre?** \n \n Lorsque la rencontre est fixée, tu peux télécharger un guide de discussion sur ton agenda. C'est pour t'aider pendant la rencontre.\n - **Pourquoi la plate-forme est-elle basée sur la technologie blockchain?** \n \n La technologie Blockchain permet à votetandem.org de fonctionner de manière indépendante. Cela signifie que personne ne peut le supprimer, ni modifier ou contrôler le code et les données. De plus, votetandem.org ne dépend pas d'une infrastructure privée, comme des serveurs centralisés.\n - **Pourquoi ai-je besoin de l'extension de navigateur MetaMask?** \n \n Cette extension de navigateur te permets d'interagir et de te connecter avec le smart contract, qui est le code de la plate-forme fonctionnant sur la blockchain. \n - **Qu'est-ce qu'une seed phrase?** \n \n Avec ta seed phrase, tu peux te connecter à votetandem.org avec Metamask de n'importe où. Considère-le comme un mot de passe, garde-le en sécurité et écris-le sur une feuille de papier!\n - **Pourquoi dois-je passer au Ropsten Network?** \n \n Il s'agit d'un network, sur lequel tu n'as pas besoin de payer avec de l'argent réel, car chaque fois que tu interagis avec le contrat smart, tu paies environ CHF 0.05.\n - **Qu'est-ce que l'argent de test et pourquoi en ai-je besoin?** \n \n C'est de l'argent que tu peux dépenser sur le network de test. C'est gratuit et cela te permet d'interagir avec votetandem.org sur la blockchain."
    },
});

export default strings;
