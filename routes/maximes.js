const express = require("express")
const router = express.Router()


const maximesData = [
    {
        "_id": "1",
        "Terms": "Prior tempore, potior jure",
        "DescriptionT": "le premier en date est le premier en droit."
    },
    {
        "_id": "2",
        "Terms": "Justicia est suum cuique tribuere",
        "DescriptionT": "La justice c’est rendre à quelqu’un ce qui lui revient"
    },
    {
        "_id": "3",
        "Terms": "De in rem verso",
        "DescriptionT": "En restitution de la chose (action)."
    },
    {
        "_id": "4",
        "Terms": "Justicia est ars boni et aequi",
        "DescriptionT": "Le droit est l’art du bien et de l’équité."
    },
    {
        "_id": "5",
        "Terms": "Expresis verbis",
        "DescriptionT": "Dans les termes même de la loi, ce qui est clairement exprimé."
    },
    {
        "_id": "6",
        "Terms": "Nemo es supra legem",
        "DescriptionT": "Nul n’est au-dessus de la loi"
    },
    {
        "_id": "7",
        "Terms": "Poenalia sunt restrigenda",
        "DescriptionT": "Les lois penales sont d’interpretation strictes."
    },
    {
        "_id": "8",
        "Terms": "Error communis facit jus",
        "DescriptionT": "L’erreur commune crée le droit."
    },
    {
        "_id": "9",
        "Terms": "Pacta sunt servanda",
        "DescriptionT": "Tous les contrats doivent être respectés par les parties qui y sont liées"
    },
    {
        "_id": "10",
        "Terms": "In bonis",
        "DescriptionT": "Débiteur en pleine jouissance de ses droits et biens."
    },
    {
        "_id": "11",
        "Terms": "Intuitu personae",
        "DescriptionT": "En raison de la personne."
    },
    {
        "_id": "12",
        "Terms": "Actori incumbit probation",
        "DescriptionT": "La charge de la preuve incombe au demandeur."
    },
    {
        "_id": "13",
        "Terms": "Fraus omnia corrumpit",
        "DescriptionT": "La fraude corrompt tout."
    },
    {
        "_id": "14",
        "Terms": "Dura lex, sed lex",
        "DescriptionT": "La loi est dure, mais c’est la loi."
    },
    {
        "_id": "15",
        "Terms": "Neme auditur propriam turpitudinem allegans",
        "DescriptionT": "(Principe) Nul ne peut se prévaloir de sa propre turpitude (turpitude = comportement frauduleux, dolosif, illégal…)."
    },
    {
        "_id": "16",
        "Terms": "In dubio pro reo",
        "DescriptionT": "Le doute profite à l’accusé. / Dans le doute le Juge est tenu de trancher en faveur de l’accusé"
    },
    {
        "_id": "17",
        "Terms": "Execptio non adimpleti contractus",
        "DescriptionT": "Exception d’inexécution."
    },
    {
        "_id": "18",
        "Terms": "Contra legem",
        "DescriptionT": "A l’encontre de la loi."
    },
    {
        "_id": "19",
        "Terms": "In bis in idem",
        "DescriptionT": "On ne peut pas être jugé une seconde fois pour les mêmes faits."
    },
    {
        "_id": "20",
        "Terms": "Bonus dolus",
        "DescriptionT": "« le bon dol » est un petit mensonge, une exagération qui ne peut conduire à la nullité du contrat pour vice du consentement"
    },
    {
        "_id": "21",
        "Terms": "Habilis ad nuptia habilis ad pacta nuptiae",
        "DescriptionT": "Celui qui est habile à se marier est capable de donner son consentement au contrat de mariage."
    },
    {
        "_id": "22",
        "Terms": "Locus regit actum",
        "DescriptionT": "Loi du lieu de l'acte"
    },
    {
        "_id": "23",
        "Terms": "Damnum emergens",
        "DescriptionT": "Perte éprouvée."
    },
    {
        "_id": "24",
        "Terms": "Terra nullius",
        "DescriptionT": "Terre inhabitée"
    },
    {
        "_id": "25",
        "Terms": "Jus sanguinis",
        "DescriptionT": "En droit civil désigne le droit du sang. C est la détermination de la nationalité d après la filiation de l individu."
    },
    {
        "_id": "26",
        "Terms": "Penitus extranei",
        "DescriptionT": "Complètement étrangers"
    },
    {
        "_id": "27",
        "Terms": "In concreto",
        "DescriptionT": "Apprécié selon les faits/ concrètement."
    },
    {
        "_id": "28",
        "Terms": "Cessante ratione legis, cessat ejus dispositio",
        "DescriptionT": "La loi ne s’applique plus lorsque ses motifs ont disparu."
    },
    {
        "_id": "29",
        "Terms": "Casus belli",
        "DescriptionT": "Cas de guerre"
    },
    {
        "_id": "30",
        "Terms": "De cujus",
        "DescriptionT": "Le défunt. / Personne dont la succession est ouverte"
    },
    {
        "_id": "31",
        "Terms": "Verba volent scipta manent",
        "DescriptionT": "Les paroles s’envolent, les écrits restent et font preuves."
    },
    {
        "_id": "32",
        "Terms": "In limine litis",
        "DescriptionT": "Dès le début de la procédure / avant toute défense au fond"
    },
    {
        "_id": "33",
        "Terms": "De lege lata",
        "DescriptionT": "En vertu de la loi en vigueur."
    },
    {
        "_id": "34",
        "Terms": "Condominium",
        "DescriptionT": "Désigne un territoire dont la souveraineté est exercée conjointement par deux autorités"
    },
    {
        "_id": "35",
        "Terms": "Jus civile",
        "DescriptionT": "Désigne le droit privé propre à chaque société."
    },
    {
        "_id": "36",
        "Terms": "Conscientia mille testes",
        "DescriptionT": "La conscience vaut mille témoignages."
    },
    {
        "_id": "37",
        "Terms": "De in rem verso",
        "DescriptionT": "Action en cas d’enrichissement sans cause"
    },
    {
        "_id": "38",
        "Terms": "De facto",
        "DescriptionT": "De fait"
    },
    {
        "_id": "39",
        "Terms": "Juris et de jure",
        "DescriptionT": "Expression se disant d une présomption qui est irréfragable, c est-à-dire absolue et qui ne peut être combattue par une preuve contraire."
    },
    {
        "_id": "40",
        "Terms": "Nemo censetur ignorare legem",
        "DescriptionT": "(Principe) Nul n’est censé ignorer la loi."
    },
    {
        "_id": "41",
        "Terms": "Lex societatis",
        "DescriptionT": "La loi applicable aux sociétés."
    },
    {
        "_id": "42",
        "Terms": "Corruptissima republica plurimæ leges",
        "DescriptionT": "Les lois sont très nombreuses lorsque l’état est très corrompu"
    },
    {
        "_id": "43",
        "Terms": "Ex aequo et bono",
        "DescriptionT": "En équité."
    },
    {
        "_id": "44",
        "Terms": "Inter parter",
        "DescriptionT": "Entre les parties ; cela marque l’effet relatif des contrats qui n’ont d’autorité, en principe qu’entre les parties à l’acte."
    },
    {
        "_id": "45",
        "Terms": "Jus utendi",
        "DescriptionT": "Désigne le droit du propriétaire d un bien de l utiliser."
    },
    {
        "_id": "46",
        "Terms": "Nemo dat quod non habet",
        "DescriptionT": "Personne ne peut donner ce qu’il n’a pas."
    },
    {
        "_id": "47",
        "Terms": "Post nuptias",
        "DescriptionT": "Après le mariage"
    },
    {
        "_id": "48",
        "Terms": "Exequatu",
        "DescriptionT": "Procédure visant à donner dans un état force exécutoire à un jugement rendu à l’étranger."
    },
    {
        "_id": "49",
        "Terms": "Ad hoc",
        "DescriptionT": "Pour cela, à cet effet. Par exemple, administrateur ad hoc, nommé pour une mission précise."
    },
    {
        "_id": "50",
        "Terms": "Justitia omnibus",
        "DescriptionT": "La justice est la même pour tous"
    },
    {
        "_id": "51",
        "Terms": "Non bis in idem",
        "DescriptionT": "Jamais deux fois pour la même chose. Sign"
    },
    {
        "_id": "52",
        "Terms": "Nemo plus juris ad alium transferre potest quam ipse habet",
        "DescriptionT": "(Principe) Personne ne peut transférer à autrui plus de droits qu’il n’en a lui-même"
    },
    {
        "_id": "53",
        "Terms": "Ad litem",
        "DescriptionT": "Pour le procès"
    },
    {
        "_id": "54",
        "Terms": "Animus",
        "DescriptionT": "« esprit » désigne l’intention d’une personne ou l’élément intentionnel d’un comportement."
    },
    {
        "_id": "55",
        "Terms": "Jus abutendi",
        "DescriptionT": "Désigne le droit du propriétaire d un bien d en disposer."
    },
    {
        "_id": "56",
        "Terms": "Erga omnes",
        "DescriptionT": "A l’ égard de tous."
    },
    {
        "_id": "57",
        "Terms": "Confessio est regina probatio",
        "DescriptionT": "La confession (l’aveu) est la reine des preuves"
    },
    {
        "_id": "58",
        "Terms": "Jus soli",
        "DescriptionT": "Désigne le droit du sol. C est la détermination de la nationalité d après le lieu de naissance de l individu."
    },
    {
        "_id": "59",
        "Terms": "Abusus",
        "DescriptionT": "Décrit l’attribut du droit de propriété qui permet à son titulaire de disposer du bien, en le détruisant ou en le transmettant."
    },
    {
        "_id": "60",
        "Terms": "Ubi societas ubi jus",
        "DescriptionT": "Là où est la société est la loi."
    },
    {
        "_id": "61",
        "Terms": "De lege ferenda",
        "DescriptionT": "En vertu de la loi à venir."
    },
    {
        "_id": "62",
        "Terms": "Jura novit curia",
        "DescriptionT": "La Cour connaît le droit."
    },
    {
        "_id": "63",
        "Terms": "Vox populi",
        "DescriptionT": "La voix du peuple.ssss"
    },
    {
        "_id": "64",
        "Terms": "Usus",
        "DescriptionT": "Décrit l’attribut du droit de propriété qui permet à son titulaire de jouir et d’utiliser un bien."
    },
    {
        "_id": "65",
        "Terms": "Ultra petita",
        "DescriptionT": "Au-delà de ce qui a été demande."
    },
    {
        "_id": "66",
        "Terms": "Nullum crimen, nulla poena sine lege",
        "DescriptionT": "(Principe de la légalité) pas de crime, pas de peine, sans loi."
    },
    {
        "_id": "67",
        "Terms": "Ubi lex non distinguit, nec nos distinguere debemus",
        "DescriptionT": "(Principe) Là où la loi ne distingue pas, il n’y a pas lieu de distinguer."
    },
    {
        "_id": "68",
        "Terms": "Jus fruendi",
        "DescriptionT": "Désigne le droit du propriétaire de percevoir les fruits de sa chose."
    },
    {
        "_id": "69",
        "Terms": "Nemo judex in re sua",
        "DescriptionT": "Personne ne juge sa propre cause."
    },
    {
        "_id": "70",
        "Terms": "Accessorium sequitur principale",
        "DescriptionT": "L’accessoire suit le principal."
    },
    {
        "_id": "71",
        "Terms": "Nemo liberalis nisi liberatus",
        "DescriptionT": "Une personne qui a des dettes ne peut pas faire de libéralités."
    },
    {
        "_id": "72",
        "Terms": "Ignorantia juris non excusat",
        "DescriptionT": "L’ignorance de la loi n’est pas une excuse"
    },
    {
        "_id": "73",
        "Terms": "Confessio est regina probatio",
        "DescriptionT": "La confession (l’aveu) est la reine des preuves."
    },
    {
        "_id": "74",
        "Terms": "Non debet calamitas matris ei nocere qui in ventre est",
        "DescriptionT": "Le malheur qui va frapper la mère ne doit pas nuir à celui qui est dans son sein."
    },
    {
        "_id": "75",
        "Terms": "Affectio societatis",
        "DescriptionT": "La volonté des associés de collaborer sur un pied d’égalité à l’œuvre commune."
    },
    {
        "_id": "76",
        "Terms": "De jure",
        "DescriptionT": "De droit"
    },
    {
        "_id": "77",
        "Terms": "Contra factum non datur argument",
        "DescriptionT": "Contre un fait il n’existe pas d’argument."
    },
    {
        "_id": "78",
        "Terms": "In pari causa melior est causa possidentis",
        "DescriptionT": "Lorsqu’aucune des parties n’arrive à établir la preuve, la préférence est de donner à celui qui a la possession de la chose."
    },
    {
        "_id": "79",
        "Terms": "In dubio pro liberta",
        "DescriptionT": "(Principe) Dans le doute, faveur à la liberté."
    },
    {
        "_id": "80",
        "Terms": "Nemo damnatus nisi auditus",
        "DescriptionT": "Que personne ne soit condamne sans qu’il ne soit entendu."
    },
    {
        "_id": "81",
        "Terms": "Nemo dat quod non habet",
        "DescriptionT": "Nul ne peut transferer la propriete d’une chose qui ne lui appartient."
    },
    {
        "_id": "82",
        "Terms": "Pro bono",
        "DescriptionT": "Pour le bien public"
    },
    {
        "_id": "83",
        "Terms": "Contra non valentem agere non currit praescriptio",
        "DescriptionT": "La prescription ne court pas contre celui qui ne peut exercer ses droits."
    },
    {
        "_id": "84",
        "Terms": "Lata sententia judex, desinit esse judex",
        "DescriptionT": "Le Juge cesse d’être juge après avoir rendu son jugement."
    },
    {
        "_id": "85",
        "Terms": "Error communis facit jus",
        "DescriptionT": "L’erreur commune crée le droit"
    },
    {
        "_id": "86",
        "Terms": "Pater is est quem demonstrant nuptiae",
        "DescriptionT": "Le père est celui que le noce demontre."
    },
    {
        "_id": "87",
        "Terms": "Lex specialis derogat legi generali",
        "DescriptionT": "(Principe) La loi spéciale déroge à la loi générale."
    }
]


router.get("/maximes",(req,res)=> {
 res.send(maximesData)
})

module.exports=router