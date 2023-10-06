module.exports = {
  name: 'Philipp Kretzschmar',
  title: 'Entwickler aus Hamburg',
  facts: {
    '<i class="fa fa-home fact-icon"></i>Wohnort': '<a href="https://www.google.com/maps/place/Billstedt+Hamburg">Hamburg</a>',
    '<i class="fa fa-envelope fact-icon"></i>E-Mail': '<a href="mailto:philipp.kretzschmar@gmail.com">philipp.kretzschmar@gmail.com</a>',
    '<i class="fa fa-phone fact-icon"></i>Telefon': '<a href="tel:+4915773874337">01577-3874337</a>',
    '<i class="fa-brands fa-stack-overflow fact-icon"></i>Stackoverflow': '<a href="https://stackoverflow.com/users/457268/k0pernikus">k0pernikus</a>'
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
Wartung und Weiterentwicklung der Webapplikation für Makler des Deutschen Maklerverbundes (DEMV) basierend auf dem yi-Framework. Umsetzung von automatischen Kundendaten-Import, bspw. persönliche Vertragsdaten und Schadensinformationen, über GDV-Dateien, die von Versicherungsgesellschaften bereit gestellt werden. Darüber können Versicherungsmakler ihren Kundenstamm (teil)autotmatisiert verwalten. Weiterentwicklung der Maklersoftware, sodass Makler ihren Automatiserungsgrad erkennen und erweitern können. Konzeption und Umsetzung einer Ausbaustufe, sodass Makler mit ihren Kunden direkt in Kontakt treten können und relevante Kundendaten nicht manuell eingegeben werden müssen, sondern relevante Daten automatisch vorgeschlagen werden. Reimplementierung von Teilen der Bestandssoftware auf Basis von Laravel.
`
    },
    {
      title: 'Software Developer Dreamlines GmbH',
      period: 'Mai 2015 – Juni 2020',
      skills: [
        'php', 'symfony', 'typescript', 'scala', 'tdd', 'unit tests','functional tests', 'e2e tests', 'mysql', 'nats-io', 'aws', 'docker'],
      contents: `
Für das Online-Reisebüro für Kreuzfahrten war ich verantwortlich für Preisdatenimport für verschiedene Passagierkombinationen aus unterschiedlichen Quellen (SOAP API, Rest API, mysql dumps, crawler). Konzpetionierung, Implementierung und Wartung von interner Buchungsschnittstelle, die externe Reedereei-Buchungs-Schnittstellen abstrahiert und intern einheitlich nutzbar macht. Großer Fokus auf testgetriebene Entwicklung (Unit Tests, functional tests). Verschiedene Technolgien eingesetzt, von php (symfony), über typescript/nodejs, bis hin zu scala.

Ich war darüber hinaus am Prozess beteiligt, die Entwicklungsumgebung von ansible auf einen docker / docker-compose Stack umzustellen.

Darüber hinaus auch Einrichtung von Contionous Delivery Pipeline mittels Jenkins und Marathon / mesos.
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
      skills: ['jsunconf@hamburg', 'phpunonf@hamburg', 'symfonylive@berlin', 'jsconf@berlin', 'scrumtisch' ,'meetups'],
      contents: `
Ich nehme gern an (Un)Conferenzen (php, javascript) Teil. Ich habe bspw. auf der JavaScript Usergroup einen Vortrag gehalten (Golden Master Tests anhand eines Bestandprojekts mittels der nock-Libary). Darüber hinaus Teilnahme an Veranstaltungen des Agilen Norden e.V.
`
    }
  ]
};
