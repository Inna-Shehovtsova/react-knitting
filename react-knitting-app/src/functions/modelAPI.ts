import {  TSockSave, TSockSaveNamed} from '../functions/sock';
export async function getModelList(name:string){
    let l =  new Array<TSockSave>();
    l.push({name:"test sock", row:10, size:38, stich:12, progress:1})
    return l;
}
export async function updateModel(model:TSockSaveNamed){
    let m = model;
}