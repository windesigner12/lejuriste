const express = require("express")
const router = express.Router()


const citationsData = [
    {
        "_id": "1",
        "citationT": "Au jardin de l’Avocat, un procès est un arbre fruitier qui s’enracine et ne meurt pas.",
        "Author": "Proverbe Italien",
        "categoriesT": "Avocat"
    },
    {
        "_id": "2",
        "citationT": "Le droit est le langage du pouvoir.’’",
        "Author": "Foucault",
        "categoriesT": "Droit"
    },
    {
        "_id": "3",
        "citationT": "Il n’y a pas de loi historique inéluctable. Henri Bergson",
        "Author": "Iconnu",
        "categoriesT": "Loi"
    },
    {
        "_id": "4",
        "citationT": "Justice extrême est extrême in justice.  \" ",
        "Author": "Térence",
        "categoriesT": "Justice"
    },
    {
        "_id": "5",
        "citationT": "La justice immanente est rarement imminente.  \"De :Pierre Dac",
        "Author": "Pierre Dac",
        "categoriesT": "Justice"
    },
    {
        "_id": "6",
        "citationT": "Un Avocat est dans un procès ce qu’est un cuisinier dans un repas.",
        "Author": "Aristippe",
        "categoriesT": "Avocat"
    },
    {
        "_id": "7",
        "citationT": "Un Avocat qui a conscience de sa profession se doit aux pauvres comme aux riches, et même plus aux premiers. C’est moins une question d’argent que de justice.",
        "Author": "Arsène Goyette.",
        "categoriesT": "Avocat"
    },
    {
        "_id": "8",
        "citationT": "Que toute loi soit claire, uniforme et précise : L’interpréter, c’est presque la corrompre.",
        "Author": "Voltaire",
        "categoriesT": "Loi"
    },
    {
        "_id": "9",
        "citationT": "Ce n’est pas la loi qu’il faut craindre, mais le juge.",
        "Author": "Proverbe russe",
        "categoriesT": "Juges"
    },
    {
        "_id": "10",
        "citationT": "Quand l’opprimé prend les armes au nom de la justice, il fait un pas sur la terre de l’injustice.",
        "Author": "Romain Rolland",
        "categoriesT": "Justice"
    },
    {
        "_id": "11",
        "citationT": "Le droit est le souverain du monde.",
        "Author": "Mirabeau",
        "categoriesT": "Droit"
    },
    {
        "_id": "12",
        "citationT": "La raison est un merveilleux instrument qui ne sert qu’après coup. Un criminel tue : son Avocat raisonne.",
        "Author": "Maurice Sachs",
        "categoriesT": "Avocat"
    },
    {
        "_id": "13",
        "citationT": "La coutume, cette loi non écrite. Dont le peuple, même aux rois, impose le respect.",
        "Author": "Charles d’Avenant",
        "categoriesT": "Loi"
    },
    {
        "_id": "14",
        "citationT": "Dans le petit monde où vivent les enfants, rien n’est plus délicatement perçu et senti que l’injustice.",
        "Author": "Charles Dickens",
        "categoriesT": "Justice"
    },
    {
        "_id": "15",
        "citationT": "La justice peut marcher toute seule",
        "Author": "Nicolae Lorga",
        "categoriesT": "Justice"
    },
    {
        "_id": "16",
        "citationT": " l’injustice a besoin de béquilles d’arguments",
        "Author": "Voltaire",
        "categoriesT": "Avocat"
    },
    {
        "_id": "17",
        "citationT": "Je devais être fusillé ce matin à dix heures. Mais comme j’avais un bon Avocat, le peloton n’arrivera qu’à six heures trente.",
        "Author": "Woody Allen",
        "categoriesT": "Avocat"
    },
    {
        "_id": "18",
        "citationT": "La pire injustice qu’on peut faire aux gens, c’est de les prendre pour des anges.",
        "Author": "Yves Beauchemin",
        "categoriesT": "Justice"
    },
    {
        "_id": "19",
        "citationT": "La loi doit être la même pour tous, soit qu’elle protège, soit qu’elle punisse.",
        "Author": "Iconnu",
        "categoriesT": "Loi"
    },
    {
        "_id": "20",
        "citationT": "Pour bien juger, il faut s’éloigner un peu de ce que l’on juge, après l’avoir aimé. Cela est vrai des pays, des êtres et de soi-même.",
        "Author": "André Gide",
        "categoriesT": "Juges"
    },
    {
        "_id": "21",
        "citationT": "La seule chose qu’un Avocat ne remet pas en cause c’est la légitimité de sa mère.",
        "Author": "W.C. Fields",
        "categoriesT": "Avocat"
    },
    {
        "_id": "22",
        "citationT": "La loi doit avoir autorité sur les hommes et non les hommes sur la loi.",
        "Author": "Pausanias",
        "categoriesT": "Loi"
    },
    {
        "_id": "23",
        "citationT": "Quand l’Avocat prête, il achète.",
        "Author": "Proverbe Chinois.",
        "categoriesT": "Avocat"
    },
    {
        "_id": "24",
        "citationT": "Un Avocat et une roue de voiture doivent être graissés.",
        "Author": "Proverbe Allemand",
        "categoriesT": "Avocat"
    },
    {
        "_id": "25",
        "citationT": "Mieux vaut condamnation de médecin que de juge.",
        "Author": "Proverbe français",
        "categoriesT": "Juges"
    },
    {
        "_id": "26",
        "citationT": "Les droits de l’homme valent aussi pour les femmes.’’ :",
        "Author": "Sandrine Treiner",
        "categoriesT": "Droit"
    },
    {
        "_id": "27",
        "citationT": "Tu n’as pas besoin d’un Avocat criminel, tu as besoin d’un criminel, Avocat.",
        "Author": "Breaking Bad",
        "categoriesT": "Avocat"
    },
    {
        "_id": "28",
        "citationT": "La loi n’a pas pour objet de faire le bonheur des hommes, mais de les empêcher de se nuire mutuellement.",
        "Author": "Benjamin Constant",
        "categoriesT": "Loi"
    },
    {
        "_id": "29",
        "citationT": "Celui qui sème l’injustice moissonne le malheur.",
        "Author": "Proverbe français",
        "categoriesT": "Justice"
    },
    {
        "_id": "30",
        "citationT": "Que tu sois battu ou content, ton Avocat est toujours gagnant.",
        "Author": "Proverbe Français",
        "categoriesT": "Avocat"
    },
    {
        "_id": "31",
        "citationT": "Le discernement est la principale fonction du juge, et la qualité nécessaire du jugement.",
        "Author": "Jacques Bénigne Bossuet",
        "categoriesT": "Juges"
    },
    {
        "_id": "32",
        "citationT": "La justice vaut mieux que l’adoration.",
        "Author": "Proverbe Kashmiri",
        "categoriesT": "Justice"
    },
    {
        "_id": "33",
        "citationT": "Il y a deux sortes de justice : Vous avez l’Avocat qui connait bien la loi, et l’Avocat qui connait bien le Juge.",
        "Author": "Coluche",
        "categoriesT": "Avocat"
    },
    {
        "_id": "34",
        "citationT": "Le meilleur Avocat du loup c’est lui-même.",
        "Author": "Proverbe Basque",
        "categoriesT": "Avocat"
    },
    {
        "_id": "35",
        "citationT": "Ne jugez personne avant de vous mettre à sa place.’’ Ce vieux proverbe rend tout jugement impossible, car nous ne jugeons quelqu’un que parce que justement nous ne pouvons nous mettre à sa place.",
        "Author": "Emil Michel Cioran",
        "categoriesT": "Juges"
    },
    {
        "_id": "36",
        "citationT": "La loi est dure mais c’est la loi.",
        "Author": "Proverbe romain",
        "categoriesT": "Loi"
    },
    {
        "_id": "37",
        "citationT": "Une injustice, où qu’elle se produise, est une menace pour la justice partout ailleurs, car nous sommes tous pris dans un tissu de relations mutuelles.",
        "Author": "Martin Luther King",
        "categoriesT": "Justice"
    },
    {
        "_id": "38",
        "citationT": "Si le juge était juste, peut-être le criminel ne serait pas coupable.",
        "Author": "Fiodor Dostoïevski",
        "categoriesT": "Juges"
    },
    {
        "_id": "39",
        "citationT": "Personne n’est juge en sa propre cause.",
        "Author": "Saint Thomas d’Aquin",
        "categoriesT": "Juges"
    },
    {
        "_id": "40",
        "citationT": "La nécessité ne connait point de loi.",
        "Author": "Saint Augustin",
        "categoriesT": "Loi"
    },
    {
        "_id": "41",
        "citationT": "On a tous et toutes droit aux mêmes droits!’’",
        "Author": "Jean-Claude Hervé",
        "categoriesT": "Droit"
    },
    {
        "_id": "42",
        "citationT": "Notre conscience est un juge infaillible quand nous ne l’avons pas encore assassinée.",
        "Author": "Honoré de Balzac",
        "categoriesT": "Juges"
    },
    {
        "_id": "43",
        "citationT": "La loi juste n’est point celle qui a son effet sur tous, mais celle qui faite pour tous.",
        "Author": "Joseph de Maistre",
        "categoriesT": "Loi"
    },
    {
        "_id": "44",
        "citationT": "Le client attend l’Avocat, l’Avocat attend le Juge et le Juge attend l’avancement.",
        "Author": "Gabriel Delattre",
        "categoriesT": "Avocat"
    },
    {
        "_id": "45",
        "citationT": "Le droit n’est pas la simple volonté du législateur, il est la volonté du législateur éclairée par la raison.’’",
        "Author": "Montesquieu",
        "categoriesT": "Droit"
    },
    {
        "_id": "46",
        "citationT": "Une injustice commise quelque part est une injustice pour le monde entier : De Martin Luther King",
        "Author": "Iconnu",
        "categoriesT": "Justice"
    },
    {
        "_id": "47",
        "citationT": "Jugez, c’est de toute évidence ne pas comprendre, puisque si l’on comprenait, on ne pourrait pas juger.",
        "Author": "André Malraux",
        "categoriesT": "Juges"
    },
    {
        "_id": "48",
        "citationT": "Faites que le crime paye…devenez Avocat.",
        "Author": "Will Rogers",
        "categoriesT": "Avocat"
    },
    {
        "_id": "49",
        "citationT": "Les hommes naissent libres et égaux en droits. Seulement, par la suite, il y en a qui se marient.",
        "Author": "Marcel Jouhandeau",
        "categoriesT": "Droit"
    },
    {
        "_id": "50",
        "citationT": "Le droit est le reflet des valeurs d’une société.’’",
        "Author": "Hart",
        "categoriesT": "Droit"
    },
    {
        "_id": "51",
        "citationT": "Nécessité fait loi.",
        "Author": "Gabriel Garcia Marquez",
        "categoriesT": "Loi"
    },
    {
        "_id": "52",
        "citationT": "Les mains d’un Avocat sont toujours dans la poche de quelqu’un. Proverbe Italien",
        "Author": "Iconnu",
        "categoriesT": "Avocat"
    },
    {
        "_id": "53",
        "citationT": "Le droit est la règle du jeu social, qui permet à chacun de jouer sa partie sans nuire aux autres,’’",
        "Author": "Raymond Saleilles",
        "categoriesT": "Droit"
    },
    {
        "_id": "54",
        "citationT": "Le bon juge condamne le crime sans condamner le criminel.",
        "Author": "Sénèque",
        "categoriesT": "Juges"
    },
    {
        "_id": "55",
        "citationT": "Malheur à la génération dont les juges méritent d’être jugés.",
        "Author": "Talmud",
        "categoriesT": "Juges"
    },
    {
        "_id": "56",
        "citationT": "Le droit est une science vivante, qui s’adapte aux évolutions de la société et aux besoins des citoyens.’’",
        "Author": "Simone Viel",
        "categoriesT": "Droit"
    },
    {
        "_id": "57",
        "citationT": "Une conscience sans Dieu, c’est un tribunal sans juge.",
        "Author": "Alphonse de Lamartine",
        "categoriesT": "Juges"
    },
    {
        "_id": "58",
        "citationT": "La loi est la raison sans passion",
        "Author": "Aristote",
        "categoriesT": "Loi"
    },
    {
        "_id": "59",
        "citationT": "Aucun homme n’a reçu de la nature le droit de commander aux autres.’’",
        "Author": "Denis Diderot",
        "categoriesT": "Droit"
    },
    {
        "_id": "60",
        "citationT": "La force prime le droit.",
        "Author": "Otton Von Bismarck",
        "categoriesT": "Droit"
    },
    {
        "_id": "61",
        "citationT": "Le droit est la plus puissante des écoles de l'imagination. Jamais poète n'a interprété la nature aussi librement qu'un juriste la réalité.",
        "Author": "Jean Giraudoux",
        "categoriesT": "Droit"
    },
    {
        "_id": "62",
        "citationT": "On accroît la servitude de l'homme en lui accordant des droits qu'il ne peut contrôler.",
        "Author": "Eugène Péguy",
        "categoriesT": "Droit"
    },
    {
        "_id": "63",
        "citationT": "La loi n’est pas une simple idée, c’est une force.",
        "Author": "Victor Hugo",
        "categoriesT": "Loi"
    },
    {
        "_id": "64",
        "citationT": "La vengeance est une justice sauvage.",
        "Author": "Francis Bacon",
        "categoriesT": "Justice"
    },
    {
        "_id": "65",
        "citationT": "Ce qui m’a dégoûté de la profession d’Avocat, c’est la profusion de choses inutiles dont on voulut charger ma cervelle. Au fait ! Est ma devise.",
        "Author": "Voltaire.",
        "categoriesT": "Avocat"
    },
    {
        "_id": "66",
        "citationT": "Le Pape est l’Avocat de Dieu. Dommage que son client soit mort. Francis Picabia",
        "Author": "Iconnu",
        "categoriesT": "Avocat"
    },
    {
        "_id": "67",
        "citationT": "Justice extrême est extrême injustice.",
        "Author": "Publius Terentius Afer Térence",
        "categoriesT": "Justice"
    },
    {
        "_id": "68",
        "citationT": "Si un homme commet une infraction à la loi en état d’ivresse, qu’il soit puni doublement.",
        "Author": "Pittacos",
        "categoriesT": "Loi"
    },
    {
        "_id": "69",
        "citationT": "Quand la justice n’est pas juste, l’injustice est exacte.",
        "Author": "Pierre Dac",
        "categoriesT": "Justice"
    },
    {
        "_id": "70",
        "citationT": "L’injustice est muette et la justice crie. De: Jean de Rotrou.",
        "Author": "Jena de Rotrou",
        "categoriesT": "Justice"
    },
    {
        "_id": "71",
        "citationT": "L’homme ne saurait connaître la loi, mesurer ses limites, qu’en passant outre.",
        "Author": "Arthur Adamov",
        "categoriesT": "Loi"
    },
    {
        "_id": "72",
        "citationT": "Le droit est la mesure commune du juste et de l’injuste.’’",
        "Author": "Saint Thomas d’Aquin",
        "categoriesT": "Droit"
    },
    {
        "_id": "73",
        "citationT": "Toute loi trop souvent transgressée est mauvaise : c’est au législateur à l’abroger ou à la changer.",
        "Author": "Marguerite Yourcenar",
        "categoriesT": "Loi"
    },
    {
        "_id": "74",
        "citationT": "Ce n’est pas toujours la plume, mais souvent le fusil qui rédige la loi. Proverbe Magyar",
        "Author": "Iconnu",
        "categoriesT": "Loi"
    },
    {
        "_id": "75",
        "citationT": "Rien n’empêche qu’on soit un bon juge, un brave guerrier, un homme d’État habile, quand on a eu un bon père calculateur.",
        "Author": "Voltaire",
        "categoriesT": "Juges"
    },
    {
        "_id": "76",
        "citationT": "Les gens ne supportent pas le sentiment d’injustice. La pauvreté, le froid, même la faim, sont plus supportable que l’injustice.",
        "Author": "Millicent Fenwick",
        "categoriesT": "Justice"
    },
    {
        "_id": "77",
        "citationT": "Un Avocat incompétent peut retarder un procès pendant des mois ou des années. Un Avocat compétent encore plus longtemps.",
        "Author": "Evelle Younguer",
        "categoriesT": "Avocat"
    },
    {
        "_id": "78",
        "citationT": "Il est plus facile d’ouvrir une huître sans couteau que la bouche d’un Avocat sans avance.",
        "Author": "Barten Holyday",
        "categoriesT": "Avocat"
    },
    {
        "_id": "79",
        "citationT": "Quand l’opprimé prend les armes au nom de la justice, il fait un pas sur la terre de l’injustice.",
        "Author": "Albert Camus",
        "categoriesT": "Justice"
    },
    {
        "_id": "80",
        "citationT": "A la minute où vous lisez quelque chose que vous ne comprenez pas, vous pouvez être sûr que c’est un Avocat qui l’a rédigé.",
        "Author": "Will Rogers",
        "categoriesT": "Avocat"
    },
    {
        "_id": "81",
        "citationT": "La gloire d’un bon Avocat consiste à gagner de mauvais procès.",
        "Author": "Balzac",
        "categoriesT": "Avocat"
    },
    {
        "_id": "82",
        "citationT": "Le droit est la sagesse humaine qui a pour objet les rapports humains.’’",
        "Author": "Portalis.",
        "categoriesT": "Droit"
    },
    {
        "_id": "83",
        "citationT": "Un bon Avocat connait la loi",
        "Author": " un Avocat malin emmène le juge déjeuner. Mark Twain",
        "categoriesT": "Iconnu"
    },
    {
        "_id": "84",
        "citationT": "L’amour de la justice n’est pour la plupart des hommes que la crainte de souffrir l’injustice.",
        "Author": "François de la Rochefoucauld",
        "categoriesT": "Justice"
    },
    {
        "_id": "85",
        "citationT": "Un Avocat sans histoire ni littérature est un mécanicien, un simple maçon ouvrier; s’il en possède quelque connaissance, il peut se dire architecte.",
        "Author": "Walter Scott",
        "categoriesT": "Avocat"
    },
    {
        "_id": "86",
        "citationT": "La vérité jaillira de l’apparente injustice.",
        "Author": "Albert Camus",
        "categoriesT": "Justice"
    },
    {
        "_id": "87",
        "citationT": "Le droit est l’œuvre de la raison, mais il n’est pas toujours raisonnable.’’",
        "Author": "Paul Valéry",
        "categoriesT": "Droit"
    },
    {
        "_id": "88",
        "citationT": "Jugez les autres comme vous désirez être jugé.",
        "Author": "Proverbe français.",
        "categoriesT": "Juges"
    },
    {
        "_id": "89",
        "citationT": "Les lois sont des toiles d’araignées à travers lesquelles passent les grosses mouches et où restent les petites.",
        "Author": "Honoré de Balzac",
        "categoriesT": "Loi"
    },
    {
        "_id": "90",
        "citationT": "La loi ne donne pas les mêmes droits au pauvre qu’au riche.",
        "Author": "Plaute",
        "categoriesT": "Loi"
    },
    {
        "_id": "91",
        "citationT": "S’il n’y avait pas d’injustice, on ignorait jusqu’au nom de la justice :",
        "Author": "Héraclite d’Éphèse",
        "categoriesT": "Justice"
    },
    {
        "_id": "92",
        "citationT": "Mieux vaut un âne vivant qu’un Avocat mort. De Proverbe Niçois",
        "Author": "Iconnu",
        "categoriesT": "Avocat"
    },
    {
        "_id": "93",
        "citationT": "Le droit est le rapport de l’être à l’être.",
        "Author": "Hegel",
        "categoriesT": "Droit"
    },
    {
        "_id": "94",
        "citationT": "Renoncer à sa liberté c’est renoncer à sa qualité d’homme, aux droits de l’humanité, même à ses devoirs.’’",
        "Author": "Jean Jacques Rousseau",
        "categoriesT": "Droit"
    },
    {
        "_id": "95",
        "citationT": "Droit et Justice ! La meilleure marque de maquillage qui soit au monde, résultats garantis !",
        "Author": "Pierre Pelot",
        "categoriesT": "Droit"
    },
    {
        "_id": "96",
        "citationT": "Le droit est le gardien de la dignité humaine.’’",
        "Author": "Robert Badinter",
        "categoriesT": "Droit"
    },
    {
        "_id": "97",
        "citationT": "Mieux vaut une souris dans la gueule du chat qu’un client aux mains de l’Avocat.",
        "Author": "Proverbe Italien",
        "categoriesT": "Avocat"
    },
    {
        "_id": "98",
        "citationT": "La loi est faite pour le peuple et non le peuple pour la loi.",
        "Author": "Montesquieu",
        "categoriesT": "Loi"
    },
    {
        "_id": "99",
        "citationT": "Qui a le droit avec soi peut aller le front haut.",
        "Author": "Sophocle",
        "categoriesT": "Droit"
    },
    {
        "_id": "100",
        "citationT": "Vérité ou pas, l’argent ça te baise et c’est un Avocat qui te l’apprendra.",
        "Author": "Iconnu",
        "categoriesT": "Avocat"
    },
    {
        "_id": "101",
        "citationT": "C’est quand les gens commencent à dire la vérité qu’ils ont souvent le plus besoin d’un Avocat.",
        "Author": "P.D. James",
        "categoriesT": "Avocat"
    },
    {
        "_id": "102",
        "citationT": "La pire injustice n’est pas de naitre avec peu mais de ne pas pouvoir espérer mieux.",
        "Author": "",
        "categoriesT": "Justice"
    },
    {
        "_id": "103",
        "citationT": "Tous les Juifs de la confection veulent que leur fils soit Avocat ou chirurgien pour le prestige et la sécurité.",
        "Author": "Michel Cymes",
        "categoriesT": "Avocat"
    },
    {
        "_id": "104",
        "citationT": "L’Avocat :  Oui, mais ça fait vivre tant de monde à commencer par vous et moi.’’",
        "Author": "Iconnu",
        "categoriesT": "Avocat"
    },
    {
        "_id": "105",
        "citationT": "Un juge populaire est un juge sans avenir.",
        "Author": "Olivier de Tissot",
        "categoriesT": "Juges"
    },
    {
        "_id": "106",
        "citationT": "Un juge habitué est un juge mort pour la justice.",
        "Author": "Charles Péguy",
        "categoriesT": "Juges"
    },
    {
        "_id": "107",
        "citationT": "Une loi doit avant tout être une loi juste.",
        "Author": "Anonyme",
        "categoriesT": "Loi"
    },
    {
        "_id": "108",
        "citationT": "La loi doit protéger la liberté publique et individuelle contre l’oppression de ceux qui gouvernent. Anonyme",
        "Author": "Iconnu",
        "categoriesT": "Loi"
    },
    {
        "_id": "109",
        "citationT": "L’injustice environnementale va de pair avec l’injustice sociale.",
        "Author": "François Mitterrand",
        "categoriesT": "Justice"
    },
    {
        "_id": "110",
        "citationT": "La justice est la sanction des injustices établies. De: Anatole France",
        "Author": "Anatole France",
        "categoriesT": "Justice"
    },
    {
        "_id": "111",
        "citationT": "Pour vivre heureux dans la profession d’Avocat, il ne faut pas avoir de cœur.",
        "Author": "André Hallée",
        "categoriesT": "Avocat"
    },
    {
        "_id": "112",
        "citationT": "Si tous ceux qui font le serment de dire la vérité observaient leur serment, il n’y aurait plus procès, plus d’Avocat, plus de Juge; les palais de justice seraient déserts, car qu’est-ce qu’on viendrait y faire? De Paul Toupin",
        "Author": "Iconnu",
        "categoriesT": "Avocat"
    },
    {
        "_id": "113",
        "citationT": "Ne jugez point sur l’apparence, ne jugez jamais rien que sur des preuves. Il n’y a pas de meilleures règles.",
        "Author": "Charles Dickens",
        "categoriesT": "Juges"
    },
    {
        "_id": "114",
        "citationT": "Le jugement implique aussi la condamnation du juge. De Louis Scutenaire",
        "Author": "Iconnu",
        "categoriesT": "Juges"
    },
    {
        "_id": "115",
        "citationT": "Ce qu’il a y a de meilleur dans l’Avocat, c’est qu’il soit là quand il n’y a plus personne. De Philippe Dumas.",
        "Author": "Iconnu",
        "categoriesT": "Avocat"
    },
    {
        "_id": "116",
        "citationT": "Qui ne défend pas ses droits mérite de les perdre.’’",
        "Author": "Gérard Haas",
        "categoriesT": "Droit"
    },
    {
        "_id": "117",
        "citationT": "Il vaut mieux qu’une injustice se produise plutôt que le monde soit sans loi.",
        "Author": "Johann Wolfgang Von Goethe",
        "categoriesT": "Loi"
    },
    {
        "_id": "118",
        "citationT": "Tous les hommes, femmes comprises, naissent prisonniers et inégaux, ce que le droit doit essayer de corriger dans la mesure du possible.”",
        "Author": "Philippe Sollers",
        "categoriesT": "Droit"
    },
    {
        "_id": "119",
        "citationT": "Nécessité n’a pas de loi.",
        "Author": "Proverbe français",
        "categoriesT": "Loi"
    },
    {
        "_id": "120",
        "citationT": "Le Procureur :  C’est pourtant ignoble de tuer.’’",
        "Author": "Iconnu",
        "categoriesT": "Avocat"
    },
    {
        "_id": "121",
        "citationT": "Un Jury est un groupe de douze personnes d’ignorance moyenne, réunies par tirage au sort pour décider qui, de l’accusé ou de la victime, a le meilleur Avocat.",
        "Author": "Herbert Spencer.",
        "categoriesT": "Avocat"
    },
    {
        "_id": "122",
        "citationT": "Le droit est l’œuvre commune de la raison et du temps.’’",
        "Author": "Duguit",
        "categoriesT": "Droit"
    },
    {
        "_id": "123",
        "citationT": "Quand on a péché par injustice, il ne suffit pas de souffrir justement, il faut souffrir l’injustice",
        "Author": "inconnu",
        "categoriesT": "Justice"
    },
    {
        "_id": "124",
        "citationT": "Bon Sang, je passe pour un sale con. Pire pour un Avocat.",
        "Author": "Bill Clinton",
        "categoriesT": "Avocat"
    },
    {
        "_id": "125",
        "citationT": "Les droits sans obligations, c'est l'anarchie.",
        "Author": "Lessia Oukrainka",
        "categoriesT": "Droit"
    },
    {
        "_id": "126",
        "citationT": "Un Avocat ferait n’importe quoi pour gagner un procès, parfois il pourrait même dire la vérité.",
        "Author": "Patrick Murray",
        "categoriesT": "Avocat"
    },
    {
        "_id": "127",
        "citationT": "Le droit est le minimum d’éthique indispensable à la survie d’une communauté.",
        "Author": "Hans Kelsen",
        "categoriesT": "Droit"
    },
    {
        "_id": "128",
        "citationT": "Un accusé est cuit quand son Avocat n’est pas cru.",
        "Author": "Pierre Dac",
        "categoriesT": "Avocat"
    },
    {
        "_id": "129",
        "citationT": "Le plus grand mal, à part l’injustice, serait que l’auteur ne paie la peine de sa faute. De Platon",
        "Author": "Platon",
        "categoriesT": "Justice"
    },
    {
        "_id": "130",
        "citationT": "Il est plus désirable de cultiver le respect du bien que le respect de la loi.",
        "Author": "Henri David Thoreau",
        "categoriesT": "Loi"
    },
    {
        "_id": "131",
        "citationT": "Où finit la loi, commence la tyrannie.",
        "Author": "William Pitt",
        "categoriesT": "Loi"
    },
    {
        "_id": "132",
        "citationT": "Le droit est le plus grand des biens, car il est le fondement de la liberté.’’",
        "Author": "Cicéron",
        "categoriesT": "Droit"
    },
    {
        "_id": "133",
        "citationT": "Même un putain de loup-garou a le droit à un Avocat.",
        "Author": "Las Vegas Parano",
        "categoriesT": "Avocat"
    },
    {
        "_id": "134",
        "citationT": "Combattre maladroitement pour une juste cause vaut mieux que d’être le redoutable soldat de l’injustice.",
        "Author": " Raimond VI",
        "categoriesT": "Justice"
    },
    {
        "_id": "135",
        "citationT": "Tous les hommes ont les mêmes droits... Mais du commun lot, il en est qui ont plus de pouvoirs que d'autres. Là est l'inégalité.",
        "Author": "Aimé Césaire",
        "categoriesT": "Droit"
    },
    {
        "_id": "136",
        "citationT": "Où commence le mystère finit la justice.",
        "Author": "Edmund Burke",
        "categoriesT": "Justice"
    },
    {
        "_id": "137",
        "citationT": "Pour juger quelqu’un, jugez les intentions qu’il vous prête.",
        "Author": "Paul Valéry",
        "categoriesT": "Juges"
    },
    {
        "_id": "138",
        "citationT": "La Justice c’est l’injustice équitablement partagée.",
        "Author": "Maurice Chapelan",
        "categoriesT": "Justice"
    },
    {
        "_id": "139",
        "citationT": "En toute chose, nous ne pouvons être jugés que par nos pairs.",
        "Author": "Honoré de Balzac",
        "categoriesT": "Juges"
    },
    {
        "_id": "140",
        "citationT": "Les délinquants font moins de mal qu’un mauvais juge.",
        "Author": "Francisco de Quevedo",
        "categoriesT": "Juges"
    },
    {
        "_id": "141",
        "citationT": "Ne l’oubliez jamais : celui qui laisse commettre une injustice ouvre la voie à d’autres injustices",
        "Author": "Iconnu",
        "categoriesT": "Justice"
    },
    {
        "_id": "142",
        "citationT": "Il n’est pas nécessaire d’être Avocat ou Magistrat pour savoir que la légalité et la justice sont loin d’être synonymes.",
        "Author": "Adolphe-Basile Routhier",
        "categoriesT": "Avocat"
    }
]

router.get("/citations",(req,res)=> {
 res.send(citationsData)
})

module.exports=router