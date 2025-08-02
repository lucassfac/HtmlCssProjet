console.log("Bienvenu dans le jeu de mots")

function afficherResultat(resultat, Nbmots) {
    console.log("Vous avez trouvé " + resultat + " mots sur " + Nbmots)
}

function choisirPhrasesOuMots() {
    let demande = prompt("Voulez-vous afficher les mots ou les phrases ? (mots/phrases)")
    while (demande !== "mots" && demande !== "phrases") {
        demande = prompt("Veuillez entrer 'mots' ou 'phrases' :")
    }
    return demande === "mots" ? "mots" : "phrases"
}

function lancerBoucleDeJeu(listePropo) {
    let resultat = 0
        for (let i = 0; i < listePropo.length; i++) {
            let mot = listePropo[i]
            let reponse = prompt("Taper le mot : " + mot)
            if (reponse === mot) {
                resultat++
            }
        }
        return resultat
}

function lancerJeu() {
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposees = 0
    if (choix === "mots") {
        console.log("Vous avez choisi les mots")
        nbMotsProposees = listeMots.length
        score = lancerBoucleDeJeu(listeMots)
    } else {
        console.log("Vous avez choisi les phrases")
        nbMotsProposees = listePhrases.length
        score = lancerBoucleDeJeu(listePhrases)
    }

    afficherResultat(score, nbMotsProposees)
}

lancerJeu()