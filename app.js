const SECTIONS = [
  { label:'Centre', items:[
    {id:'home',icon:'⌂',title:'Tableau de bord',desc:'Accueil opérationnel'}
  ]},
  { label:'Manuel Rookie', items:[
    {id:'rookie',icon:'★',title:'Guide Rookie',desc:'Premiers pas'},
    {id:'rookie-uniform',icon:'♙',title:'Tenue Rookie',desc:'Patrouille & cérémonie'},
    {id:'armory',icon:'▣',title:'Armurerie',desc:'Équipement & PPA'},
    {id:'station',icon:'⌂',title:'Plan du poste',desc:'Mission Row'},
    {id:'dispatch',icon:'⌁',title:'Dispatch',desc:'Organisation des unités'},
    {id:'radio',icon:'⌁',title:'Radio',desc:'Codes & discipline'},
    {id:'calculator',icon:'#',title:'Peines & charges',desc:'Fiche de calcul'},
    {id:'criminal-record',icon:'▤',title:'Casier judiciaire',desc:'Création & mise à jour'}
  ]},
  { label:'Manuel LSPD', items:[
    {id:'equipment',icon:'✦',title:'Équipement Police',desc:'Checklist de service'},
    {id:'uniforms',icon:'♜',title:'Tenues LSPD',desc:'Selon le grade'},
    {id:'vehicles',icon:'▰',title:'Véhicules',desc:'Patrouille & spécialités'}
  ]},
  { label:'Procédures', items:[
    {id:'criminal-procedure',icon:'§',title:'Procédure pénale',desc:'Arrestation & garde à vue'},
    {id:'medical',icon:'✚',title:'Procédure médicale',desc:'Premiers secours'},
    {id:'seizure',icon:'▥',title:'Saisies LSPD',desc:'Traçabilité des objets'}
  ]},
  { label:'FTO / Formations', items:[
    {id:'fto',icon:'▲',title:'Programme FTO',desc:'Formations internes'},
    {id:'miranda',icon:'⚖',title:'Droits Miranda',desc:'Lecture & modalités'},
    {id:'arrest',icon:'⛓',title:'Arrestation parfaite',desc:'Procédure complète'}
  ]},
  { label:'Divisions', items:[
    {id:'swat',icon:'◆',title:'S.W.A.T.',desc:'Interventions à haut risque'},
    {id:'legal',icon:'◈',title:'Legal Service',desc:'Plaintes & enquêtes'}
  ]},
  { label:'Règlements', items:[
    {id:'rules',icon:'☷',title:'Règlement LSPD',desc:'Cadre interne'},
    {id:'staff-rules',icon:'⌘',title:'Règlement Staff',desc:'Référentiel staff police'}
  ]}
];

const PAGES = {
  rookie:{title:'Guide Rookie',crumb:'Manuel Rookie',intro:'Les essentiels à maîtriser avant et pendant vos premières patrouilles au sein du Los Santos Police Department.',content:`
    <h3>Votre rôle</h3><p>Un rookie apprend les bases du service : attitude, communication, équipement, procédures et fonctionnement des outils internes. Les conseils des formateurs et FTO restent prioritaires sur toute documentation statique.</p>
    <div class="callout success"><b>Objectif</b><p>Être fiable, clair en radio, respectueux, attentif aux consignes et capable de demander de l'aide au bon moment.</p></div>
    <h3>Avant de partir en patrouille</h3><ul><li>Revêtir la tenue Rookie conforme.</li><li>Prendre l'équipement autorisé à l'armurerie.</li><li>Mettre à jour son statut dans le Dispatch.</li><li>Rejoindre l'unité attribuée par le dispatcher.</li><li>Effectuer un contrôle rapide du véhicule et de son matériel.</li></ul>
    <h3>Pendant la patrouille</h3><p>Restez professionnel, privilégiez l'apaisement et communiquez de façon concise. En cas de doute sur une procédure, demandez l'aide d'un agent formateur ou d'un supérieur.</p>`},
  'rookie-uniform':{title:'Tenue Rookie',crumb:'Manuel Rookie',intro:'Référentiel de tenue pour les rookies, avec distinction patrouille, cérémonie et intervention.',content:`
    <h3>Règles générales</h3><p>La tenue Rookie standard reste sobre et réglementaire. Les accessoires non autorisés doivent être évités en service.</p>
    <div class="table-wrap"><table class="data-table"><thead><tr><th>Tenue</th><th>Usage</th><th>Statut</th></tr></thead><tbody><tr><td>Patrouille Rookie</td><td>Service courant</td><td>Obligatoire</td></tr><tr><td>Cérémonie</td><td>Cérémonies et événements officiels</td><td>Sur ordre</td></tr><tr><td>Intervention</td><td>Opération dédiée</td><td>Autorisé en opération</td></tr><tr><td>Gilet pare-balles</td><td>DEFCON / ordre hiérarchique</td><td>Conditionnel</td></tr></tbody></table></div>
    <h3>Présentation</h3><p>Une tenue propre, cohérente et identifiable participe directement à l'image du département. Les détails de variations homme/femme peuvent être adaptés dans le vestiaire selon les presets maintenus par le serveur.</p>`},
  armory:{title:'Armurerie',crumb:'Manuel Rookie',intro:'Accès à l’équipement de service et règles de restitution.',content:`
    <h3>Prise de service</h3><p>Lors de votre arrivée au LSPD, l'armurerie donne accès à l'équipement autorisé pour votre grade et vos certifications.</p>
    <div class="callout warning"><b>Fin de service</b><p>Tout équipement de service doit être rangé et restitué. Des contrôles peuvent être réalisés sur le contenu des coffres et l'équipement individuel.</p></div>
    <h3>PPA</h3><p>Une fois la formation PPA validée, l'autorisation correspondante peut être ajoutée au badge et l'accès à l'arme réglementaire concernée est ouvert.</p>`},
  station:{title:'Plan du poste',crumb:'Manuel Rookie',intro:'Repères essentiels du commissariat de Mission Row.',content:`
    <h3>Étage inférieur</h3><p>Cellules, garages principal et secondaire, salles d'interrogatoire, stockage des saisies et espaces dédiés à certaines unités opérationnelles.</p>
    <h3>Rez-de-chaussée</h3><p>Accueil, entrée principale, vestiaires, salle de réunion, cafétéria, bureaux, armurerie et stand de tir.</p>
    <h3>Étage supérieur</h3><p>Dispatch, bureaux de commandement, espaces administratifs, bureaux des divisions d'enquête et accès héliport.</p>
    <div class="callout"><b>Conseil Rookie</b><p>Apprenez rapidement les accès cellules, garages, armurerie, interrogatoires et dispatch : ce sont les zones que vous utiliserez le plus souvent.</p></div>`},
  dispatch:{title:'Dispatch',crumb:'Manuel Rookie',intro:'Organisation des effectifs, création des unités et mise à jour du statut de patrouille.',content:`
    <h3>Rôle du Dispatch</h3><p>Le dispatch répartit les unités et donne une vue claire des effectifs disponibles, en service ou engagés dans une procédure.</p>
    <h3>Carte agent</h3><p>Le format recommandé conserve le matricule, l'identité de l'agent et les informations utiles au service. La carte doit rester dans la colonne correspondant à votre statut.</p>
    <div class="quote"><b>Format de patrouille</b><br>Véhicule + matricule du plus haut gradé | Membres de la patrouille | Véhicule utilisé</div>
    <h3>Bonnes pratiques</h3><ul><li>Signaler sa prise de service.</li><li>Attendre l'affectation si un dispatcher est actif.</li><li>Mettre l'unité « en procédure » lorsque nécessaire.</li><li>Garder les informations de carte à jour pendant toute la patrouille.</li></ul>`},
  radio:{title:'Radio LSPD',crumb:'Manuel Rookie / LSPD',intro:'Une radio propre est une radio courte, précise et utile.',content:`
    <h3>Discipline radio</h3><p>Annoncez votre matricule ou votre unité, réfléchissez avant d'émettre et évitez tout échange sans utilité opérationnelle. Le but est de préserver la fréquence pour les informations importantes.</p>
    <h3>Alphabet opérationnel</h3><div class="tag-row">${['A Adam','B Boy','C Charles','D David','E Edward','F Frank','G George','H Henry','I Ida','J John','K King','L Lincoln','M Mary','N Nora','O Ocean','P Paul','Q Queen','R Robert','S Sam','T Tango','U Union','V Victor','W William','X X-ray','Y Young','Z Zebra'].map(x=>`<span class="tag">${x}</span>`).join('')}</div>
    <h3>Signaux de priorité</h3><div class="table-wrap"><table class="data-table"><thead><tr><th>Code</th><th>Signification</th></tr></thead><tbody><tr><td>Code 1</td><td>Répondre à la radio.</td></tr><tr><td>Code 2</td><td>Déplacement prioritaire sans sirène, dans le respect du code de la route.</td></tr><tr><td>Code 3</td><td>Urgence avec avertisseurs lumineux et sonores, en conservant une conduite sécurisée.</td></tr></tbody></table></div>`},
  calculator:{title:'Peines & charges',crumb:'Manuel Rookie',intro:'Méthode de préparation d’une fiche de calcul pour une procédure pénale.',content:`
    <h3>Informations de base</h3><p>Commencez par l'identité du prévenu et les informations de l'agent en charge. Sélectionnez ensuite chaque chef d'inculpation réellement retenu et vérifiez les quantités applicables.</p>
    <div class="callout"><b>Traçabilité</b><p>La fiche doit rester lisible et permettre à un autre agent ou au procureur de comprendre rapidement le calcul effectué.</p></div>
    <h3>Contrôle final</h3><ul><li>Vérifier l'identité.</li><li>Écarter les charges non établies.</li><li>Appliquer la bonne quantité par charge.</li><li>Conserver la preuve ou capture demandée par la procédure interne.</li></ul>`},
  'criminal-record':{title:'Casier judiciaire',crumb:'Manuel Rookie',intro:'Créer, vérifier et mettre à jour un casier dans le référentiel prévu.',content:`
    <h3>Vérification</h3><p>Avant toute création, recherchez l'individu dans l'espace dédié afin d'éviter les doublons.</p>
    <div class="timeline"><div class="step"><span class="step-num">1</span><div><h4>Rechercher</h4><p>Vérifiez si un casier existe déjà.</p></div></div><div class="step"><span class="step-num">2</span><div><h4>Créer si nécessaire</h4><p>Utilisez le modèle officiel et renseignez l'identité avec soin.</p></div></div><div class="step"><span class="step-num">3</span><div><h4>Mettre à jour</h4><p>Ajoutez les nouvelles procédures avec leurs charges et informations pertinentes.</p></div></div></div>`},
  equipment:{title:'Équipement Police',crumb:'Manuel LSPD',intro:'Checklist de prise de service et rappel des équipements de base.',content:`
    <h3>Checklist</h3><ul><li>Tenue réglementaire.</li><li>Arme autorisée selon certification/PPA.</li><li>Taser.</li><li>Matraque.</li><li>Menottes.</li><li>Gilet pare-balles.</li><li>Lampe torche et radar selon besoin.</li></ul>
    <div class="callout success"><b>Avant de sortir</b><p>Vérifiez votre matériel avant de vous déclarer disponible. En fin de service, rangez l'ensemble de l'équipement récupéré.</p></div>
    <h3>Radio</h3><p>La radio reste l'outil central de coordination. Gardez-la accessible et limitez les transmissions à l'opérationnel.</p>`},
  uniforms:{title:'Tenues LSPD',crumb:'Manuel LSPD',intro:'Principes de présentation des agents selon leur grade.',content:`
    <div class="table-wrap"><table class="data-table"><thead><tr><th>Grade</th><th>Présentation générale</th></tr></thead><tbody><tr><td>Rookie</td><td>Manches longues et cravate, présentation stricte.</td></tr><tr><td>Officer I & II</td><td>Manches longues sans cravate ou manches courtes.</td></tr><tr><td>Officer III / Supervisors</td><td>Tenue d'officier avec insignes/galons correspondants.</td></tr><tr><td>Lieutenant</td><td>Tenue de commandement / tenue civile autorisée selon contexte.</td></tr><tr><td>Captain</td><td>Tenue de commandement avec insignes de grade / tenue civile selon contexte.</td></tr></tbody></table></div>
    <h3>Principe</h3><p>La tenue choisie doit correspondre à la mission, au grade et aux consignes du commandement.</p>`},
  vehicles:{title:'Véhicules LSPD',crumb:'Manuel LSPD',intro:'Organisation des véhicules de patrouille, spécialisés, banalisés et d’opération.',content:`
    <h3>Patrouille</h3><div class="tag-row">${['Voiture Cadet','Voiture Officer','Vapid Scout','Everon 4x4','Mesa','Cruiser','Moto','Polmav'].map(x=>`<span class="tag">${x}</span>`).join('')}</div>
    <h3>Banalisés</h3><p>Plusieurs berlines, SUV et véhicules non marqués peuvent être attribués aux grades ou divisions autorisés. L'utilisation doit rester cohérente avec l'affectation en cours.</p>
    <h3>Opérations spéciales</h3><div class="tag-row">${['Command Truck','Fourgon blindé','Bus pénitentiaire','SWAT 4x4','Riot','Insurgent','BCAT','Anti-émeute','NightShark'].map(x=>`<span class="tag">${x}</span>`).join('')}</div>
    <div class="callout warning"><b>Retour de patrouille</b><p>Le véhicule doit être rangé à son emplacement, en état correct et avec un niveau de carburant suffisant.</p></div>`},
  'criminal-procedure':{title:'Procédure pénale',crumb:'Procédures',intro:'Cadre opérationnel d’une interpellation, d’une arrestation et d’une garde à vue.',content:`
    <div class="callout danger"><b>Principe</b><p>Une arrestation doit être fondée sur des faits ou éléments suffisants. Toute personne appréhendée reste sous la protection des agents et doit être traitée avec dignité.</p></div>
    <h3>Déroulement standard</h3><div class="timeline"><div class="step"><span class="step-num">1</span><div><h4>Constatation</h4><p>Flagrant délit, témoignage ou autre élément utile.</p></div></div><div class="step"><span class="step-num">2</span><div><h4>Interpellation</h4><p>Contrôlez la situation et adaptez le niveau d'intervention au risque.</p></div></div><div class="step"><span class="step-num">3</span><div><h4>Palpation & transport</h4><p>Sécurisez la personne avant le transfert. Orientez vers l'hôpital si nécessaire.</p></div></div><div class="step"><span class="step-num">4</span><div><h4>Arrivée au poste</h4><p>Identité, droits Miranda, fouille, scellés et vérification des dossiers.</p></div></div><div class="step"><span class="step-num">5</span><div><h4>Garde à vue</h4><p>Appliquez les droits demandés, calculez les charges et contactez le procureur lorsque la procédure l'exige.</p></div></div></div>
    <h3>Types d'infraction</h3><div class="tag-row"><span class="tag">Contravention</span><span class="tag">Délit mineur</span><span class="tag">Délit majeur</span><span class="tag">Crime</span></div>
    <p>Le niveau de peine appliqué dépend des faits, de la coopération et des validations requises. Utilisez toujours le code pénal et les outils à jour du serveur.</p>`},
  medical:{title:'Procédure médicale',crumb:'Procédures',intro:'Réflexes de premiers secours avant la prise en charge par les services médicaux.',content:`
    <h3>Les 4 étapes</h3><div class="timeline"><div class="step"><span class="step-num">1</span><div><h4>Sécuriser</h4><p>Évaluez les dangers et établissez un périmètre si nécessaire.</p></div></div><div class="step"><span class="step-num">2</span><div><h4>Évaluer</h4><p>Vérifiez la conscience, la respiration et l'état général de la victime.</p></div></div><div class="step"><span class="step-num">3</span><div><h4>Alerter</h4><p>Transmettez localisation, nature du problème, nombre de victimes et risques éventuels.</p></div></div><div class="step"><span class="step-num">4</span><div><h4>Secourir</h4><p>Effectuez uniquement les gestes adaptés, calmement, jusqu'à l'arrivée des secours.</p></div></div></div>
    <h3>Victime inconsciente mais qui respire</h3><p>Libérez les voies aériennes, placez la victime en position latérale de sécurité et surveillez sa respiration jusqu'à la prise en charge médicale.</p>
    <div class="callout warning"><b>RP médical</b><p>Cette fiche est un guide de jeu de rôle. Pour toute situation réelle, suivez les recommandations officielles des services d'urgence de votre pays.</p></div>`},
  seizure:{title:'Saisies LSPD',crumb:'Procédures',intro:'Référentiel de traçabilité des objets confisqués et saisis.',content:`
    <h3>Objectif</h3><p>Chaque saisie doit être compréhensible et retraçable : qui a saisi, sur qui, quoi, quand, dans quelle procédure et où l'objet a été déposé.</p>
    <h3>Checklist</h3><ul><li>Identifier le suspect et l'agent.</li><li>Décrire l'objet avec une quantité précise.</li><li>Relier la saisie au dossier ou à l'arrestation.</li><li>Conserver les éléments de preuve utiles.</li><li>Déposer l'objet dans l'emplacement prévu.</li></ul>`},
  fto:{title:'Programme FTO',crumb:'FTO / Formations',intro:'Centre des formations internes, spécialisations et accompagnement des agents.',content:`
    <h3>Mission des FTO</h3><p>Les Field Training Officers assurent la montée en compétence des rookies et des agents souhaitant acquérir une spécialité. Ils travaillent avec les responsables de formation et les divisions concernées.</p>
    <h3>Formations mises en avant</h3><div class="cards"><div class="card" style="--accent:#68b9ff"><div class="card-icon">✈</div><h4>ASD</h4><p>Soutien aérien, reconnaissance et assistance aux unités au sol.</p></div><div class="card" style="--accent:#e0b55c"><div class="card-icon">◉</div><h4>Mary / Moto</h4><p>Renfort mobile, escorte et interventions routières adaptées.</p></div><div class="card" style="--accent:#55d99f"><div class="card-icon">⌁</div><h4>Dispatcher</h4><p>Répartition des effectifs, discipline radio et suivi des unités.</p></div><div class="card" style="--accent:#70d0f3"><div class="card-icon">≋</div><h4>Bravo</h4><p>Patrouilles et interventions nautiques, avec règles de sécurité dédiées.</p></div></div>
    <h3>Standard de formation</h3><p>Une certification doit valider à la fois les connaissances, les comportements de sécurité et la capacité à communiquer avec le reste des unités.</p>`},
  miranda:{title:'Droits Miranda',crumb:'FTO / Formations',intro:'Lecture des droits lors d’une arrestation et conduite à tenir pendant la garde à vue.',content:`
    <div class="callout warning"><b>À retenir</b><p>Dans le cadre RP du serveur, les droits doivent être annoncés rapidement après l'arrestation et avant la mise en cellule, dans un environnement permettant une lecture sûre et compréhensible.</p></div>
    <h3>Texte de lecture</h3><div class="quote" id="mirandaText"><button class="copy-btn" data-copy="mirandaText">Copier</button>Madame / Monsieur, vous êtes placé(e) en état d'arrestation par le Los Santos Police Department. Vous avez le droit de garder le silence. Si vous renoncez à ce droit, tout ce que vous direz pourra être utilisé contre vous devant une cour de justice. Vous avez le droit à un avocat et à sa présence lors d'un interrogatoire. Si vous n'en avez pas les moyens, un avocat pourra vous être fourni. Vous pouvez également demander des soins médicaux. Vous pouvez décider à tout moment d'exercer ces droits et de ne répondre à aucune question. Avez-vous compris les droits qui viennent de vous être lus ? Souhaitez-vous faire valoir l'un de ces droits ?</div>
    <h3>Procédure de lecture</h3><div class="timeline"><div class="step"><span class="step-num">1</span><div><h4>Après l'arrestation</h4><p>Placez la personne en sécurité et annoncez les chefs provisoires si la procédure le demande.</p></div></div><div class="step"><span class="step-num">2</span><div><h4>Lecture</h4><p>Récitez clairement les droits avant l'arrivée en cellule, idéalement le plus tôt possible.</p></div></div><div class="step"><span class="step-num">3</span><div><h4>Confirmation</h4><p>Demandez explicitement si les droits ont été compris et si un droit doit être exercé.</p></div></div><div class="step"><span class="step-num">4</span><div><h4>Refus de répondre</h4><p>Le référentiel historique du serveur prévoit jusqu'à trois lectures avant de consigner l'absence de confirmation.</p></div></div></div>
    <h3>Modalités RP</h3><ul><li>Fenêtre opérationnelle indiquée par l'ancien référentiel : 15 minutes après l'arrestation.</li><li>La sécurité de l'agent et du suspect peut justifier un léger décalage.</li><li>Si l'état du suspect empêche une compréhension correcte, adaptez la procédure et priorisez la prise en charge nécessaire.</li></ul>
    <div class="callout"><b>Contexte</b><p>Le principe est inspiré de l'arrêt américain Miranda v. Arizona (1966). Le contenu ci-dessus suit surtout les règles RP historiques de WOWHITEFA/FlashBackFA : gardez-le synchronisé avec votre règlement actuel.</p></div>`},
  arrest:{title:'Arrestation parfaite',crumb:'FTO / Formations',intro:'Séquence simple pour sécuriser une arrestation et préparer la suite judiciaire.',content:`
    <h3>Procédure ordinaire</h3><ol><li>Constater les faits.</li><li>Interpeller le suspect et contrôler la situation.</li><li>Effectuer une palpation de sécurité.</li><li>Transférer le suspect vers le poste ou l'hôpital si nécessaire.</li><li>Lire les droits Miranda dans un lieu adapté.</li><li>Effectuer la fouille selon la procédure interne.</li><li>Vérifier l'identité et le casier.</li><li>Placer en garde à vue et appliquer les droits demandés.</li><li>Calculer les charges et la peine.</li><li>Finaliser l'amende / GAV selon les règles en vigueur.</li></ol>
    <h3>Avec procureur</h3><p>Préparez le dossier et le calcul des charges, puis contactez le procureur. En cas d'indisponibilité, appliquez la solution prévue par le règlement du serveur (convocation, bracelet électronique ou autre dispositif à jour).</p>`},
  swat:{title:'Special Weapons and Tactics',crumb:'Divisions',intro:'Unité spécialisée dans les interventions à haut risque et les opérations nécessitant un dispositif renforcé.',content:`
    <h3>Missions</h3><ul><li>Libération d'otages.</li><li>Rétablissement de l'ordre lors de situations majeures.</li><li>Interventions à haut risque contre des sujets barricadés ou recherchés.</li><li>Appui lors de mandats ou perquisitions sensibles.</li><li>Sécurisation d'événements et de personnalités.</li><li>Négociation lors des scènes nécessitant une expertise dédiée.</li></ul>
    <div class="callout danger"><b>Déploiement</b><p>Le SWAT intervient lorsque le niveau de risque justifie des agents spécialement formés, des équipements renforcés et une coordination stricte.</p></div>`},
  legal:{title:'Legal Service',crumb:'Divisions',intro:'Division chargée du suivi des plaintes, des recherches d’informations et d’enquêtes complémentaires.',content:`
    <h3>Missions principales</h3><ul><li>Analyser et suivre les dépôts de plainte.</li><li>Prendre contact avec les personnes concernées.</li><li>Réaliser des vérifications et enquêtes terrain.</li><li>Conduire des interrogatoires dans le respect des procédures.</li><li>Constituer des dossiers d'enquête propres et exploitables.</li></ul>
    <h3>Méthode</h3><p>Chaque enquête doit reposer sur des éléments identifiables, une chronologie claire et une séparation nette entre faits constatés, témoignages et hypothèses.</p>`},
  rules:{title:'Règlement LSPD',crumb:'Règlements',intro:'Principes internes de comportement, hiérarchie et tenue du fonctionnaire de police.',content:`
    <h3>Règles générales</h3><ul><li>Respect de la hiérarchie administrative.</li><li>Égalité de traitement entre fonctionnaires.</li><li>Évolution fondée sur les compétences et les critères prévus par le service.</li><li>Application des protocoles, procédures et textes en vigueur.</li></ul>
    <h3>Comportement</h3><p>Un agent représente le LSPD par son attitude. Courtoisie, sérieux, maîtrise de soi et respect entre collègues sont attendus en service comme dans les échanges avec la population.</p>
    <h3>Tenue</h3><p>L'uniforme doit être propre, adapté à la mission et porté correctement. Les modifications ou accessoires non conformes doivent être validés selon la chaîne hiérarchique.</p>
    <div class="callout warning"><b>Version serveur</b><p>Cette interface présente une synthèse modernisée de l'ancien règlement. Pour les sanctions et articles détaillés, le texte officiel actuel du serveur doit rester la référence finale.</p></div>`},
  'staff-rules':{title:'Règlement Staff Police',crumb:'Règlements',intro:'Espace prévu pour les règles spécifiques aux membres staff exerçant au sein du LSPD.',content:`
    <h3>Référentiel</h3><p>L'ancien site intégrait ce règlement depuis un document externe. Cette page est prête à recevoir le contenu actualisé directement dans la nouvelle interface.</p>
    <div class="empty">Ajoutez ici la version actuelle du règlement Staff Police pour qu'elle soit intégrée au même design que le reste du site.</div>`}
};

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
    ['rookie','★','Manuel Rookie','Bases, tenue, dispatch, radio et outils du quotidien.','#4ba9f2'],
    ['criminal-procedure','§','Procédures','Arrestations, GAV, médical et saisies.','#65d9a4'],
    ['fto','▲','FTO & Formations','Certifications et spécialisations internes.','#e4bd60'],
    ['swat','◆','Divisions','Unités spécialisées et missions dédiées.','#ff7378'],
    ['rules','☷','Règlements','Cadre interne et standards du département.','#9d8cff'],
    ['miranda','⚖','Droits Miranda','Lecture rapide et procédure associée.','#50c8e8']
  ];
  app.innerHTML = `
    <section class="hero">
      <div class="hero-copy"><span class="kicker">Los Santos Police Department</span><h2>OPS <em>CENTER</em></h2><p>Le centre de documentation opérationnelle du LSPD sur <strong>WOWHITEFA</strong>. Retrouvez rapidement procédures, formations, règles et fiches réflexes dans une interface pensée pour être utilisée en patrouille.</p><div class="hero-actions"><button class="btn btn-primary" data-route="rookie">Commencer le guide Rookie</button><button class="btn btn-secondary" data-route="miranda">Ouvrir les droits Miranda</button></div></div>
      <img src="assets/badge.svg" class="hero-badge" alt="" />
    </section>
    <section class="stats"><div class="stat"><span>Modules</span><strong>${flatItems.length-1}</strong></div><div class="stat"><span>Formations mises en avant</span><strong>4</strong></div><div class="stat"><span>Divisions</span><strong>2+</strong></div><div class="stat"><span>Accès</span><strong>24/7</strong></div></section>
    <div class="section-head"><div><h3>Accès rapide</h3><p>Les ressources les plus utilisées pendant une prise de service.</p></div></div>
    <section class="cards">${categoryCards.map(c=>`<article class="card" data-route="${c[0]}" style="--accent:${c[4]}"><div class="card-icon">${c[1]}</div><h4>${c[2]}</h4><p>${c[3]}</p><span class="card-meta">OUVRIR →</span></article>`).join('')}</section>
    <div class="section-head"><div><h3>Fiches réflexes</h3><p>Actions à garder sous la main.</p></div></div>
    <section class="cards"><article class="card" data-route="radio"><div class="card-icon">⌁</div><h4>Discipline radio</h4><p>Codes de priorité, alphabet et règles d'émission.</p><span class="card-meta">RADIO</span></article><article class="card" data-route="arrest"><div class="card-icon">⛓</div><h4>Arrestation</h4><p>La séquence complète, du constat des faits à la GAV.</p><span class="card-meta">PROCÉDURE</span></article><article class="card" data-route="equipment"><div class="card-icon">✦</div><h4>Prise de service</h4><p>Checklist de tenue et d'équipement avant la patrouille.</p><span class="card-meta">CHECKLIST</span></article></section>`;
}

function page(id){
  const p=PAGES[id]; if(!p){home();return;}
  const current = flatItems.find(i=>i.id===id);
  const siblings = flatItems.filter(i=>i.section===current?.section && i.id!==id).slice(0,5);
  app.innerHTML=`
    <div class="page-header"><div><div class="crumb">${p.crumb}</div><h2>${p.title}</h2><p>${p.intro}</p></div><div class="tag-row"><span class="tag">WOWHITEFA</span><span class="tag">LSPD</span></div></div>
    <div class="page-grid"><article class="article">${p.content}</article><aside class="side-column"><div class="aside-card"><h4>Dans cette section</h4><div class="aside-list">${siblings.map(s=>`<button data-route="${s.id}">${s.title}<br><small>${s.desc}</small></button>`).join('')||'<span style="color:#62798a;font-size:11px">Aucun module lié.</span>'}</div></div><div class="aside-card"><h4>Accès rapide</h4><div class="aside-list"><button data-route="miranda">⚖ Droits Miranda</button><button data-route="radio">⌁ Radio LSPD</button><button data-route="criminal-procedure">§ Procédure pénale</button></div></div></aside></div>`;
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

function doSearch(q){
  q=q.trim().toLowerCase(); if(!q){searchResults.classList.remove('show');return;}
  const hits=flatItems.filter(i=>`${i.title} ${i.desc} ${i.section}`.toLowerCase().includes(q)).slice(0,8);
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
