/*
Raw gym data - include a different file for different city

NEVER change order of gyms or delete gyms
ONLY append at the end, and mark deleted gyms with 'deleted: true'
BECAUSE progress is stored in user's localStorage by gym index

Entries for each gym:
{
  name: "The Gym Name",                // required
  location: [latitude,longitude],      // required
  district: "A Neighborhood",          // optional, used for sorting by neighborhood
  address: "e.g. street and house#",   // optional, used as label for google maps link
  park: true | "OSM feature",          // optional, potential EX raid location. If string, link to that OSM feature
  exraid: true,                        // optional, confirmed EX raid location (a raid actually happened here)
  deleted: true,                       // optional, used for hiding removed gyms without changing IDs
  
  // added by program in getGyms()
  id: number,                          // index in this list. THIS MUST NEVER CHANGE!
}
*/

function gymData() {
	return {
	city: "DE-MD", // country-city (used in localStorage key to allow tracking multiple cities)
	gyms: [
	{name: "Zille's Eck", district: "Eimsbüttel", address: "Langenfelder Damm 39", location: [53.580078,9.939067]},
	{name: "Blaues Haus Mit Stuckelementen", district: "Eimsbüttel", address: "Rellinger Straße 63", location: [53.577183,9.939458]},
	{name: "Due Baristi Espressobar", district: "Eimsbüttel", address: "Langenfelder Damm Sartoriusstraße", location: [53.578163,9.941346]},
	{name: "Graffiti Wall Nerus", district: "Eimsbüttel", address: "Sartoriusstraße 14", location: [53.57959,9.942266]},
	{name: "Fassade 19. Jahrhundert", district: "Eimsbüttel", address: "Osterstraße 172", location: [53.579002,9.946431]},
	{name: "Zzzischer", district: "Eimsbüttel", address: "Grundstraße Zzzischer", location: [53.577454,9.944533]},
	{name: "Apostelkirche", district: "Eimsbüttel", address: "Bei der Apostelkirche Apostelkirche", location: [53.57592,9.944763]},
	{name: "Hamburger Weinhandelshaus", district: "Eimsbüttel", address: "Faberstraße 21", location: [53.5751,9.944206]},
	{name: "Kirchenturm", district: "Eimsbüttel", address: "Lutterothstraße 100", location: [53.581787,9.943434]},
	{name: "Stonehead", district: "Eimsbüttel", address: "Eidelstedter Weg Sarrin Markt", location: [53.582489,9.948375]},
	{name: "Goldener Zwerg", district: "Eimsbüttel", address: "Odenwaldstraße 6", location: [53.579632,9.952303]},
	{name: "Der Geist", district: "Eimsbüttel", address: "Heußweg 71", location: [53.578335,9.953693]},
	{name: "Streetart Bunker", district: "Eimsbüttel", address: "Eidelstedter Weg 4", location: [53.581261,9.95778]},
	{name: "Guardian", district: "Hoheluft-West", address: "Wrangelstraße 113", location: [53.583721,9.965485]},
	{name: "Stolperstein Louis Glaser", district: "Hoheluft-West", address: "Hoheluftchaussee 125", location: [53.583641,9.969767]},
	{name: "Factory", district: "Hoheluftchaussee", address: "95 Tabakfabrik", location: [53.582237,9.970264]},
	{name: "Hoheluftchaussee 67", district: "69", address: "67 65", location: [53.58123,9.972503]},
	{name: "Seifix Mural", district: "Hoheluft-West", address: "Hoheluftchaussee 85", location: [53.581661,9.971911]},
	{name: "Fahrradfahrerin", district: "Hoheluft-West", address: "Hoheluftchaussee 28", location: [53.579807,9.974788]},
	{name: "Löwe am Weiher", district: "Eimsbüttel", address: "Unnastraße Weiher", location: [53.577614,9.959844], park: "way/100146087"},
	{name: "Engelsornamente", district: "Eimsbüttel", address: "Alardusstraße 1", location: [53.576481,9.961924], park: "way/54684012", exraid: true},
	{name: "Zerstört No60", district: "Eimsbüttel", address: "Tresckowstraße 60", location: [53.576775,9.965963], park: "way/39947189"},
	{name: "Grundriss Philippuskirche", district: "Eimsbüttel", address: "Bismarckstraße 69 B", location: [53.575012,9.966719], park: "way/24854942", exraid: true},
	{name: "Eiscafe Kaifu", district: "Bismarckstraße", address: "51 Eiscafe Kaifu", location: [53.573441,9.9635]},
	{name: "Käppchen Kuchen Company 2006", district: "Eimsbüttel", address: "Eppendorfer Weg 97", location: [53.573582,9.960713]},
	{name: "Beautiful House in Eimsbuettel", district: "Eimsbüttel", address: "Tegetthoffstraße 4", location: [53.572571,9.960648]},
	{name: "U-Bahn-Haltestelle Christuskirche", district: "Eimsbüttel", address: "Fruchtallee 1001378", location: [53.569523,9.962638]},
	{name: "Glocke Christuskirche", district: "Eimsbüttel", address: "Fruchtallee Christuskirche", location: [53.569618,9.96154]},
	{name: "Christuskirche", district: "Eimsbüttel", address: "Fruchtallee Christuskirche", location: [53.569717,9.961479]},
	{name: "Hundeauslaufzone Park", district: "Eimsbüttel", address: "Doormannsweg 15a", location: [53.571156,9.957579]},
	{name: "Iron War Monument", district: "Doormannsweg", address: "12 Hamburg-Haus Eimsbüttel", location: [53.571384,9.956717], park: "way/19729871"},
	{name: "Trimmfit Station", district: "Emilienstraße", address: "55 Spielhaus Wehbers Park", location: [53.572037,9.954226], park: "way/19729871"},
	{name: "U-Bahn Emilienstraße", district: "Eimsbüttel", address: "Fruchtallee 93108", location: [53.571651,9.952742]},
	{name: "Segelschiff mit Moewe", district: "Eimsbüttel", address: "Tornquiststraße 75", location: [53.573429,9.952919], park: "way/19784371"},
	{name: "Restaurant Kim Chi", district: "Eimsbüttel", address: "Tornquiststraße Kim Chi", location: [53.574211,9.950306]},
	{name: "Wandbild Skyline", district: "Eimsbüttel", address: "Osterstraße 74", location: [53.575577,9.955091]},
	{name: "Fassadengesicht", district: "Stellingen", address: "Kieler Straße 266", location: [53.581779,9.934392]},
	{name: "Grünanlage Försterweg", district: "Stellingen", address: "Försterweg 27", location: [53.578934,9.932955], park: "way/99408893"},
	{name: "Dampfmaschine Denkmal", district: "Stellingen", address: "Große Bahnstraße 34", location: [53.573662,9.936819]},
	{name: "Skulptur Kieler Straße", district: "Eimsbüttel", address: "Eimsbütteler Marktplatz Tor", location: [53.57222,9.94237], park: "way/145693846"},
	{name: "Gedenkstein Schöne Marianne", district: "Eimsbüttel", address: "Eimsbütteler Marktplatz Schöne Marianne", location: [53.572151,9.943178], park: "way/145693846"},
	{name: "Brunnen Eimsbusch", district: "Hamburg", address: "Eimsbüttel Glücksburger Platz", location: [53.569592,9.949469]},
	{name: "Straßenbahnring", district: "Straßenbahnring", address: "18 RTL Nord", location: [53.581188,9.9755]},
	{name: "Katzenhaus", district: "Harvestehude", address: "Oberstraße 2", location: [53.577435,9.977812]},
	{name: "Schreitende", district: "Eimsbüttel", address: "Harvestehude Oberstraße", location: [53.57822,9.983128], park: "way/20362343"},
	{name: "Katholische Kirche", district: "Oberstraße", address: "67 Sankt Elisabeth", location: [53.577763,9.985447]},
	{name: "Stolperstein Familie Josias", district: "Harvestehude", address: "Bogenstraße 54", location: [53.574818,9.972672]},
	{name: "Klinker Säule", district: "Harvestehude", address: "Schlankreye 53", location: [53.576046,9.975421], park: "way/37195130"},
	{name: "Die Schreitende", district: "Harvestehude", address: "Oberstraße 14 c", location: [53.575878,9.979033], park: "way/137154561"},
	{name: "Jerusalemkirche", district: "Schäferkampsallee", address: "20357 Hamburg Schäferkampsallee 34", location: [53.569187,9.966973]},
	{name: "Einkaufszettel", district: "Eimsbütteler Chaussee", address: "17 E aktiv markt Holst", location: [53.566467,9.957698]},
	{name: "Früherer Grenzverlauf zwischen Hamburg und Dänisch-Altona", district: "Eimsbüttel", address: "Schulterblatt 134", location: [53.56562,9.958969]},
	{name: "Otto Sponholz 1982", district: "Eimsbüttel", address: "Margaretenstraße Brunnen", location: [53.566002,9.960744], park: "way/137433766"},
	{name: "Feuerwache Alto - Feuer", district: "Eifflerstraße", address: "29 Freiwillige Feuerwehr Altona", location: [53.562153,9.958617]},
	{name: "Rote Flora", district: "Schulterblatt", address: "71 Rote Flora", location: [53.562,9.961582]},
	{name: "Street Art Schanze", district: "Sternschanze", address: "Schulterblatt 11", location: [53.559643,9.963636]},
	{name: "Erika's Eck", district: "Sternschanze", address: "Kampstraße 23", location: [53.561047,9.967418]},
	{name: "S-Bahn Sternschanze", district: "Altona", address: "Sternschanze B81899", location: [53.563934,9.965822]},
	{name: "Wasserturm im Schanzenpark", district: "Sternschanze", address: "6 Mövenpick", location: [53.564697,9.97059]},
	{name: "Bahrenfelder See", district: "Bahrenfeld", address: "Osdorfer Weg Bahrenfelder See", location: [53.565853,9.898642], park: "way/145524396"},
	{name: "Wappen", district: "Bahrenfeld", address: "Friedensallee Bahrenfelder Marktplatz", location: [53.564476,9.901715]},
	{name: "Sculpture in the Wall", district: "Bahrenfeld", address: "Bahrenfelder Chaussee 51", location: [53.565231,9.912431]},
	{name: "1914", district: "Bahrenfeld", address: "Bahrenfelder Chaussee 10", location: [53.564499,9.917329]},
	{name: "Kopfloser Sprayer", district: "Bahrenfeld", address: "Stresemannstraße 285", location: [53.563759,9.933649]},
	{name: "Frühling von Karl-Heinz Engelin", district: "Bahrenfeld", address: "Sibeliusstraße 1", location: [53.561001,9.905392]},
	{name: "Frösche", district: "Bahrenfeld", address: "Bahrenfelder Kirchenweg 54", location: [53.562805,9.909813]},
	{name: "Skulpturen Gasstrasse", district: "Bahrenfeld", address: "Gasstraße 18/2", location: [53.56282,9.913207]},
	{name: "Skulptur Bahrenfeld", district: "Ottensen", address: "Friedensallee 290", location: [53.559708,9.910753]},
	{name: "An dieser Stelle stand das Geburtshaus von Max Brauer", district: "Ottensen", address: "Griegstraße 126", location: [53.559772,9.913269]},
	{name: "Bahrenfelder Uhr", district: "Friedensallee", address: "261 Apotheke am Bahrenfelder Bahnhof", location: [53.558796,9.912519]},
	{name: "Holzschildkröte", district: "Bahrenfeld", address: "Hohenzollernring 144", location: [53.559101,9.920293], park: "way/238289300"},
	{name: "Abstractum", district: "Bahrenfeld", address: "Stahltwiete Phoenixhof", location: [53.561485,9.926731]},
	{name: "Zwangsarbeiter", district: "Ottensen", address: "Friedensallee 126", location: [53.557484,9.916477]},
	{name: "Zwangsarbeitslager bei der Marzipanfabrik", district: "Griegstraße", address: "75 Haus 22 Morgenpost Verlag", location: [53.556465,9.910079]},
	{name: "Ringelpietz-Mural Behringstraße/Griegstraße", district: "Ottensen", address: "Griegstraße 53", location: [53.554211,9.909524]},
	{name: "Denkmalgeschützte Laterne Bülowstraße", district: "Ottensen", address: "Bülowstraße 9", location: [53.552158,9.914674]},
	{name: "Kreuzkirche Ottensen", district: "Hohenzollernring", address: "78a Kreuzkirche", location: [53.553493,9.917948]},
	{name: "Binaercode", district: "Ottensen", address: "Behringstraße 28a", location: [53.554409,9.922963]},
	{name: "Springbrunnen-S2-Hinterhof", district: "Ottensen", address: "Völckersstraße 44", location: [53.557636,9.925972]},
	{name: "Erbaut 1995", district: "Ottensen", address: "Völckersstraße 25", location: [53.556961,9.926351]},
	{name: "Baseball Hund Graffiti", district: "Ottensen", address: "Gaußstraße 124", location: [53.558918,9.931332]},
	{name: "Graffiti", district: "Ottensen", address: "Gaußstraße 60", location: [53.558247,9.932109]},
	{name: "Fabrik", district: "Ottensen", address: "Bahrenfelder Straße 242", location: [53.556435,9.928849]},
	{name: "Zinn-Nonne", district: "Gaußstraße", address: "10 Sharri Bistro", location: [53.555508,9.933573]},
	{name: "Vanishing Waves", district: "Ottensen", address: "Gaußstraße 2", location: [53.555172,9.934267]},
	{name: "Osterkirche", district: "Bei der Osterkirche", address: "17 Evangelische Grundschule an der Osterkirche - Ottensen", location: [53.554878,9.932412]},
	{name: "Graffiti Druck Welten", district: "Ottensen", address: "Bahrenfelder Straße 101a", location: [53.552662,9.929311]},
	{name: "Ottensener Torbogen", district: "Ottensen", address: "Ottenser Hauptstraße 24", location: [53.552135,9.930305]},
	{name: "Knuds Dampfer", district: "Ottensen", address: "Bahrenfelder Straße 67", location: [53.550907,9.929929]},
	{name: "Bahnhof Altona", district: "Altona-Nord", address: "Parkhaus Arko", location: [53.55246,9.93549]},
	{name: "Christuskirche", district: "Roosens Weg", address: "28 Christuskirche Othmarschen", location: [53.553078,9.892469]},
	{name: "Historisches Bauernhaus", district: "Othmarschen", address: "Agathe-Lasch-Weg 2", location: [53.553516,9.896855]},
	{name: "Gestiftet von Frauen u. Jungfrauen Othmarschens 1898", district: "Othmarschen", address: "Liebermannstraße 43", location: [53.55138,9.897363]},
	{name: "Frau Mit Katze", district: "Othmarschen", address: "Elbchaussee 211a", location: [53.546532,9.892123]},
	{name: "Der alte Schwede", district: "Othmarschen", address: "Elbchaussee Alter Schwede", location: [53.544598,9.89568]},
	{name: "Jumper", district: "Othmarschen", address: "Liebermannstraße 12", location: [53.54755,9.900082]},
	{name: "Die Ameisen", district: "Othmarschen", address: "Elbchaussee Die Ameisen", location: [53.54594,9.900533]},
	{name: "Die Pequod von Captain Ahab", district: "Othmarschen", address: "Övelgönne 52", location: [53.544628,9.906395]},
	{name: "Moltke Haus", district: "Othmarschen", address: "Bernadottestraße 77", location: [53.549263,9.906848]},
	{name: "St. Ansgar Kirchturm", district: "Ottensen", address: "Griegstraße 3", location: [53.54953,9.908947]},
	{name: "Schäfer Schafherde Schäferhund", district: "Ottensen", address: "Elbchaussee 129", location: [53.545574,9.916295], park: "way/138963407"},
	{name: "Museumshafen Neumühlen", district: "Wohnunterkunft Hombrook W714", address: "A 7 Elbe 3", location: [53.543552,9.91334]},
	{name: "Museumshafen Oevelgönne", district: "Wohnunterkunft Hombrook W714", address: "A 7 Döns", location: [53.543575,9.913603]},
	{name: "Paternoster Des Lebens", district: "Altona", address: "Ottensen Tönsfeldtstraße", location: [53.549881,9.920125]},
	{name: "Skyline Mural", district: "Ottensen", address: "Fischers Allee 45", location: [53.548904,9.922051]},
	{name: "Modern Art Design House", district: "Ottensen", address: "Elbchaussee 96", location: [53.546211,9.921722], park: "way/73810103"},
	{name: "Die Kupferbrüder", district: "Ottensen", address: "Große Elbstraße 273", location: [53.544609,9.928611]},
	{name: "Makake mit Vogel", district: "Ottensen", address: "Elbchaussee 19", location: [53.545586,9.929824]},
	{name: "Stuhlmannbrunnen 1899", district: "Altona-Altstadt", address: "Platz der Republik Stuhlmannbrunnen", location: [53.549824,9.935443], park: "way/24838973", exraid: true},
	{name: "Altonaer Museum", district: "Museumstraße", address: "23 Altonaer Museum", location: [53.549011,9.93473]},
	{name: "Kaiser-Wilhelm-Denkmal", district: "Altona-Altstadt", address: "Platz der Republik Kaiser Wilhelm I", location: [53.547527,9.935371]},
	{name: "Bronzeplastik auf dem Altonaer Balkon", district: "Altona-Altstadt", address: "Elbberg Maritim", location: [53.54541,9.935116], park: "way/138974313"},
	{name: "Historischer Verladekran", district: "Altona-Altstadt", address: "Große Elbstraße 145a", location: [53.544296,9.935304]},
	{name: "Fähranleger Docklands", district: "Altona-Altstadt", address: "Van-der-Smissen-Straße Dockland (Fischereihafen)", location: [53.543358,9.935177]},
	{name: "Wandrelief Altonaer Spar and Bauverein v. 1905", district: "Altona-Nord", address: "Gerichtstraße 29", location: [53.557796,9.939802]},
	{name: "Obst In Der Wand", district: "Altona-Nord", address: "Haubachstraße 50", location: [53.558681,9.94111]},
	{name: "Versteinerte Kastanie", district: "Altona-Nord", address: "Kaltenkirchener Straße 3", location: [53.56406,9.941066]},
	{name: "Farbenfroh", district: "Altona-Nord", address: "Stresemannstraße 218", location: [53.563198,9.943232]},
	{name: "Bärengruppe", district: "Altona-Nord", address: "Koldingstraße 27", location: [53.564045,9.945765]},
	{name: "Neue Flora", district: "Altona-Nord", address: "Stresemannstraße S Holstenstraße", location: [53.562332,9.949266]},
	{name: "HSV Fanhaus", district: "Altona-Nord", address: "Stresemannstraße 162", location: [53.561985,9.949813], park: "way/136504013", exraid: true},
	{name: "Christuskirche EFG Altona", district: "Suttnerstraße", address: "18 Christuskirche", location: [53.561028,9.950141]},
	{name: "Z-Bricks", district: "Altona-Nord", address: "Stresemannstraße 130", location: [53.561623,9.95286]},
	{name: "Denkmal St. Johannis", district: "Altona-Altstadt", address: "Max-Brauer-Allee Sternbrücke", location: [53.560204,9.953435]},
	{name: "Invalidengrab", district: "Altona-Altstadt", address: "Bei der Johanniskirche 9a", location: [53.558613,9.95305], park: "way/136926129"},
	{name: "Altonaer Spar- und Bauverein", district: "Altona-Nord", address: "Goetheallee 4", location: [53.554077,9.939495]},
	{name: "Is This Vandalism?", district: "Altona-Altstadt", address: "Große Bergstraße 241", location: [53.552132,9.940612]},
	{name: "Chrupalla Stolpersteine", district: "Altona-Altstadt", address: "Große Bergstraße 229", location: [53.552086,9.941763]},
	{name: "Riesiges Insektenhotel", district: "Altona-Altstadt", address: "Max-Brauer-Allee 138", location: [53.55724,9.947732], park: "way/4275521"},
	{name: "Kletteraugust", district: "Altona-Altstadt", address: "Hospitalstraße 111", location: [53.557083,9.948849], park: "way/4275521"},
	{name: "The Lion & The Eye", district: "Altona-Altstadt", address: "Hospitalstraße 109", location: [53.556499,9.947611], park: "way/4275521"},
	{name: "Mädchen Mit Walkman", district: "Altona-Altstadt", address: "Esmarchstraße 53", location: [53.554218,9.949177]},
	{name: "Skulpturengruppe Schräge Vögel", district: "Thedestraße", address: "100 Louise-Schroeder-Schule", location: [53.553749,9.949663]},
	{name: "25. Juni 1943 Bomben auf Hamburg", district: "Altona-Altstadt", address: "Jessenstraße Pierre Trillaud", location: [53.551159,9.946589]},
	{name: "Historischer Friedhof", district: "Altona-Altstadt", address: "Louise-Schroeder-Straße 27", location: [53.550816,9.949613]},
	{name: "Haacke Hausboot", district: "Altona-Altstadt", address: "Mörkenstraße 7", location: [53.549351,9.945592]},
	{name: "Stolpersteine Loschinski und Berlin", district: "Altona-Altstadt", address: "Mörkenstraße 6", location: [53.549187,9.947967]},
	{name: "Bojen vor St. Trinitatis", district: "Altona-Altstadt", address: "Kirchenstraße Hauptkirche St. Trinitatis", location: [53.548302,9.950125]},
	{name: "Behnbrunnen", district: "Altona-Altstadt", address: "Königstraße Okeanide", location: [53.548126,9.941867]},
	{name: "Marinedenkmal", district: "Altona-Altstadt", address: "Große Elbstraße Helgoland-Denkmal", location: [53.545372,9.939346], park: "way/138974313"},
	{name: "Anker Altona", district: "Altona-Altstadt", address: "Große Elbstraße Helgoland-Denkmal", location: [53.545425,9.939675], park: "way/60693926"},
	{name: "Popeye the Sailorman", district: "Altona-Altstadt", address: "Carsten-Rehder-Straße 64", location: [53.544571,9.946257]},
	{name: "Fischhändler und Marktfrau", district: "Altona-Altstadt", address: "St. Pauli Fischmarkt 2A", location: [53.545818,9.952874]},
	{name: "Fischauktionshalle", district: "Große Elbstraße", address: "9 Fischauktionshalle", location: [53.544895,9.951612]},
	{name: "Urbane Kulturlandschaft Fischmarkt", district: "Altona", address: "Altona-Altstadt Große Elbstraße", location: [53.54488,9.952881]},
	{name: "U-434 Museum", district: "Altona", address: "Altona-Altstadt Fischmarkt", location: [53.545162,9.954558], park: "way/137423991"},
	]};
	{name: "Kriegerdenkmal", district: "Bahrenfeld", address: "Lutherhöhe Lutherkirche", location: [53.571842,9.904308]},
	{name: "Futterhaus im Wald", district: "Bahrenfeld", address: "Lutherhöhe", location: [53.571674,9.905908]},
	{name: "Schiff vorm Lutherhaus", district: "Bahrenfeld", address: "Wittenbergstraße 50", location: [53.570663,9.904589]},
	{name: "Hier lernte Martha Hauptmann Stolperstein", district: "Bahrenfeld", address: "Regerstraße 22", location: [53.567963,9.908279]},
	{name: "Wooden Church", district: "Bahrenfeld", address: "Holstenkamp Kirche der heiligen Myronträgerinnen", location: [53.57132,9.914361]},
	{name: "Rachs Restaurant", district: "Bahrenfeld", address: "Holstenkamp 71", location: [53.570618,9.918348]},
	{name: "Werkstätten Betriebe", district: "Bahrenfeld", address: "Boschstraße 2", location: [53.567478,9.917843]},
	{name: "Messingvioline", district: "Stellingen", address: "Holstenkamp", location: [53.572186,9.931284]},
	{name: "Love Will Never Die", district: "Bahrenfeld", address: "Diebsteichweg", location: [53.570469,9.927972]},
	{name: "Uncensored Sculpture", district: "Bahrenfeld", address: "Am Diebsteich 15", location: [53.568626,9.930617]},
	{name: "Friedhofskapelle Diebsteich", district: "Bahrenfeld", address: "Am Diebsteich", location: [53.568859,9.93273]},
	{name: "Bahnhof Diebsteich", district: "Altona-Nord", address: "Diebsteichtunnel", location: [53.568642,9.934208]},
	{name: "CALPESA Spanien für Jedermann", district: "Bahrenfeld", address: "Leunastraße", location: [53.567318,9.928913]},
}
