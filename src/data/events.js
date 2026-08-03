// ============================================================
// LA GRANDE ROUTE — src/data/events.js
// Les rencontres aléatoires de l'Acte I. Aucun texte : tout en
// clés w.event.*. Le bûcheron est un PNJ de village (legacy.js),
// le nid de goules (choix conditionnel Samum) est inclus ici.
// Chaque eff() rend {txt, or?, combat?, heroique?} ;
// un choix peut porter req:'id' (masqué sans l'objet) et
// consume:'id' (l'objet est consommé).
// ============================================================
const EVENTS=[
 {titre:'w.event.chained.title',em:'⛓️',txt:'w.event.chained.txt',choix:[
 {t:'w.event.chained.c0t',d:'w.event.chained.c0d',eff:()=>({txt:'w.event.chained.c0eff'})},
 {t:'w.event.chained.c1t',d:'w.event.chained.c1d',eff:()=>{S.rep++;S.flags.fleau_epargne=true;return{txt:'w.event.chained.c1eff'};}},
 {t:'w.event.chained.c2t',d:'w.event.chained.c2d',eff:()=>({txt:'w.event.chained.c2eff'})}]},
 {titre:'w.event.well.title',em:'🕳️',txt:'w.event.well.txt',choix:[
 {t:'w.event.well.c0t',d:'w.event.well.c0d',eff:()=>{S.rep++;S.flags.puits_net=true;return{txt:'w.event.well.c0eff'};}},
 {t:'w.event.well.c1t',d:'w.event.well.c1d',eff:()=>{if(Math.random()<.5){S.pv=Math.min(S.pvMax,S.pv+12);return{txt:'w.event.well.c1effOk'};}S.pv=Math.max(1,S.pv-10);S.tox+=15;return{txt:'w.event.well.c1effNo'};}},
 {t:'w.event.well.c2t',d:'w.event.well.c2d',eff:()=>({txt:'w.event.well.c2eff'})}]},
 {titre:'w.event.convoy.title',em:'🛺',txt:'w.event.convoy.txt',choix:[
 {t:'w.event.convoy.c0t',d:'w.event.convoy.c0d',eff:()=>{if(S.flags.village_decime_nom){S.rep=Math.max(0,S.rep-1);return{txt:t('w.event.convoy.c0effRuined',{name:S.flags.village_decime_nom})};}S.rep++;return{txt:'w.event.convoy.c0effOk',or:25};}},
 {t:'w.event.convoy.c1t',d:'w.event.convoy.c1d',eff:()=>{S.rep++;S.beni=true;return{txt:'w.event.convoy.c1eff'};}},
 {t:'w.event.convoy.c2t',d:'w.event.convoy.c2d',eff:()=>({txt:'w.event.convoy.c2eff'})}]},
 {titre:'w.event.bandit.title',em:'🩹',txt:'w.event.bandit.txt',choix:[
 {t:'w.event.bandit.c0t',d:'w.event.bandit.c0d',eff:()=>{if(donnerSoin()){return{txt:'w.event.bandit.c0effOk',or:55};}return{txt:'w.event.bandit.c0effNo'};}},
 {t:'w.event.bandit.c1t',d:'w.event.bandit.c1d',eff:()=>{S.rep=Math.max(0,S.rep-1);return{txt:'w.event.bandit.c1eff',or:40};}},
 {t:'w.event.bandit.c2t',d:'w.event.bandit.c2d',eff:()=>({txt:'w.event.bandit.c2eff'})}]},
 {titre:'w.event.hanged.title',em:'🪢',txt:'w.event.hanged.txt',choix:[
 {t:'w.event.hanged.c0t',d:'w.event.hanged.c0d',eff:()=>{S.rep++;return{txt:'w.event.hanged.c0eff',or:40};}},
 {t:'w.event.hanged.c1t',d:'w.event.hanged.c1d',eff:()=>({txt:'w.event.hanged.c1eff',combat:'brigand'})},
 {t:'w.event.hanged.c2t',d:'w.event.hanged.c2d',eff:()=>({txt:'w.event.hanged.c2eff'})}]},
 {titre:'w.event.drowned.title',em:'🌊',txt:'w.event.drowned.txt',choix:[
 {t:'w.event.drowned.c0t',d:'w.event.drowned.c0d',eff:()=>({txt:'w.event.drowned.c0eff',combat:'spectre'})},
 {t:'w.event.drowned.c1t',d:'w.event.drowned.c1d',eff:()=>{if(Math.random()<.7){S.rep++;return{txt:'w.event.drowned.c1effOk'};}return{txt:'w.event.drowned.c1effNo',combat:'spectre'};}},
 {t:'w.event.drowned.c2t',d:'w.event.drowned.c2d',eff:()=>({txt:'w.event.drowned.c2eff'})}]},
 {titre:'w.event.deserter.title',em:'🪖',txt:'w.event.deserter.txt',choix:[
 {t:'w.event.deserter.c0t',d:'w.event.deserter.c0d',eff:()=>{if(donnerSoin()){S.beni=true;return{txt:'w.event.deserter.c0effOk'};}return{txt:'w.event.deserter.c0effNo'};}},
 {t:'w.event.deserter.c1t',d:'w.event.deserter.c1d',eff:()=>({txt:'w.event.deserter.c1eff',or:25})},
 {t:'w.event.deserter.c2t',d:'w.event.deserter.c2d',eff:()=>{S.pv=Math.max(1,S.pv-6);return{txt:'w.event.deserter.c2eff',or:60};}}]},
 {titre:'w.event.circle.title',em:'🗿',txt:'w.event.circle.txt',choix:[
 {t:'w.event.circle.c0t',d:'w.event.circle.c0d',eff:()=>{S.pv=Math.min(S.pvMax,S.pv+22);return{txt:'w.event.circle.c0eff'};}},
 {t:'w.event.circle.c1t',d:'w.event.circle.c1d',eff:()=>{S.pv=Math.max(1,S.pv-10);return{txt:'w.event.circle.c1eff',or:90};}},
 {t:'w.event.circle.c2t',d:'w.event.circle.c2d',eff:()=>({txt:'w.event.circle.c2eff'})}]},
 {titre:'w.event.toll.title',em:'⛺',txt:'w.event.toll.txt',choix:[
 {t:'w.event.toll.c0t',d:'w.event.toll.c0d',eff:()=>{if(S.or>=50){S.or-=50;return{txt:'w.event.toll.c0effOk'};}return{txt:'w.event.toll.c0effNo',combat:'brigand'};}},
 {t:'w.event.toll.c1t',d:'w.event.toll.c1d',eff:()=>({txt:'w.event.toll.c1eff',combat:'brigand'})},
 {t:'w.event.toll.c2t',d:'w.event.toll.c2d',eff:()=>{if(Math.random()<.6){return{txt:'w.event.toll.c2effOk'};}return{txt:'w.event.toll.c2effNo',combat:'brigand'};}}]},
 {titre:'w.event.pillaged.title',em:'🔥',txt:'w.event.pillaged.txt',choix:[
 {t:'w.event.pillaged.c0t',d:'w.event.pillaged.c0d',eff:()=>({txt:'w.event.pillaged.c0eff',combat:'nekkere',heroique:true})},
 {t:'w.event.pillaged.c1t',d:'w.event.pillaged.c1d',eff:()=>({txt:'w.event.pillaged.c1eff'})}]},
 {titre:'w.event.herbalist.title',em:'🌿',npc:'herboriste',txt:'w.event.herbalist.txt',choix:[
 {t:'w.event.herbalist.c0t',d:'w.event.herbalist.c0d',eff:()=>{const id=soinClasse();S.sac[id]=(S.sac[id]||0)+1;return{txt:t('w.event.herbalist.c0eff',{name:t(OBJETS[id].n)})};}},
 {t:'w.event.herbalist.c1t',d:'w.event.herbalist.c1d',eff:()=>{if(S.or>=30){S.or-=30;const id=itemClasse();S.sac[id]=(S.sac[id]||0)+1;return{txt:t('w.event.herbalist.c1effOk',{name:t(OBJETS[id].n)})};}return{txt:'w.event.herbalist.c1effNo'};}},
 {t:'w.event.herbalist.c2t',d:'w.event.herbalist.c2d',eff:()=>({txt:'w.event.herbalist.c2eff'})}]},
 {titre:'w.event.goulenest.title',em:'🥚',txt:'w.event.goulenest.txt',choix:[
 {t:'w.event.goulenest.c0t',d:'w.event.goulenest.c0d',eff:()=>({txt:'w.event.goulenest.c0eff'})},
 {t:'w.event.goulenest.c1t',d:'w.event.goulenest.c1d',eff:()=>({txt:'w.event.goulenest.c1eff',combat:'goule'})},
 {t:'w.event.goulenest.c2t',d:'w.event.goulenest.c2d',req:'samum',consume:'samum',eff:()=>{S.rep++;return{txt:'w.event.goulenest.c2eff',or:70};}}]}
];