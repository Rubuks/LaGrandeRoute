// ============================================================
//  LA GRANDE ROUTE — src/data/socle23.js  (version corrigée)
//  Ajoute par-dessus la faune de base : trophées, épiques marqués,
//  spéciaux télégraphiés, guerrier nekker, bague (quête), nid de
//  goules.
//  CORRIGE : les épiques portaient special mais pas epic/trophy
//  (aucun trophée ne tombait) ; la bague pointait sur la mauvaise
//  image ; le guerrier nekker était trop rare.
// ============================================================
const TROPHIES={
  nekker_crown:{n:'w.trophy.nekker_crown.name',desc:'w.trophy.nekker_crown.desc',voice:'w.trophy.nekker_crown.voice',img:'v_rune',bonus:{armorStart:2}},
  griffon_plume:{n:'w.trophy.griffon_plume.name',desc:'w.trophy.griffon_plume.desc',voice:'w.trophy.griffon_plume.voice',img:'v_glyph',bonus:{paFirst:1}},
  leshen_bark:{n:'w.trophy.leshen_bark.name',desc:'w.trophy.leshen_bark.desc',voice:'w.trophy.leshen_bark.voice',img:'v_oil',bonus:{pvFlat:6}},
  fiend_skull:{n:'w.trophy.fiend_skull.name',desc:'w.trophy.fiend_skull.desc',voice:'w.trophy.fiend_skull.voice',img:'v_crystal',bonus:{esqFlat:1,dmgCat:{relique:1.15}}}
};
// guerrier nekker : épique, mène une bande, laisse le cimier
if(!MONSTRES.guerrier_nekker){MONSTRES.guerrier_nekker={n:'w.foe.guerrier_nekker.name',em:"🪓",pv:[50,62],atq:[8,12],cat:"necrophage",faib:"igni",epic:true,trophy:'nekker_crown',txt:'w.foe.guerrier_nekker.txt',ints:[{n:'w.foe.guerrier_nekker.i0n',em:"🪓",d:[8,12]},{n:'w.foe.guerrier_nekker.i1n',em:"🪓",d:[9,13]},{n:'w.foe.guerrier_nekker.i2n',em:"📢",d:[0,0],fx:"peur"}]};}
// marque les épiques : epic + trophy (+ special là où ça a du sens)
MONSTRES.fielon.epic=true;    MONSTRES.fielon.trophy='fiend_skull';    MONSTRES.fielon.special={fx:'devour',n:'w.foe.fielon.sp',em:'🦴'};
MONSTRES.sylvestre.epic=true; MONSTRES.sylvestre.trophy='leshen_bark';
MONSTRES.griffon.epic=true;   MONSTRES.griffon.trophy='griffon_plume'; MONSTRES.griffon.special={fx:'swoop',n:'w.foe.griffon.sp',em:'🦅'};
MONSTRES.guerrier_nekker.special={fx:'rally',n:'w.foe.guerrier_nekker.sp',em:'📯'};
// bague corrigée : anneau, pas bombe
OBJETS.bague={img:'v_rune',n:'w.item.ring.name',em:'💍',kind:'quest',d:'w.item.ring.desc'};
// guerrier nekker : garanti tôt, probable ensuite
const __pr=pickRencontre;
pickRencontre=function(c,type){
  if(type==='taniere'){
    if(c<=4)return{foes:['guerrier_nekker','nekkere','nekkere'],lead:'guerrier_nekker'};
    if(Math.random()<0.4)return{foes:['guerrier_nekker','nekkere','nekkere'],lead:'guerrier_nekker'};
  }
  return __pr(c,type);
};
// nid de goules (choix conditionnel à la Samum)
EVENTS.push({titre:'w.event.goulenest.title',em:'🥚',txt:'w.event.goulenest.txt',choix:[
  {t:'w.event.goulenest.c0t',d:'w.event.goulenest.c0d',eff:()=>({txt:'w.event.goulenest.c0eff'})},
  {t:'w.event.goulenest.c1t',d:'w.event.goulenest.c1d',eff:()=>({txt:'w.event.goulenest.c1eff',combat:'goule'})},
  {t:'w.event.goulenest.c2t',d:'w.event.goulenest.c2d',req:'samum',consume:'samum',eff:()=>{S.rep++;return{txt:'w.event.goulenest.c2eff',or:70};}}
]});