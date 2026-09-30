const CONFIG = {
  server: 'WOWHITEFA',
  department: 'Los Santos Police Department',
  version: '2.0',
  links: {
    dispatch: '',
    mdt: '',
    calculator: '',
    seizureForm: '',
    penalCode: ''
  }
};

const SECTIONS = [
  { label:'Centre', items:[
    {id:'home',icon:'⌂',title:'Tableau de bord',desc:'Accueil opérationnel'}
  ]},
  { label:'Manuel Rookie', items:[
    {id:'rookie',icon:'★',title:'Guide Rookie',desc:'Premiers pas & attitude'},
    {id:'rookie-uniform',icon:'♙',title:'Tenue Rookie',desc:'Patrouille & cérémonie'},
    {id:'armory',icon:'▣',title:'Armurerie',desc:'Équipement & PPA'},
    {id:'station',icon:'⌂',title:'Plan du poste',desc:'Mission Row'},
    {id:'dispatch',icon:'⌁',title:'Dispatch',desc:'Trello & organisation'},
    {id:'radio',icon:'⌁',title:'Radio',desc:'10-codes, signaux & alphabet'},
    {id:'calculator',icon:'#',title:'Peines & charges',desc:'Fiche de calcul'},
    {id:'criminal-record',icon:'▤',title:'Casier judiciaire',desc:'Création & rapport'}
  ]},
  { label:'Manuel LSPD', items:[
    {id:'equipment',icon:'✦',title:'Équipement Police',desc:'Checklist de service'},
    {id:'uniforms',icon:'♜',title:'Tenues LSPD',desc:'Selon le grade'},
    {id:'vehicles',icon:'▰',title:'Véhicules',desc:'Patrouille, bana & opérations'}
  ]},
  { label:'Procédures', items:[
    {id:'criminal-procedure',icon:'§',title:'Procédure pénale',desc:'Interpellation & garde à vue'},
    {id:'medical',icon:'✚',title:'Procédure médicale',desc:'Premiers secours'},
    {id:'seizure',icon:'▥',title:'Saisies LSPD',desc:'Traçabilité des objets'}
  ]},
  { label:'FTO / Formations', items:[
    {id:'fto',icon:'▲',title:'Programme FTO',desc:'ASD, Mary, Dispatch, Bravo'},
    {id:'miranda',icon:'⚖',title:'Droits Miranda',desc:'Lecture & modalités'},
    {id:'arrest',icon:'⛓',title:'Arrestation parfaite',desc:'Ordinaire & procureur'},
    {id:'hostage',icon:'◇',title:"Prise d'otage",desc:'Sécurisation & négociation'}
  ]},
  { label:'Divisions', items:[
    {id:'swat',icon:'◆',title:'S.W.A.T.',desc:'Interventions à haut risque'},
    {id:'legal',icon:'◈',title:'Legal Service',desc:'Plaintes & enquêtes'}
  ]},
  { label:'Règlements', items:[
    {id:'rules',icon:'☷',title:'Règlement LSPD',desc:'Cadre interne'},
    {id:'staff-rules',icon:'⌘',title:'Règlement Staff Police',desc:'Document intégré externe'}
  ]}
];

const TEN_CODES = [
  ['10-1','Mauvaise réception radio'],
  ['10-2','Signal clair'],
  ['10-3','Fin / arrêt de transmission'],
  ['10-4','Bien reçu / affirmatif'],
  ['10-5','Négatif'],
  ['10-6','Occupé'],
  ['10-7','Pause / indisponible temporairement'],
  ['10-8','Prise de service / disponible'],
  ['10-9','Répéter le dernier message'],
  ['10-10','Fin de service'],
  ['10-12','Présence de personnes pouvant entendre la radio'],
  ['10-13','Conditions routières / information de circulation'],
  ['10-14','Escorte ou convoi'],
  ['10-15','Transport / détention d’un prisonnier'],
  ['10-17','Ajout de carburant / arrêt station-service'],
  ['10-19','En route vers une destination'],
  ['10-20','Localisation / demande de position'],
  ['10-22','Annuler le dernier call'],
  ['10-23','Attente de dispatch'],
  ['10-27','Sujet recherché / vérification individu'],
  ['10-28','Vérification immatriculation'],
  ['10-29','Vérification mandats'],
  ['10-30','Bagarre'],
  ['10-31','Coups de feu / tirs signalés'],
  ['10-35','Demande de renfort'],
  ['10-37','Cambriolage en cours'],
  ['10-38','Contrôle routier'],
  ['10-40','Braquage de supérette'],
  ['10-41','Début de patrouille'],
  ['10-42','Fin de patrouille'],
  ['10-50','Accident de la route'],
  ['10-51','Demande de dépanneuse'],
  ['10-52','Demande EMS / ambulance'],
  ['10-56','Refus d’obtempérer / course-poursuite'],
  ['10-57','Délit de fuite'],
  ['10-59','Vol de véhicule'],
  ['10-60','Vente de drogue signalée'],
  ['10-67','Incendie en cours'],
  ['10-91','Braquage de banque'],
  ['10-92','Braquage de bijouterie'],
  ['10-93','Prise d’otage'],
  ['10-97','Arrivé sur scène / position'],
  ['10-98','Assignation terminée / disponible'],
  ['11-99','Agent en danger — urgence absolue']
];

const SIGNAL_CODES = [
  ['Code 1','Répondre à la radio.'],
  ['Code 2','Intervention prioritaire sans sirène ; conduite conforme et prudente.'],
  ['Code 3','Intervention urgente avec gyrophares et sirène ; prudence renforcée aux intersections.'],
  ['Code 4','Situation stable, aucune assistance supplémentaire nécessaire.'],
  ['Code 4 Adam','Situation stabilisée mais suspect encore en fuite ; unités déjà engagées.'],
  ['Code 5','Zone sous surveillance ; les autres unités doivent éviter le secteur.'],
  ['Code 5 Edward','Explosif signalé : recul d’environ 500 m et laisser la Bomb Squad intervenir.'],
  ['Code 6','Arrivé sur scène / unité engagée dans une intervention ou investigation.'],
  ['Code 6 Adam','Arrivé sur scène ; assistance d’unités proches potentiellement nécessaire.'],
  ['Code 6 Charles','Suspect dangereux / mandat ; attendre ou confirmer l’assistance.'],
  ['Code 7','Pause repas / indisponibilité courte, souvent remplacé par 10-7.'],
  ['Code 20','Médias sur place / demander notification aux médias.'],
  ['Code 37','Véhicule signalé volé.'],
  ['Code 99','Officier en danger : besoin d’aide immédiate, équivalent urgence 11-99.'],
  ['Code 100','Unités en position pour intercepter un suspect en fuite.'],
  ['Code Robert','Demande de déploiement d’un fusil / d’une carabine sur scène.'],
  ['Code Sam','Demande de déploiement Bean Bag.']
];

const RADIO_ALPHABET = ['A Adam','B Boy','C Charles','D David','E Edward','F Frank','G George','H Henry','I Ida','J John','K King','L Lincoln','M Mary','N Nora','O Ocean','P Paul','Q Queen','R Robert','S Sam','T Tango','U Union','V Victor','W William','X X-ray','Y Young','Z Zebra'];

const PAGES = {
  rookie:{title:'Guide Rookie',crumb:'Manuel Rookie',intro:'Le socle du métier : comportement, préparation, patrouille et respect de la chaîne de commandement.',content:()=>`
    <h3>Le rôle de l’agent</h3>
    <p>Le LSPD assure l’application des lois de Los Santos, interpelle les auteurs d’infractions et porte assistance à la population. Le pouvoir confié à un agent doit toujours être utilisé avec mesure, professionnalisme et dans le cadre des procédures du serveur.</p>
    <div class="callout success"><b>Devise du service</b><p>To protect and to serve — protéger, assister et maintenir l’ordre sans rechercher inutilement l’affrontement.</p></div>
    <h3>Attitude attendue</h3>
    <ul><li>Rester respectueux même face à une personne agressive.</li><li>Chercher à apaiser les tensions avant de les faire monter.</li><li>Écouter les consignes des FTO et des supérieurs.</li><li>Demander de l’aide lorsqu’une procédure n’est pas maîtrisée.</li><li>Garder une présentation et une communication professionnelles.</li></ul>
    <h3>Composition d’une patrouille</h3>
    <p>La patrouille standard se fait à deux. La patrouille solo reste une exception lorsque aucune autre solution n’est possible. À trois, l’organisation de bord doit être claire : le passager avant gère notamment les avertisseurs / mégaphone et le passager arrière peut prendre la radio.</p>
    <h3>Avant de quitter le poste</h3>
    <div class="timeline">
      ${step(1,'Tenue','Revêtir la tenue correspondant au grade et à la mission.')}
      ${step(2,'Équipement','Contrôler radio, menottes, taser, protections et matériel autorisé.')}
      ${step(3,'Dispatch','Passer au bon statut et attendre l’affectation si un dispatcher est actif.')}
      ${step(4,'Véhicule','Contrôler l’état, le carburant et le matériel embarqué.')}
    </div>
    <h3>Véhicule en fin de service</h3><p>Le véhicule doit être rendu en bon état, correctement stationné et avec un niveau de carburant suffisant. Le matériel embarqué doit être remis en ordre.</p>`},

  'rookie-uniform':{title:'Tenue Rookie',crumb:'Manuel Rookie',intro:'Références des tenues de patrouille et de cérémonie Rookie.',content:()=>`
    <h3>Tenues préfaites du vestiaire</h3>
    <div class="table-wrap"><table class="data-table"><thead><tr><th>Preset</th><th>Usage</th></tr></thead><tbody>
      <tr><td>Cadet / Officier / Haut gradé</td><td>❌ Ne pas utiliser comme tenue Rookie standard.</td></tr>
      <tr><td>Intervention</td><td>✅ Seulement lors d’une opération adaptée.</td></tr>
      <tr><td>Gilet intervention</td><td>✅ Opération / intervention.</td></tr>
      <tr><td>Gilet pare-balles</td><td>✅ En DEFCON ou sur ordre hiérarchique.</td></tr>
    </tbody></table></div>
    <h3>Patrouille — Homme</h3>${uniformTable([['T-shirt','312'],['Veste','837'],['Mains','12'],['Collier','0'],['Pantalon','326'],['Chaussures','25'],['Sac','206'],['Variation','0'],['Chapeau','NON']])}
    <h3>Cérémonie — Homme</h3>${uniformTable([['T-shirt','255'],['Veste','812'],['Mains','82'],['Collier','350'],['Pantalon','192'],['Chaussures','25'],['Sac','183'],['Variation','0'],['Chapeau','138']])}
    <h3>Patrouille — Femme</h3>${uniformTable([['T-shirt','381'],['Veste','913'],['Mains','14'],['Collier','0'],['Pantalon','358'],['Chaussures','25'],['Sac','140'],['Variation','0'],['Chapeau','NON']])}
    <h3>Cérémonie — Femme</h3>${uniformTable([['T-shirt','368'],['Veste','890'],['Mains','86'],['Collier','219'],['Pantalon','34'],['Chaussures','25'],['Sac','16'],['Variation','0'],['Chapeau','209']])}
    <div class="callout warning"><b>WOWHITEFA</b><p>Ces références reprennent le référentiel utilisé sur le site source. Si les vêtements ont changé sur WOWHITEFA, envoie-moi les nouveaux numéros et je remplace la table en quelques minutes.</p></div>`},

  armory:{title:'Armurerie',crumb:'Manuel Rookie',intro:'Prise, contrôle et restitution du matériel de service.',content:()=>`
    <h3>Accès</h3><p>À votre arrivée au LSPD, l’armurerie permet de récupérer le matériel autorisé pour votre grade et vos qualifications. Les accès supplémentaires sont liés aux formations obtenues.</p>
    <h3>Règles essentielles</h3><ul><li>Prendre uniquement le matériel nécessaire et autorisé.</li><li>Ne pas conserver l’équipement de service hors cadre prévu.</li><li>Rendre le matériel à la fin du service.</li><li>Maintenir les coffres et espaces de stockage propres.</li><li>Accepter les contrôles de matériel prévus par la hiérarchie.</li></ul>
    <div class="callout warning"><b>PPA</b><p>Après validation du PPA, le badge peut être mis à jour et l’accès au pistolet de combat est autorisé selon les règles internes.</p></div>`},

  station:{title:'Plan du poste',crumb:'Manuel Rookie',intro:'Repères rapides du commissariat de Mission Row.',content:()=>`
    <div class="floor-grid">
      ${floorCard('Étage inférieur','Cellules','Garage principal','Garage secondaire','Salles d’interrogatoire','Coffre des saisies','Salle S.W.A.T.','Traffic Division / Metro')}
      ${floorCard('Rez-de-chaussée','Accueil','Entrée principale','Vestiaire','Salle de réunion','Cafétéria','Bureaux','Armurerie','Stand de tir')}
      ${floorCard('Étage supérieur','Dispatch','Bureau Deputy-Chief','Bureau Capitaine','Bureau Lieutenant','Bureaux LSPD / RRPP','Affaires internes','Recrutement','Divisions d’enquête','Accès héliport')}
    </div>
    <div class="callout"><b>À connaître en priorité</b><p>Cellules, garages, armurerie, salle d’interrogatoire et dispatch : ce sont les zones les plus utilisées pendant une procédure ordinaire.</p></div>`},

  dispatch:{title:'Dispatch',crumb:'Manuel Rookie',intro:'Prise de service, Trello, affectation des unités et statuts opérationnels.',content:()=>`
    <h3>Prise de service</h3>
    <ol><li>Vérifier tenue et équipement.</li><li>Déplacer sa carte dans <strong>En attente de Dispatch</strong>.</li><li>Annoncer sa prise de service et son statut en radio.</li><li>Attendre l’affectation si un dispatcher est présent.</li></ol>
    <div class="callout warning"><b>Rookie</b><p>Un Rookie ne part pas seul en patrouille. En l’absence d’autre option, la gestion se fait avec la hiérarchie / les agents habilités selon le règlement en vigueur.</p></div>
    <h3>Fin de service</h3><p>La carte de patrouille passe en <strong>10-10</strong>. Il n’est pas nécessaire de surcharger la radio pour cette action. Le matériel doit être rendu à l’armurerie selon les règles du service.</p>
    <h3>Carte agent</h3><div class="quote"><b>Format conseillé</b><br><code>Matricule | Prénom Nom | Numéro de téléphone</code></div>
    <p>Ajoutez ensuite les étiquettes correspondant au grade et, si nécessaire, aux divisions. Une seule carte doit représenter l’agent et rester à jour.</p>
    <h3>Colonnes / statuts importants</h3>${simpleTable(['Statut','Utilisation'],[
      ['En attente de Dispatch','Agent en service, disponible pour être affecté.'],
      ['En service','Agent affecté à une unité / patrouille active.'],
      ['Activité','Zone utilisée lorsque les agents doivent mettre leur statut à jour.'],
      ['En procédure','Unité occupée par une procédure et temporairement moins disponible.'],
      ['10-10','Fin de service.']
    ])}
    <h3>Création d’une unité</h3><div class="quote"><b>Modèle</b><br><code>🚔 Modèle du véhicule + matricule du plus haut gradé | Membres de la patrouille | Véhicule utilisé</code></div>
    <p>Si deux agents ont le même grade, le matricule du conducteur peut être utilisé comme référence de l’unité. Pensez à garder la carte agent en <strong>En service</strong> pendant toute la patrouille.</p>
    ${externalLink('dispatch','Ouvrir le Dispatch WOWHITEFA','Ajoute l’URL de votre Trello / Dispatch dans CONFIG.links.dispatch pour activer ce bouton.')}`},

  radio:{title:'Radio LSPD',crumb:'Manuel Rookie / LSPD',intro:'10-codes, signaux d’urgence, alphabet opérationnel et discipline radio.',content:()=>`
    <h3>Discipline radio</h3><p>La fréquence sert aux informations utiles au service. Annoncez votre matricule ou votre unité, préparez votre message avant d’émettre et restez clair, bref et précis. Les conversations privées doivent passer par un autre moyen.</p>
    <div class="callout success"><b>Format d’un call</b><p><strong>Unité → code / information → localisation → besoin éventuel.</strong> Exemple : « Adam 10, 10-19 vers le dernier 10-91. »</p></div>
    <h3>10-codes</h3>${codeTable(TEN_CODES)}
    <h3>Signaux LSPD</h3>${codeTable(SIGNAL_CODES)}
    <h3>Alphabet radio</h3><div class="tag-row alphabet-grid">${RADIO_ALPHABET.map(x=>`<span class="tag">${x}</span>`).join('')}</div>
    <div class="callout warning"><b>Référentiel WOWHITEFA</b><p>La liste ci-dessus reprend la base de travail du site fourni et les codes opérationnels associés. Si WOWHITEFA a modifié un code, donne-moi votre tableau officiel et je le remplace à l’identique.</p></div>`},

  calculator:{title:'Peines & charges',crumb:'Manuel Rookie',intro:'Méthode de remplissage de la fiche de calcul et contrôle des charges.',content:()=>`
    <h3>Étape 1 — Identité</h3><p>Renseignez le <strong>NOM Prénom du prévenu</strong> ainsi que le <strong>matricule + NOM Prénom de l’agent</strong>. Les champs automatiques, comme la date, ne doivent pas être modifiés inutilement.</p>
    <h3>Étape 2 — Chefs d’inculpation</h3><p>Sélectionnez uniquement les charges réellement établies. La quantité est généralement 1, sauf lorsqu’un même fait concerne plusieurs victimes ou plusieurs occurrences et que le code pénal prévoit une quantité distincte.</p>
    <h3>Contrôle final</h3><ul><li>Comparer chaque charge avec les faits constatés.</li><li>Éviter les doublons.</li><li>Vérifier amendes, temps de GAV et seuils nécessitant un procureur.</li><li>Conserver la capture / preuve demandée par la procédure interne.</li></ul>
    ${externalLink('calculator','Ouvrir la fiche de calcul WOWHITEFA','Ajoute le lien de votre feuille de calcul dans CONFIG.links.calculator.')}`},

  'criminal-record':{title:'Casier judiciaire',crumb:'Manuel Rookie',intro:'Vérifier, créer puis alimenter proprement le dossier judiciaire d’un individu.',content:()=>`
    <div class="timeline">
      ${step(1,'Procédure judiciaire','Ouvrir l’espace / salon dédié aux casiers judiciaires.')}
      ${step(2,'Vérifier l’existence','Rechercher l’individu afin d’éviter la création d’un doublon.')}
      ${step(3,'Créer si absent','Récupérer le modèle épinglé, le copier puis renseigner toutes les informations demandées.')}
      ${step(4,'Créer / ouvrir le fil','Le fil sert à regrouper les rapports d’arrestation du même individu.')}
      ${step(5,'Rapport d’arrestation','Copier le modèle officiel et renseigner faits, charges, preuves et suites de la procédure.')}
    </div>
    <div class="callout"><b>Bonne pratique</b><p>Une personne déjà enregistrée ne doit pas recevoir un deuxième casier : utilisez le fil existant et ajoutez la nouvelle procédure.</p></div>
    ${externalLink('mdt','Ouvrir le MDT WOWHITEFA','Ajoute l’URL du MDT dans CONFIG.links.mdt pour activer ce raccourci.')}`},

  equipment:{title:'Équipement Police',crumb:'Manuel LSPD',intro:'Checklist à effectuer avant de se déclarer opérationnel.',content:()=>`
    <h3>Avant la prise de service</h3><ul><li>Tenue réglementaire et adaptée.</li><li>Pistolet de combat si PPA validé.</li><li>Taser.</li><li>Matraque.</li><li>Menottes.</li><li>Gilet pare-balles.</li><li>Lampe torche — conseillée.</li><li>Radar — conseillé selon la mission.</li></ul>
    <div class="callout success"><b>Fin de service</b><p>Tout matériel récupéré au début du service doit être remis à sa place. Ne laissez pas d’équipement de police hors du cadre prévu.</p></div>
    <h3>La radio</h3><p>La radio reste l’un des outils les plus importants de l’agent. Le boîtier principal assure la liaison tandis que le micro déporté facilite une utilisation rapide sans perdre le contrôle de la scène.</p>
    <h3>Matériel embarqué</h3><p>L’ordinateur de bord permet notamment de consulter les identités, immatriculations, permis et informations sur les unités actives selon les outils du serveur.</p>`},

  uniforms:{title:'Tenues LSPD',crumb:'Manuel LSPD',intro:'Règles de présentation selon le grade.',content:()=>`
    ${simpleTable(['Grade','Tenue / signes distinctifs'],[
      ['Rookie','Manches longues avec cravate ; pas d’accessoires non autorisés.'],
      ['Officier I & II','Manches longues sans cravate ou manches courtes.'],
      ['Officier III','Tenue Officier + galons.'],
      ['Senior Lead Officer','Manches longues / courtes + galons.'],
      ['Sergeant I & II','Manches longues / courtes + galons.'],
      ['Lieutenant','Tenue de commandement + barrettes ; tenue civile selon contexte.'],
      ['Capitaine','Tenue de commandement + étoiles ; tenue civile selon contexte.']
    ])}
    <div class="callout"><b>Présentation</b><p>La tenue doit être propre, cohérente avec la mission et représentative du département. Les modifications inhabituelles doivent être validées par la hiérarchie.</p></div>`},

  vehicles:{title:'Véhicules',crumb:'Manuel LSPD',intro:'Référentiel des véhicules de patrouille, banalisés et d’opérations spéciales.',content:()=>`
    <h3>Patrouille / service courant</h3>${vehicleGrid(['Vélo','Voiture Cadet','Voiture Officier','Vapid Scout','Everon 4x4','Mesa','Vapide','Moto'])}
    <h3>Intervention</h3>${vehicleGrid(['Gresley','Vapid S5','Moto d’intervention','Vapide Cruiser','Polmav','LS350'])}
    <h3>Banalisés</h3>${vehicleGrid(['Mesa Bana','Crown x2','4x4','Buffalo','Vapid S5 Bana','Oracle x3','Stanier','Speedo x4','Schafter x5','Baller Bana','Vapid Scout Bana','Vapid Stanier x6','Buffalo S x7','Torrence Bana','Revolter Bana','STX Bana','Vigero Bana','Caracara Bana','Rumpo Bana','Schafter LWB','Vapide DOA','Contender DOA'])}
    <h3>Convoi / opérations spéciales</h3>${vehicleGrid(['Camion Command','Fourgon blindé','Bus pénitencier','4x4 S.W.A.T.','Riot S.W.A.T.','Insurgent','Fourgon blindé BCAT','Anti-émeute','NightShark blindé'])}
    <div class="callout warning"><b>Accès véhicule</b><p>L’autorisation réelle dépend toujours du grade, de la division, de la formation et des règles WOWHITEFA en vigueur.</p></div>`},

  'criminal-procedure':{title:'Procédure pénale',crumb:'Procédures',intro:'Cadre général : interpellation, transfert, Miranda, fouille, GAV et contact justice.',content:()=>`
    <h3>Principes</h3><p>Une arrestation doit reposer sur des faits et non sur une décision arbitraire. Une personne appréhendée reste sous la protection des agents. Les contrôles, palpations, fouilles et placements en cellule doivent être effectués dans le cadre prévu par le serveur.</p>
    <div class="callout warning"><b>Fouille</b><p>Le référentiel source prévoit une fouille par un agent du même sexe ou, si nécessaire, par le personnel médical. Appliquez la règle WOWHITEFA actuellement en vigueur.</p></div>
    <h3>Déroulement général</h3><div class="timeline">
      ${step(1,'Constatation','Témoignage, éléments disponibles ou flagrant délit.')}
      ${step(2,'Interpellation','Poursuite ou interpellation directe ; adapter la réponse au niveau de danger.')}
      ${step(3,'Arrestation','Palpation, menottage et sécurisation du suspect.')}
      ${step(4,'Transfert','10-15 vers l’office ; passage par l’hôpital si l’état le justifie.')}
      ${step(5,'Arrivée au poste','Identité, Miranda dans un lieu sûr, fouille, photo / traçabilité et mise sous scellés.')}
      ${step(6,'MDT & charges','Vérification du dossier et préparation de la peine encourue.')}
      ${step(7,'Garde à vue','Accès aux droits demandés, saisies, calcul des peines et suites judiciaires.')}
    </div>
    <h3>Procureur</h3><p>Pour les crimes ou accumulations de délits atteignant les seuils définis par le serveur, contactez le procureur. Si aucun procureur n’est disponible, appliquez la procédure WOWHITEFA prévue (convocation / bracelet électronique / libération selon le cas).</p>
    <h3>Vérification d’identité</h3><p>L’identité doit être vérifiée via les moyens prévus par le MDT et la procédure interne. En cas de doute ou de refus persistant, faites remonter la situation à la hiérarchie plutôt que d’improviser.</p>`},

  medical:{title:'Procédure médicale',crumb:'Procédures',intro:'Réflexes de premiers secours avant la prise en charge par les EMS.',content:()=>`
    <h3>Les 4 étapes</h3><div class="timeline">
      ${step(1,'Sécuriser','Évaluer les dangers : circulation, incendie, électricité, armes, environnement. Ne pas se mettre soi-même en danger.')}
      ${step(2,'Évaluer la victime','Se présenter, rassurer, vérifier conscience et respiration et rechercher les blessures visibles.')}
      ${step(3,'Alerter','Prévenir les secours avec une localisation claire, le nombre de victimes et les risques présents.')}
      ${step(4,'Secourir','Réaliser uniquement les gestes maîtrisés en attendant les EMS, sans aggraver l’état de la victime.')}
    </div>
    <h3>Victime inconsciente</h3><p>Contrôlez la respiration. Si elle respire et que la situation le permet, placez-la en position latérale de sécurité et surveillez-la. Si elle ne respire pas normalement, lancez immédiatement l’alerte et appliquez les gestes de réanimation correspondant à votre formation RP.</p>
    <h3>Saignement</h3><p>Protégez-vous, identifiez l’origine du saignement et appliquez les gestes de compression / premiers secours appris en formation. Faites intervenir les EMS dès que possible.</p>
    <div class="callout danger"><b>Priorité</b><p>Une scène non sécurisée ne doit pas être abordée sans précaution. La sécurité des agents, des secours et des civils passe avant la rapidité d’intervention.</p></div>`},

  seizure:{title:'Saisies LSPD',crumb:'Procédures',intro:'Traçabilité des objets confisqués et transmission au stockage.',content:()=>`
    <h3>Règle générale</h3><p>Tout objet confisqué pendant une procédure doit être identifiable et relié à l’affaire concernée : agent, suspect, date, motif, quantité et destination du scellé.</p>
    <h3>Checklist</h3><ul><li>Photographier / consigner les objets selon la procédure.</li><li>Éviter de mélanger les saisies de plusieurs dossiers.</li><li>Reporter les quantités et la provenance avec précision.</li><li>Déposer les objets dans l’espace de saisie prévu.</li><li>Compléter le formulaire ou le rapport demandé.</li></ul>
    ${externalLink('seizureForm','Ouvrir le formulaire de saisie WOWHITEFA','Le site d’origine utilisait un formulaire intégré. Ajoute votre nouveau lien dans CONFIG.links.seizureForm.')}`},

  fto:{title:'Programme FTO',crumb:'FTO / Formations',intro:'Formations internes et qualifications spécialisées du LSPD.',content:()=>`
    <h3>Rôle de la division formation</h3><p>Les FTO assurent les formations internes et accompagnent les agents dans l’apprentissage des spécialités. Ils travaillent notamment avec les encadrants Rookie et gèrent les qualifications nécessaires aux postes spécialisés.</p>
    <h3>ASD — Air Support Division</h3><div class="mini-grid">${miniCard('Prérequis','Officier II minimum, maîtrise de l’hélicoptère, attention et communication radio.')} ${miniCard('Missions','Reconnaissance aérienne, sécurisation de l’espace aérien, suivi d’un suspect, assistance à un aéronef en difficulté.')}</div>
    <h3>Mary / Moto</h3><p>Le référentiel source présente une routière haute performance. Les règles importantes sont la patrouille à plusieurs, l’interdiction de partir sur une fusillade en moto, le maintien sur les axes routiers et le rôle de renfort / escorte.</p>
    <h3>Dispatcher</h3><p>Le dispatcher répartit les effectifs sur les différents districts, maintient une radio propre et s’assure que les cartes du Dispatch restent à jour. Il doit limiter le flood, exiger des calls précis et corriger les statuts incohérents.</p>
    <h3>Bravo / Maritime</h3><p>La formation Bravo donne accès au pilotage des moyens nautiques prévus. Les patrouilles se font au minimum à deux ; le pilote doit être qualifié et le port du gilet de sauvetage est obligatoire selon la mission.</p>
    <div class="callout"><b>Formations WOWHITEFA</b><p>Les grades requis et disponibilités peuvent évoluer. Le tableau officiel WOWHITEFA doit rester prioritaire sur cette présentation.</p></div>`},

  miranda:{title:'Droits Miranda',crumb:'FTO / Formations',intro:'Lecture des droits, confirmation de compréhension et délais de procédure.',content:()=>`
    <h3>Quand les lire ?</h3><p>Lorsqu’un individu est placé en état d’arrestation / garde à vue, ses droits doivent être annoncés dans le délai prévu par la procédure. La lecture se fait dans un endroit suffisamment sécurisé pour l’agent et le suspect.</p>
    <div class="quote" id="mirandaText"><button class="copy-btn" data-copy="mirandaText">COPIER</button><b>Texte opérationnel WOWHITEFA</b><br><br>« Madame / Monsieur [Nom], vous êtes placé(e) en état d’arrestation par le Los Santos Police Department pour [motif]. Vous avez le droit de garder le silence. Si vous renoncez à ce droit, vos déclarations pourront être utilisées dans le cadre de la procédure. Vous avez le droit à l’assistance d’un avocat et pouvez demander sa présence lors d’un interrogatoire. Si nécessaire, un avocat pourra vous être attribué selon les règles en vigueur. Vous pouvez également demander une assistance médicale. Vous pouvez exercer ces droits à tout moment pendant votre garde à vue. Avez-vous compris les droits qui viennent de vous être présentés et souhaitez-vous exercer l’un d’eux ? »</div>
    <h3>Procédure</h3><ul><li>Lire les droits à voix haute.</li><li>Demander une confirmation de compréhension.</li><li>En cas d’absence de confirmation, répéter la lecture selon la procédure interne.</li><li>Consigner l’heure et les droits demandés.</li><li>Permettre l’accès aux droits applicables pendant la garde à vue.</li></ul>
    <h3>Délai</h3><div class="callout warning"><b>15 minutes</b><p>Le référentiel source prévoit une lecture dans les 15 minutes suivant l’arrestation, sous réserve de la sécurité de la scène. Vérifiez que cette règle correspond toujours au cadre WOWHITEFA actuel.</p></div>`},

  arrest:{title:'Arrestation parfaite',crumb:'FTO / Formations',intro:'Séquence complète d’une procédure ordinaire ou avec intervention du procureur.',content:()=>`
    <h3>Procédure ordinaire</h3><div class="timeline">
      ${step(1,'Constatation','Établir les faits / flagrant délit.')}
      ${step(2,'Interpellation','Poursuite ou interpellation directe ; sécuriser la situation.')}
      ${step(3,'Palpation','Vérifier les menaces immédiates sans confondre palpation et fouille complète.')}
      ${step(4,'10-15','Transport du suspect vers le poste / hôpital si nécessaire.')}
      ${step(5,'Miranda','Lire les droits dans un lieu sûr et dans le délai applicable.')}
      ${step(6,'Fouille & identification','Fouille, photo / preuve, identité et casier judiciaire.')}
      ${step(7,'GAV','Cellule, EMS / nourriture si demandés et applicables, saisies et calcul des peines.')}
      ${step(8,'Clôture','Amende, GAV ou autre suite prévue par le code pénal.')}
    </div>
    <h3>Avec procureur</h3><p>Préparez les charges et le dossier sans exécuter prématurément une sanction relevant du jugement. Contactez la liaison procureur : jugement immédiat si disponible ; sinon, appliquez la procédure de convocation / bracelet électronique prévue par le serveur.</p>
    <div class="callout success"><b>Réflexe</b><p>Une procédure propre est chronologique, documentée et explicable par un autre agent sans avoir à deviner ce qui s’est passé.</p></div>`},

  hostage:{title:"Gestion d'une prise d'otage",crumb:'FTO / Formations',intro:'Sécuriser la zone, établir le contact et négocier progressivement.',content:()=>`
    <div class="callout danger"><b>Avant tout contact</b><p>Le périmètre doit être sécurisé. Un négociateur ne doit pas s’exposer seul : il est accompagné et protégé pendant le contact.</p></div>
    <h3>Phase 1 — Prise de contact</h3><p>Établissez un canal de communication : contact direct, téléphone ou radio selon la situation. Présentez-vous et cherchez d’abord à stabiliser l’échange.</p>
    <h3>Phase 2 — État des otages</h3><p>Demandez à voir les otages ou à leur parler pour vérifier leur état de santé. Toute demande de soins doit être traitée comme une priorité de sécurité.</p>
    <h3>Phase 3 — Négociation</h3><p>Avancez progressivement. Lorsqu’un service est demandé (nourriture, véhicule, etc.), cherchez une contrepartie cohérente, par exemple la libération d’un otage. Ne promettez pas ce que vous ne pouvez pas fournir.</p>
    <h3>Phase 4 — Coordination</h3><p>Le négociateur transmet les informations utiles au commandement et aux unités d’intervention. La radio opérationnelle doit rester lisible et ne pas perturber le contact.</p>
    <div class="callout"><b>Priorité</b><p>La vie des otages et des intervenants prime sur la précipitation. Les choix tactiques restent sous l’autorité du commandement / des unités spécialisées.</p></div>`},

  swat:{title:'S.W.A.T.',crumb:'Divisions',intro:'Unité spécialisée dans les interventions à haut risque.',content:()=>`
    <h3>Mission</h3><p>Le Special Weapons And Tactics intervient lorsque le niveau de risque dépasse les capacités d’une patrouille ordinaire. Ses membres reçoivent une formation spécifique à l’intervention, aux armes et aux situations complexes.</p>
    <h3>Domaines d’intervention</h3><ul><li>Libération d’otages.</li><li>Maintien / rétablissement de l’ordre lors d’événements majeurs.</li><li>Interventions sur suspects barricadés ou fortement armés.</li><li>Appui sur mandats d’arrêt ou perquisitions à haut risque.</li><li>Renfort de sécurité lors d’événements sensibles.</li><li>Protection de personnalités / membres du gouvernement selon les missions.</li></ul>
    <h3>Négociation</h3><p>Le SWAT peut inclure des fonctions de négociation et de soutien psychologique. Sur une prise d’otage ou un braquage, la coordination avec les unités spécialisées prime sur les initiatives individuelles.</p>`},

  legal:{title:'Legal Service',crumb:'Divisions',intro:'Division d’enquête chargée du suivi des plaintes et dossiers qui nécessitent des investigations.',content:()=>`
    <h3>Missions</h3><ul><li>Rechercher des informations à partir d’un dépôt de plainte.</li><li>Contacter les personnes concernées.</li><li>Mener des vérifications / enquêtes terrain.</li><li>Réaliser des interrogatoires.</li><li>Monter des dossiers d’enquête structurés.</li></ul>
    <h3>Méthode</h3><p>Séparez clairement les faits constatés, témoignages, éléments matériels et hypothèses. Un dossier doit pouvoir être repris par un autre enquêteur ou présenté à la justice sans explications orales indispensables.</p>`},

  rules:{title:'Règlement LSPD',crumb:'Règlements',intro:'Cadre interne : hiérarchie, comportement, organisation et présentation.',content:()=>`
    <h3>Titre I — Règles générales</h3><ul><li>Tous les fonctionnaires sont soumis à la hiérarchie du LSPD.</li><li>L’égalité de traitement s’applique entre les agents.</li><li>L’évolution doit reposer sur les compétences et critères internes.</li></ul>
    <h3>Titre II — Organisation</h3><p>Le département s’organise autour du bureau du Chief, du personnel, des opérations, du recrutement, de la communication, de l’administration et des responsables de divisions / départements. La chaîne de commandement doit être respectée dans les décisions de service.</p>
    <h3>Titre III — Comportement</h3><ul><li>Comportement exemplaire et digne.</li><li>Courtoisie envers les citoyens et les collègues.</li><li>Sérieux devant la population et la hiérarchie.</li><li>Respect des protocoles, procédures et textes en vigueur.</li><li>Neutralité attendue dans l’exercice de la fonction.</li></ul>
    <h3>Tenue</h3><p>L’uniforme doit être propre, correctement porté et adapté à la mission. En civil, l’identification doit respecter les règles du service.</p>
    <div class="callout warning"><b>Important</b><p>Cette page est une version restructurée pour le portail WOWHITEFA. Pour les sanctions, exceptions et articles détaillés, le règlement officiel WOWHITEFA doit rester la référence.</p></div>`},

  'staff-rules':{title:'Règlement Staff Police',crumb:'Règlements',intro:'Emplacement réservé au document Staff Police.',content:()=>`
    <h3>Document externe</h3><p>Sur le site fourni, cette page ne contient pas le texte directement : le règlement Staff Police est chargé depuis un document intégré (iframe). Le contenu n’est donc pas récupérable proprement depuis la page publique.</p>
    <div class="empty"><b>À compléter</b><br><br>Envoie-moi le PDF, Google Doc ou le texte du règlement Staff Police WOWHITEFA et je l’intégrerai directement ici avec la même mise en page que le reste du portail.</div>`}
};

function step(n,title,text){return `<div class="step"><span class="step-num">${n}</span><div><h4>${title}</h4><p>${text}</p></div></div>`}
function uniformTable(rows){return simpleTable(['Élément','Référence'],rows)}
function simpleTable(headers, rows){return `<div class="table-wrap"><table class="data-table"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`}
function codeTable(rows){return `<div class="table-wrap code-table-wrap"><table class="data-table code-table"><thead><tr><th>Code</th><th>Signification</th></tr></thead><tbody>${rows.map(([a,b])=>`<tr><td><strong>${a}</strong></td><td>${b}</td></tr>`).join('')}</tbody></table></div>`}
function miniCard(title,text){return `<div class="mini-card"><span>${title}</span><p>${text}</p></div>`}
function floorCard(title,...items){return `<div class="floor-card"><span>${title}</span><ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`}
function vehicleGrid(items){return `<div class="vehicle-grid">${items.map(v=>`<div class="vehicle-pill"><span>▰</span>${v}</div>`).join('')}</div>`}
function externalLink(key,label,fallback){const href=CONFIG.links[key];return href?`<a class="external-btn" href="${href}" target="_blank" rel="noopener">${label} ↗</a>`:`<div class="callout"><b>${label}</b><p>${fallback}</p></div>`}

const flatItems = SECTIONS.flatMap(s=>s.items.map(i=>({...i,section:s.label})));
const app = document.getElementById('app');
const nav = document.getElementById('nav');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const toast = document.getElementById('toast');

function buildNav(){
  nav.innerHTML = SECTIONS.map(group=>`<div class="nav-group"><div class="nav-label">${group.label}</div>${group.items.map(i=>`<button class="nav-item" data-route="${i.id}"><span class="nav-icon">${i.icon}</span><span>${i.title}</span></button>`).join('')}</div>`).join('');
}

function routeTo(id){
  location.hash = id === 'home' ? '' : id;
  render(id);
  sidebar.classList.remove('open'); overlay.classList.remove('show');
  window.scrollTo({top:0,behavior:'smooth'});
}

function home(){
  const categoryCards = [
    ['rookie','★','Manuel Rookie','Les bases complètes pour démarrer proprement.','#4ba9f2'],
    ['radio','⌁','Codes radio','10-codes, signaux, alphabet et discipline.','#50c8e8'],
    ['criminal-procedure','§','Procédures','Interpellation, GAV, médical et saisies.','#65d9a4'],
    ['fto','▲','FTO & Formations','ASD, Mary, Dispatcher, Bravo et procédures.','#e4bd60'],
    ['swat','◆','Divisions','S.W.A.T., Legal Service et missions spécialisées.','#ff7378'],
    ['rules','☷','Règlements','Cadre interne et standards du département.','#9d8cff']
  ];
  app.innerHTML = `
    <section class="hero">
      <div class="hero-copy"><span class="kicker">${CONFIG.department}</span><h2>OPS <em>CENTER</em></h2><p>Le portail opérationnel du LSPD sur <strong>${CONFIG.server}</strong>. Cette V2 reprend la structure et les informations utiles du site de référence en les réorganisant pour une consultation rapide en service.</p><div class="hero-actions"><button class="btn btn-primary" data-route="rookie">Commencer le guide Rookie</button><button class="btn btn-secondary" data-route="radio">Ouvrir les codes radio</button></div></div>
      <img src="assets/badge.svg" class="hero-badge" alt="" />
    </section>
    <section class="stats"><div class="stat"><span>Modules</span><strong>${flatItems.length-1}</strong></div><div class="stat"><span>Codes radio</span><strong>${TEN_CODES.length + SIGNAL_CODES.length}</strong></div><div class="stat"><span>Formations FTO</span><strong>4+</strong></div><div class="stat"><span>Version</span><strong>V${CONFIG.version}</strong></div></section>
    <div class="section-head"><div><h3>Accès rapide</h3><p>Les ressources les plus utiles pendant une prise de service.</p></div></div>
    <section class="cards">${categoryCards.map(c=>`<article class="card" data-route="${c[0]}" style="--accent:${c[4]}"><div class="card-icon">${c[1]}</div><h4>${c[2]}</h4><p>${c[3]}</p><span class="card-meta">OUVRIR →</span></article>`).join('')}</section>
    <div class="section-head"><div><h3>Fiches réflexes</h3><p>Les actions à garder sous la main en intervention.</p></div></div>
    <section class="cards"><article class="card" data-route="miranda"><div class="card-icon">⚖</div><h4>Droits Miranda</h4><p>Texte prêt à copier et procédure de lecture.</p><span class="card-meta">DROITS</span></article><article class="card" data-route="arrest"><div class="card-icon">⛓</div><h4>Arrestation</h4><p>La séquence du flagrant délit jusqu’à la clôture.</p><span class="card-meta">PROCÉDURE</span></article><article class="card" data-route="dispatch"><div class="card-icon">⌁</div><h4>Dispatch</h4><p>Prise de service, carte agent et statut de patrouille.</p><span class="card-meta">TRELLO</span></article></section>`;
}

function page(id){
  const p=PAGES[id]; if(!p){home();return;}
  const current = flatItems.find(i=>i.id===id);
  const siblings = flatItems.filter(i=>i.section===current?.section && i.id!==id).slice(0,6);
  const content = typeof p.content === 'function' ? p.content() : p.content;
  app.innerHTML=`
    <div class="page-header"><div><div class="crumb">${p.crumb}</div><h2>${p.title}</h2><p>${p.intro}</p></div><div class="tag-row"><span class="tag">${CONFIG.server}</span><span class="tag">LSPD</span><span class="tag">V${CONFIG.version}</span></div></div>
    <div class="page-grid"><article class="article">${content}</article><aside class="side-column"><div class="aside-card"><h4>Dans cette section</h4><div class="aside-list">${siblings.map(s=>`<button data-route="${s.id}">${s.title}<br><small>${s.desc}</small></button>`).join('')||'<span style="color:#62798a;font-size:11px">Aucun module lié.</span>'}</div></div><div class="aside-card"><h4>Accès rapide</h4><div class="aside-list"><button data-route="radio">⌁ Radio & codes</button><button data-route="miranda">⚖ Droits Miranda</button><button data-route="criminal-procedure">§ Procédure pénale</button><button data-route="arrest">⛓ Arrestation parfaite</button></div></div></aside></div>`;
}

function render(id){
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.route===id || (id==='home' && b.dataset.route==='home')));
  if(id==='home') home(); else page(id);
  bindDynamic();
}

function bindDynamic(){
  document.querySelectorAll('[data-route]').forEach(el=>el.onclick=()=>routeTo(el.dataset.route));
  document.querySelectorAll('[data-copy]').forEach(btn=>btn.onclick=()=>{
    const target=document.getElementById(btn.dataset.copy); if(!target) return;
    const clone=target.cloneNode(true); clone.querySelectorAll('button').forEach(b=>b.remove());
    navigator.clipboard?.writeText(clone.innerText.trim()).then(()=>showToast('Texte copié dans le presse-papiers'));
  });
}

function showToast(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1900)}
function pageSearchText(id){const p=PAGES[id]; if(!p) return ''; const raw=typeof p.content==='function'?p.content():p.content; return `${p.title} ${p.intro} ${raw.replace(/<[^>]+>/g,' ')}`.toLowerCase()}
function doSearch(q){
  q=q.trim().toLowerCase(); if(!q){searchResults.classList.remove('show');return;}
  const hits=flatItems.filter(i=>`${i.title} ${i.desc} ${i.section} ${pageSearchText(i.id)}`.toLowerCase().includes(q)).slice(0,10);
  searchResults.innerHTML=hits.length?hits.map(i=>`<div class="search-result" data-route="${i.id}"><b>${i.title}</b><small>${i.section} · ${i.desc}</small></div>`).join(''):`<div class="search-result"><small>Aucun résultat pour « ${q} »</small></div>`;
  searchResults.classList.add('show');
  searchResults.querySelectorAll('[data-route]').forEach(el=>el.onclick=()=>{routeTo(el.dataset.route);searchInput.value='';searchResults.classList.remove('show')});
}

buildNav();
render(location.hash.replace('#','')||'home');
window.addEventListener('hashchange',()=>render(location.hash.replace('#','')||'home'));
searchInput.addEventListener('input',e=>doSearch(e.target.value));
document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap'))searchResults.classList.remove('show')});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();searchInput.focus()}if(e.key==='Escape'){searchResults.classList.remove('show');sidebar.classList.remove('open');overlay.classList.remove('show')}});
document.getElementById('quickMiranda').onclick=()=>routeTo('miranda');
document.getElementById('menuBtn').onclick=()=>{sidebar.classList.add('open');overlay.classList.add('show')};
overlay.onclick=()=>{sidebar.classList.remove('open');overlay.classList.remove('show')};
