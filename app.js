const dialog = document.querySelector("dialog")
const ouvreModal = document.getElementById("ouvre-modal")
const fermeModal = document.getElementById("ferme-modal")
let templateDetails = document.querySelector(".details")

let petitDej = document.getElementById("petit-dejeuner")
let repas = document.getElementById("repas")
let regime = document.querySelector(".regime")
let choixRepas = document.querySelector(".choix-repas")
let ponctuel = document.getElementById("ponctuel")

let nom = document.getElementById("nom")
let prenom = document.getElementById("prenom")
let numeroRue = document.getElementById("numero-rue")
let rue = document.getElementById("rue")
let cp = document.getElementById("cp")
let ville = document.getElementById("ville")
let tel = document.getElementById("tel")
let email = document.getElementById("email")
let choixHotel = document.getElementById("choix-hotel")
let choixChambre = document.getElementById("choix-chambre")
let nbVoyageurs = document.getElementById("voyageurs")
let dateArrivee = document.getElementById("date-arrivee")
let dateDepart = document.getElementById("date-depart")

petitDej.addEventListener("click", ()=>{
    //Si au moins une des deux cases de régime alimentaire est coché
    if (petitDej.checked) {
        //Supprime la classe "display-none" à la balise contenant la classe "regime"
        regime.classList.remove("display-none")
    }else if(petitDej.checked===false && repas.checked===false){
        regime.classList.add("display-none")
    }
})
repas.addEventListener("click", ()=>{
    if (repas.checked) {
        regime.classList.remove("display-none")
        choixRepas.classList.remove("display-none")
    }else if(petitDej.checked===false && repas.checked===false){
        regime.classList.add("display-none")
    }
    if (repas.checked===false) {
        choixRepas.classList.add("display-none")
        document.getElementById("midi").checked=false
        document.getElementById("soir").checked=false
        ponctuel.checked = false
    }
})

ponctuel.addEventListener("click", ()=>{
    if (ponctuel.checked){
        document.getElementById("midi").checked=false
        document.getElementById("soir").checked=false
    }
})

nom.addEventListener("change", testNom)

function testNom(){
    let reg = /^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
    //on teste que la longueur du nom soit entre 2 et 50 caractères
    if (nom.value.length<=2 || nom.value.length>=50){
        afficheErreur("nom", "Votre nom doit comporter entre 2 et 50 caractères")
        return false
    }else if(reg.test(nom.value)==false){
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficheErreur("nom","Ce champs contient des caractères non autorisées")
        return false
    }else if(hasCode(nom.value)){
        afficheErreur("nom", "Vous ne pouvez pas injecter de code ici !")
        return false
    }
    enleveErreur("nom")
    return true
}

prenom.addEventListener("change", testPrenom)

function testPrenom(){
    let reg = /^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
    //on teste que la longueur du prenom soit entre 2 et 50 caractères
    if (prenom.value.length<=2 || prenom.value.length>=50){
        afficheErreur("prenom", "Votre prenom doit comporter entre 2 et 50 caractères")
        return false
    }else if(reg.test(prenom.value)==false){
        // affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficheErreur("prenom","Ce champs contient des caractères non autorisées")
        return false
    }else if(hasCode(prenom.value)){
        afficheErreur("prenom", "Vous ne pouvez pas injecter de code ici !")
        return false
    }
    enleveErreur("prenom")
    return true
}

numeroRue.addEventListener("change", testNumeroRue)

function testNumeroRue(){
    if (numeroRue.value==="") {
        afficheErreur("numero-rue", "Merci de renseigner un numéro de rue")
        return false
    }
    enleveErreur("numero-rue")
    return true
}

rue.addEventListener("change", testRue)

function testRue (){
    if (rue.value=="") {
        afficheErreur("rue", "Merci de renseigner une adresse")
        return false
    }else if(hasCode(rue.value)){
        afficheErreur("rue", "Vous ne pouvez pas injecter de code ici !")
        return false
    }else if(rue.value.length>150){
        afficheErreur("rue", "Votre nom de rue est anormalement long !")
        return false
    }
    enleveErreur("rue")
    return true
}

cp.addEventListener("change", testCP)

function testCP(){
    reg = /\d/
    if (cp.value.length != 5) {
        afficheErreur("cp", "Le code postal doit comporter 5 chiffres")
        return false
    }else if(hasCode(cp.value)){
        afficheErreur("cp", "Vous ne pouvez pas injecter de code ici !")
        return false
    }else if(reg.test(cp.value)==false){
        afficheErreur("cp", "Un code postal est composé uniquement de chiffres")
        return false
    }
    enleveErreur("cp")
    return true
}

ville.addEventListener("change", testVille)

function testVille(){
    if (ville.value == ""){
        afficheErreur("ville", "Merci de renseigner une ville")
        return false
    }else if(hasCode(ville.value)){
        afficheErreur("ville", "Vous ne pouvez pas injecter de code ici !")
        return false
    }else if(ville.value.length>=100){
        afficheErreur("ville", "Votre nom de ville est anormalement long !")
        return false
    }
    enleveErreur("ville")
    return true
}

tel.addEventListener("change", testTel)

function testTel(){
    let reg=/^[0-9]{2}([- /]{0,1}[0-9]{2}){4}$/
    if (reg.test(tel.value)==false) {
        afficheErreur("tel", "Merci de renseigner un numéro de téléphone valide")
        return false
    }
    enleveErreur("tel")
    return true
}

email.addEventListener("change", testEmail)

function testEmail(){
    let reg = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    if (reg.test(email.value)==false) {
        afficheErreur("email", "Merci de renseigner une adresse mail valide")
        return false
    }
    enleveErreur("email")
    return true
}

choixHotel.addEventListener("change", testChoixHotel)

function testChoixHotel(){
    if (choixHotel.selectedOptions[0].value=="") {
        afficheErreur("choix-hotel", "Merci de choisir un hotel")
        return false
    }
    enleveErreur("choix-hotel")
    return true
}

choixChambre.addEventListener("change", testChoixChambre)

function testChoixChambre(){
    if (choixChambre.selectedOptions[0].value=="") {
        afficheErreur("choix-chambre", "Merci de choisir une chambre")
        return false
    }
    enleveErreur("choix-chambre")
    return true
}

nbVoyageurs.addEventListener("change",testNbVoyageurs)

function testNbVoyageurs(){
    if (nbVoyageurs.value=="") {
        afficheErreur("voyageurs", "Merci de renseigner un nombre de voyageurs")       
        return false 
    }
    enleveErreur("voyageurs")
    return true
}

dateArrivee.addEventListener("change", testDateArrivee)

function testDateArrivee(){
    if (dateArrivee.value=="") {
        afficheErreur("date-arrivee", "Merci de renseigner une date d'arrivée")
        return false
    }
    enleveErreur("date-arrivee")
    return true
}

dateDepart.addEventListener("change", testDateDepart)

function testDateDepart(){
    if (dateDepart.value=="") {
        afficheErreur("date-depart", "Merci de renseigner une date de départ")
        return false
    }else if(dateDepart.value<dateArrivee.value){
        afficheErreur("date-depart", "Merci de renseigner une date de départ supérieure à la date d'arrivée")
        return false
    }
    enleveErreur("date-depart")
    return true
}

function afficheErreur(id,messageErreur){
    // Role : Afficher une erreur : mettre une bordure sur le bonn input, et remplir le paragraphe d'erreur associé
    // Parametres : id l'id de l'input dans lequel il y a une erreur, messageErreur : le message à afficher
    // Retour : rien
    let input = document.getElementById(id)
    input.classList.add("input-error")
    let p = document.getElementById(`error-${id}`)
    p.innerText = messageErreur
    p.classList.remove("display-none")
}

function enleveErreur(id){
    // Role : enleve l'erreur sur l'input et cache le paragraphe associé
    // Parametres : id l'id de l'input dans lequel on veut enlever l'erreur
    // Retour : rien
    let input = document.getElementById(id)
    input.classList.remove("input-error")
    let p = document.getElementById(`error-${id}`)
    p.innerText=""
    p.classList.add("display-none")
}

function hasCode(text){
    // Role : Cette fonction cherche dans une chaine si il y a une balise script
    // retour : true si il y a du code, false si il n'y a pas de code
    let reg = /<script/
    return reg.test(text)
}

/**
 * Cette fonction permet de modifier la "value" de l'argument input par la valeur du deuxième argument si l'input et "checked"
 * @param {string} input est un input de type checkbox
 * @param {Number} valeur est une valeur en euros
*/
function ajouteService(input, valeur){
    if (input.checked) {
        input.value = valeur
    } else {
        input.value = 0
    }
}

// Le bouton "réserver" ouvre la modal
ouvreModal.addEventListener("click", () =>{
    //Ajout des services
    let chauffeur = document.getElementById("chauffeur")
    ajouteService(chauffeur, 11)
    let visite = document.getElementById("visite")
    ajouteService(visite, 20)
    ajouteService(petitDej, 15)
    let midi = document.getElementById("midi")
    ajouteService(midi, 25)
    let soir = document.getElementById("soir")
    ajouteService(soir, 25)
    let dureeSejour = (dateDepart.valueAsDate-dateArrivee.valueAsDate)/1000/60/60/24

    //Toto des services
    let total = choixChambre.selectedOptions[0].dataset.prix*dureeSejour + chauffeur.value*dureeSejour + (visite.value*dureeSejour + petitDej.value*dureeSejour + midi.value*dureeSejour + soir.value*dureeSejour)*nbVoyageurs.value

    let test1 = testNom()
    let test2 = testPrenom()
    let test3 = testRue()
    let test4 = testCP()
    let test5 = testVille()
    let test6 = testTel()
    let test7 = testEmail()
    let test8 = testDateArrivee()
    let test9 = testDateDepart()
    let test10 = testChoixHotel()
    let test11 = testChoixChambre()
    let test12 = testNbVoyageurs()
    let test13 = testNumeroRue()
    if (test1===false || test2===false || test3===false || test4===false || test5===false || test6===false || test7===false || test8===false || test9===false || test10===false || test11===false || test12===false || test13===false) {
        
    }else{
        dialog.showModal()
    }
    //Création template du détail
    templateDetails.innerHTML = `<p>Nom et prénom : ${nom.value} ${prenom.value}</p>
    <p>adresse : ${numeroRue.value} ${rue.value} ${cp.value} ${ville.value}</p>
    <p>n° de téléphone : ${tel.value}</p>
    <p>Email : ${email.value}</p>
    <p>Hôtel : Hôtel ${choixHotel.value}</p>
    <p>Chambre : ${choixChambre.selectedOptions[0].innerHTML}</p>
    <p>Nombre de voyageurs : ${nbVoyageurs.value}</p>
    <p>date d'arrivée : ${dateArrivee.valueAsDate.toLocaleDateString()}</p>
    <p>date de départ : ${dateDepart.valueAsDate.toLocaleDateString()}</p>
    <p>durée du séjour : ${dureeSejour}</p>
    <p>Services supplémentaires : </p>
    <p>Restrictions alimentaires : </p>
    <p>Montant total : ${total}€</span>
    </p>`
})

let monform=document.getElementById("monform")
monform.addEventListener("submit",(e)=>{
    e.preventDefault()
    let test1 = testNom()
    let test2 = testPrenom()
    let test3 = testRue()
    let test4 = testCP()
    let test5 = testVille()
    let test6 = testTel()
    let test7 = testEmail()
    let test8 = testDateArrivee()
    let test9 = testDateDepart()
    let test10 = testChoixHotel()
    let test11 = testChoixChambre()
    let test12 = testNbVoyageurs()
    let test13 = testNumeroRue()
    if (test1===false || test2===false || test3===false || test4===false || test5===false || test6===false || test7===false || test8===false || test9===false || test10===false || test11===false || test12===false || test13===false) {
        
    }else{
        monform.submit()
    }
})

// Le bouton "annuler" ferme la modal
fermeModal.addEventListener("click", ()=>{
    dialog.close()
})
/*
let monform = document.getElementById("monform")
monform.addEventListener("submit",(e)=>{
    e.preventDefault()
})
*/