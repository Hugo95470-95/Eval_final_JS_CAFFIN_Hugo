
// J'appel l'ID addTaskButton qui se trouve à la ligne 13 du fichier HTML et je lui ajoute une fonctionnalitée pour qu'il se passe quelque chose lorsqu'on clique sur le bouton Button
document.getElementById('addTaskButton').addEventListener('click', function() {

    // je crée une constante tacheText et je l'a relie à l'ID taskInput du fichier HTML 
    const tacheText = document.getElementById('taskInput').value;

    // J'utilise la condition if pour qu'il m'affiche le texte qui à été entrée dans l'input 
    if (tacheText === '') return;


    // je crée une constante tacheList et je l'a relie à l'ID taskList du fichier HTML 
    const tacheList = document.getElementById('taskList');

    // je crée une constante tacheNew et je lui assigne un élément li afin que le texte rentrée dans l'input s'affiche sous forme de liste 
    const tacheNew = document.createElement('li');

    // les portions de texte rentrée dans l'input s'afficheront à la suite sous forme de liste
    tacheNew.textContent = tacheText;


    // Je crée une constante supprButton et je lui assigne une fonctionnalitée qui me permettra de supprimer individuellement chaque portion de texte qui fut rentrée dans l'input auparavant  
    const supprButton = document.createElement('button');

    // je crée le bouton Supprimer qui me permettra de supprimer individuellement chaque portion de texte qui fut rentrée dans l'input auparavant  
    supprButton.textContent = 'Supprimer';

    // Le bouton Supprimer devient fonctionnel
    supprButton.addEventListener('click', function() {
        tacheList.removeChild(tacheNew);
    });

    // Chaque portion de texte peut être supprimée individuellement des autres portions sans que'lles soient affecté par la suppression d'une portion
    tacheNew.appendChild(supprButton);
    tacheNew.addEventListener('click', function() {
        tacheNew.classList.toggle('complet');
    });

    // Du texte peut toujours être rentrée dans l'input et afficher correctement malgrée la suppression d'une ou plusieurs portion de texte 
    tacheList.appendChild(tacheNew);
    document.getElementById('taskInput').value = '';
});
