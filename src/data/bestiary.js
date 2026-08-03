// ============================================================
//  LA GRANDE ROUTE — src/data/bestiary.js
//  La faune de l'Acte I + compositions de rencontres.
//  Aucun texte ici : noms/descriptions/intents = clés w.foe.*.
//  Le socle 2/3 (guerrier_nekker, spéciaux, trophées) est ajouté
//  par socle23.js, chargé après ce fichier.
// ============================================================
const MONSTRES={
  chien:{n:'w.foe.chien.name',em:"🐕",pv:[14,20],atq:[4,7],cat:"bete",faib:"axii",txt:'w.foe.chien.txt',ints:[{n:'w.foe.chien.i0n',em:"🦷",d:[4,7]},{n:'w.foe.chien.i1n',em:"🦷",d:[4,7]},{n:'w.foe.chien.i2n',em:"💥",d:[6,9]}]},
  pourrissoir:{n:'w.foe.pourrissoir.name',em:"🤮",pv:[18,26],atq:[4,7],cat:"necrophage",faib:"aard",txt:'w.foe.pourrissoir.txt',ints:[{n:'w.foe.pourrissoir.i0n',em:"🪝",d:[4,7]},{n:'w.foe.pourrissoir.i1n',em:"☠️",d:[3,5],fx:"poison"},{n:'w.foe.pourrissoir.i2n',em:"🦷",d:[5,8]}]},
  alguire:{n:'w.foe.alguire.name',em:"🦴",pv:[40,52],atq:[7,11],cat:"necrophage",faib:"igni",txt:'w.foe.alguire.txt',ints:[{n:'w.foe.alguire.i0n',em:"🦷",d:[7,11]},{n:'w.foe.alguire.i1n',em:"🦘",d:[8,12],fx:"poison"},{n:'w.foe.alguire.i2n',em:"🌙",d:[0,0],fx:"peur"}]},
  noyeur:{n:'w.foe.noyeur.name',em:"🧟",pv:[24,32],atq:[5,8],cat:"necrophage",faib:"igni",txt:'w.foe.noyeur.txt',ints:[{n:'w.foe.noyeur.i0n',em:"🪝",d:[5,8]},{n:'w.foe.noyeur.i1n',em:"🪝",d:[5,8]},{n:'w.foe.noyeur.i2n',em:"💧",d:[8,12],fx:"poison"}]},
  goule:{n:'w.foe.goule.name',em:"👹",pv:[28,36],atq:[6,9],cat:"necrophage",faib:"igni",txt:'w.foe.goule.txt',ints:[{n:'w.foe.goule.i0n',em:"🦷",d:[6,9]},{n:'w.foe.goule.i1n',em:"🦷",d:[6,9]},{n:'w.foe.goule.i2n',em:"🩸",d:[9,13]}]},
  nekkere:{n:'w.foe.nekkere.name',em:"👺",pv:[20,26],atq:[4,7],cat:"necrophage",faib:"aard",txt:'w.foe.nekkere.txt',ints:[{n:'w.foe.nekkere.i0n',em:"🪝",d:[4,7]},{n:'w.foe.nekkere.i1n',em:"🦘",d:[7,10]}]},
  loup:{n:'w.foe.loup.name',em:"🐺",pv:[22,30],atq:[5,9],cat:"bete",faib:"axii",txt:'w.foe.loup.txt',ints:[{n:'w.foe.loup.i0n',em:"🦷",d:[5,9]},{n:'w.foe.loup.i1n',em:"🌙",d:[0,0],fx:"peur"}]},
  foglet:{n:'w.foe.foglet.name',em:"🌫️",pv:[30,40],atq:[6,10],cat:"ogroide",faib:"yrden",txt:'w.foe.foglet.txt',ints:[{n:'w.foe.foglet.i0n',em:"🪝",d:[6,10]},{n:'w.foe.foglet.i1n',em:"🗡️",d:[9,14]}]},
  brigand:{n:'w.foe.brigand.name',em:"🗡️",pv:[20,28],atq:[5,8],cat:"humain",faib:null,txt:'w.foe.brigand.txt',ints:[{n:'w.foe.brigand.i0n',em:"🗡️",d:[5,8]},{n:'w.foe.brigand.i1n',em:"🩸",d:[8,12]}]},
  spectre:{n:'w.foe.spectre.name',em:"👻",pv:[34,44],atq:[7,11],cat:"spectre",faib:"yrden",txt:'w.foe.spectre.txt',ints:[{n:'w.foe.spectre.i0n',em:"❄️",d:[7,11]},{n:'w.foe.spectre.i1n',em:"😱",d:[4,6],fx:"peur"},{n:'w.foe.spectre.i2n',em:"🌀",d:[10,15]}]},
  fielon:{n:'w.foe.fielon.name',em:"🦌",pv:[60,74],atq:[9,14],cat:"relique",faib:"samum",txt:'w.foe.fielon.txt',ints:[{n:'w.foe.fielon.i0n',em:"💥",d:[10,15]},{n:'w.foe.fielon.i1n',em:"👁️",d:[0,0],fx:"peur"},{n:'w.foe.fielon.i2n',em:"🦶",d:[13,18]}]},
  sylvestre:{n:'w.foe.sylvestre.name',em:"🌲",pv:[66,80],atq:[8,13],cat:"relique",faib:"igni",txt:'w.foe.sylvestre.txt',ints:[{n:'w.foe.sylvestre.i0n',em:"🌿",d:[8,12]},{n:'w.foe.sylvestre.i1n',em:"🌿",d:[11,16]},{n:'w.foe.sylvestre.i2n',em:"☠️",d:[7,10],fx:"poison"}]},
  griffon:{n:'w.foe.griffon.name',em:"🦅",pv:[175,175],atq:[10,15],cat:"draconide",faib:"aard",boss:true,vole:true,txt:'w.foe.griffon.txt',intsVol:[{n:'w.foe.griffon.iV0n',em:"🦅",d:[12,17]},{n:'w.foe.griffon.iV1n',em:"📢",d:[5,8],fx:"peur"}],intsSol:[{n:'w.foe.griffon.iS0n',em:"🪝",d:[10,14]},{n:'w.foe.griffon.iS1n',em:"🦷",d:[13,18]},{n:'w.foe.griffon.iS2n',em:"🌪️",d:[7,10],fx:"sonne"}]}
};
const CATNOMS={necrophage:'w.cat.necrophage',spectre:'w.cat.spectre',bete:'w.cat.bete',ogroide:'w.cat.ogroide',relique:'w.cat.relique',draconide:'w.cat.draconide',humain:'w.cat.humain'};
const HUILES={necrophage:'w.oil.necrophage',spectre:'w.oil.spectre',bete:'w.oil.bete',draconide:'w.oil.draconide'};
function pickRencontre(c,type){
  if(type==='taniere')return pick([
    {foes:['fielon','nekkere','nekkere'],lead:'fielon'},
    {foes:['sylvestre','loup','loup'],lead:'sylvestre'},
    {foes:['alguire','goule','goule'],lead:'alguire'},
    {foes:['fielon','pourrissoir','pourrissoir'],lead:'fielon'}
  ]);
  let pool;
  if(c<=2)pool=[{foes:['chien'],lead:'chien'},{foes:['chien','chien'],lead:'chien'},{foes:['loup','loup'],lead:'loup'},{foes:['nekkere','nekkere'],lead:'nekkere'},{foes:['noyeur'],lead:'noyeur'}];
  else if(c<=4)pool=[{foes:['brigand','brigand'],lead:'brigand'},{foes:['noyeur','pourrissoir'],lead:'noyeur'},{foes:['goule','goule'],lead:'goule'},{foes:['loup','loup','chien'],lead:'loup'},{foes:['nekkere','nekkere','nekkere'],lead:'nekkere'}];
  else if(c<=7)pool=[{foes:['brigand','brigand','brigand'],lead:'brigand'},{foes:['foglet','foglet'],lead:'foglet'},{foes:['goule','pourrissoir','pourrissoir'],lead:'goule'},{foes:['spectre'],lead:'spectre'},{foes:['brigand','brigand','foglet'],lead:'brigand'}];
  else pool=[{foes:['alguire','goule'],lead:'alguire'},{foes:['spectre','foglet'],lead:'spectre'},{foes:['brigand','brigand','brigand'],lead:'brigand'},{foes:['sylvestre'],lead:'sylvestre'},{foes:['fielon'],lead:'fielon'},{foes:['alguire','nekkere','nekkere'],lead:'alguire'}];
  return pick(pool);
}
function rencontreEvent(key){switch(key){case 'brigand':return{foes:['brigand','brigand','brigand'],lead:'brigand'};case 'nekkere':return{foes:['nekkere','nekkere','nekkere'],lead:'nekkere'};case 'spectre':return{foes:['spectre'],lead:'spectre'};default:return{foes:[key],lead:key};}}