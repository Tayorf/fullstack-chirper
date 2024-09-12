import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { mentions } from "../../types";

const getAll =() => SelectQuery<mentions>('SELECT * from mention');
const getOne =(id:number) => SelectQuery<mentions>('SELECT * from mention WHERE id=?', [id])

const create = (newPair: mentions) => ModifyQuery('INSERT INTO Mentions SET ?', [newPair]);
const destroy =(id:number) => ModifyQuery('DELETE from mentions WHERE id=?', [id]);

export default{
    getAll,
    getOne,
    create,
    destroy,
  };