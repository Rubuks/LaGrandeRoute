// ============================================================
//  LA GRANDE ROUTE — src/data/ui.js
//  Données de chrome SANS texte : libellés de stats, points
//  d'intérêt, jetons de statut, mots d'effet. Les traductions
//  vivent dans locales/{lang}/ui.js (clés ui.*).
// ============================================================
const STLAB={PV:'ui.st.pv',Frappe:'ui.st.strike',Magie:'ui.st.magic',Esquive:'ui.st.dodge'};
const POI=['w.poi.old_bridge','w.poi.hanged_oak','w.poi.dead_pond','w.poi.stone_circle','w.poi.warden_hut','w.poi.thickets','w.poi.burnt_field','w.poi.ford','w.poi.barrow','w.poi.hollow_willow','w.poi.reed_mere','w.poi.border_post','w.poi.stump','w.poi.black_wood'];
const CHIPS={burn:'ui.chips.burn',poison:'ui.chips.poison',bleed:'ui.chips.bleed',stun:'ui.chips.stun',slow:'ui.chips.slow',conf:'ui.chips.conf',parry:'ui.chips.parry',riposte:'ui.chips.riposte',runeF:'ui.chips.runeF',runeB:'ui.chips.runeB',empo:'ui.chips.empo',fear:'ui.chips.fear',sonne:'ui.chips.sonne',shield:'ui.chips.shield',rally:'ui.chips.rally',focus:{loup:'ui.chips.focus.loup',sorciere:'ui.chips.focus.sorciere',mercenaire:'ui.chips.focus.mercenaire',eclaireuse:'ui.chips.focus.eclaireuse'},evade:{loup:'ui.chips.evade.loup',sorciere:'ui.chips.evade.sorciere',mercenaire:'ui.chips.evade.mercenaire',eclaireuse:'ui.chips.evade.eclaireuse'},cri:'ui.chips.cri'};
const FXW={miss:'ui.fx.miss',dodge:'ui.fx.dodge',parry:'ui.fx.parry',quenb:'ui.fx.quenb',weak:'ui.fx.weak',crit:'ui.fx.crit'};