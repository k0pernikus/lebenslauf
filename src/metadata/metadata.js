module.exports = {
  name: 'Philipp Kretzschmar',
  title: 'Entwickler aus Hamburg',
  facts: {
    '<i class="fa fa-home fact-icon"></i>Wohnort': '<a href="https://www.google.com/maps/place/Billstedt+Hamburg">Hamburg</a>',
    '<i class="fa fa-envelope fact-icon"></i>E-Mail': '<a href="mailto:philipp.kretzschmar@gmail.com">philipp.kretzschmar@gmail.com</a>',
    '<i class="fa fa-phone fact-icon"></i>Telefon': '<a href="tel:+4915773874337">01577-3874337</a>',
  },
  skills: [
    ['php', 100],
    ['phpstorm', 80],
    ['Symfony', 90],
    ['Laravel', 50],
    ['typescript', 80],
    ['nodejs', 80],
    ['linux', 70],
    ['git', 80],
    ['docker', 80],
    ['oop', 90],
    ['tdd', 80],
    ['scrum', 70],
  ],
  positions: [
    {
      title: 'Senior Entwickler DEMV',
      period: 'Juli 2020 - September 2022',
      skills: ['php', 'yi@1.1', 'mysql', 'docker', 'laravel', 'vuejs', 'unit tests'],
      contents: `
Wartung und Weiterentwicklung der Webapplikation des DEMV, damit Versicherungsmakler ihren Kundenstamm (teil)autotmatisiert verwalten können. Aufgaben umfassen Datenimport über GDV-Dateien um Kundenstamm aktuell zu halten (persönliche Vertragsdaten, Schäden). Weiterentwicklung der Maklersoftware basierend auf dem yi-Framework, sodass Makler ihren Automatiserungsgrad erkennen und ausbauen können. Konzeption und Umsetzung Ausbaustufe, sodass Makler mit ihren Kunden in Kontakt treten können und relevante Kundendaten nicht manuell eingegeben werden müssen. Begleitung der Umgestaltung, dass Teile der Bestandssoftware mittels Laravel neu implementiert wird.
`
    },
    {
      title: 'Software Developer Dreamlings GmbH',
      period: 'Mai 2015 – Juni 2020',
      skills: [
        'php', 'symfony', 'typescript', 'scala', 'tdd', 'unit tests','functional tests', 'mysql', 'nats-io', 'aws', 'docker'],
      contents: `
Für das Online-Reisebüro für Kreuzfahrten war ich verantwortlich für Preisdatenimport für verschiedene Passagierkombinationen aus unterschiedlichen Quellen. Darüber hinaus Konzpetionierung, Implementierung und Wartung von interner Buchungsschnittstelle, die externe Reedereei-Buchungs-Schnittstellen abstrahiert und intern einheitlich nutzbar macht. Großer Fokus auf testgetriebene Entwicklung (Unit Tests, functional tests). Verschiedene Technolgien eingesetzt, von php, über typescript/nodejs, bis hin zu scala.
`
    },
    {
      title: 'Junior Entwickler hauptsache.net',
      period: '2013 - 2015',
      skills: ['php', 'symfony', 'twig', 'javascript', 'jquery'],
      contents: `
Fullstackentwicklung als Asset-Datenbank (Bilder, PDF, Modelldaten) für einen großen internationalen Windkraftanlagenhersteller. Backend mittels symfony2, Frontend auf Basis von jQuery.
`
    },
    {
      // hack to force pagebreak in pdf view
      title: false,
      period: false,
      skills: [],
      contents: ``,
    },
    {
      title: 'Junior Entwickler pilot',
      period: '2013',
      skills: ['php', 'javascript'],
      contents: `
Wartung verschiedener Online-Marketing-Apps.
`
    },
    {
      title: 'Auszubildender bei Spot Media AG / Commerce Plus',
      period: '2010 - 2013',
      skills: ['php', 'javascript', 'magento', 'symofony1.4'],
      contents: `
Implementierung verschiedener Projekte für Kunden. Wartung verschiedener Online-Shops und Online-Marketing-Kampagnen.
`
    }
  ],
  experience: [
    {
      header: 'KMK Fremdsprachenzertifikat',
      skills: ['english'],
      contents: `
Verhandlungssicher Englischkenntnisse C2
`
    },
    {
      header: 'Meetups',
      skills: ['jsunconf@hamburg', 'phpunonf@hamburg', 'symfonylive@berlin', 'jsconf@berlin', 'meetups'],
      contents: `
Ich nehme gern an (Un)Conferenzen Teil und besuche gern Workshops. Ich habe bspw. auf der JavaScript Usergroup einen Vortrag gehalten (Golden Master Tests anhand eines Bestandprojekts mittels nock-Libary). Darüber hinaus Teilnahme an Veranstaltungen des Agilen Norden e.V.
`
    }
  ]
};
