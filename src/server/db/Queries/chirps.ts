import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { chirps } from "../../types";

const getAll =() => SelectQuery<chirps>('SELECT * from chirps');

const getOne =(id:number) => SelectQuery<chirps>('SELECT * from chirps WHERE id=?', [id])

interface NewChirpObject {
    body: string;
    location: string
  }
  
const create = (newChirp: NewChirpObject) => ModifyQuery('INSERT INTO chirps SET ?', [newChirp]);
const update = (id: number, updatedChirp: NewChirpObject) => ModifyQuery('UPDATE chirps SET ? WHERE id=?', [updatedChirp, id]);
const destroy =(id:number) => ModifyQuery('DELETE from chirps WHERE id=?', [id]);

export default{
  getAll,
  getOne,
  create,
  update,
  destroy,
};