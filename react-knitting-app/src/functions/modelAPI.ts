import { TSockSave, TSockSaveNamed } from "../functions/sock";
type localSSave = {
  username: string;
  projects: Array<TSockSave>;
};
const LSNAME = "KNITSOCKPROJ";

export async function getModelList(name: string) {
  let l = new Array<TSockSave>();
  let m = localStorage.getItem(LSNAME);
  if (m) {
    let m1: Array<localSSave> = JSON.parse(m);
    let found: localSSave | undefined = m1.find(
      (value) => value.username === name,
    );
    if (found) {
      for (let i = 0; i < found.projects.length; i++) {
        l.push(found.projects[i]);
      }
    }
  }
  return l;
}
export async function setModelList(model: TSockSaveNamed) {
  let l = new Array<TSockSave>();
  let temp: TSockSave = {
    row: model.row,
    stich: model.stich,
    progress: model.progress,
    size: model.size,
    name: model.name,
  };
  l.push(temp);
  let modellist = { username: model.username, projects: l };
  let ar = new Array<localSSave>();
  ar.push(modellist);
  let jsonmodel = JSON.stringify(ar);
  localStorage.setItem(LSNAME, jsonmodel);
}
export async function updateModel(model: TSockSaveNamed) {
  let m = localStorage.getItem(LSNAME);
  let temp: TSockSave = {
    row: model.row,
    stich: model.stich,
    progress: model.progress,
    size: model.size,
    name: model.name,
  };
  if (m) {
    let m1: Array<localSSave> = JSON.parse(m);
    let found: number = m1.findIndex(
      (value) => value.username === model.username,
    );
    if (found > -1) {
      let i = m1[found].projects.findIndex(
        (value) => value.name === model.name,
      );
      if (i > -1) {
        m1[found].projects[i].progress = model.progress;
      } else {
        m1[found].projects.push(temp);
      }
    } else {
      let l = new Array<TSockSave>();
      l.push(temp);
      let modellist = { username: model.username, projects: l };
      m1.push(modellist);
    }
    let jsonmodel = JSON.stringify(m1);
    localStorage.setItem(LSNAME, jsonmodel);
  } else {
    let l = new Array<TSockSave>();
    l.push(temp);
    let modellist = { username: model.username, projects: l };
    let ar = new Array<localSSave>();
    ar.push(modellist);
    let jsonmodel = JSON.stringify(ar);
    localStorage.setItem(LSNAME, jsonmodel);
  }
}
