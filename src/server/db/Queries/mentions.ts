import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { mentions } from "../../types";

const getAll =() => SelectQuery<mentions>('SELECT * from mention');
const getOne =(id:number) => SelectQuery<mentions>('SELECT * from mention WHERE id=?', [id])

const create = (newPair: mentions) => ModifyQuery('INSERT INTO Mentions SET ?', [newPair]);
const destroy = (chirp_id: number) => ModifyQuery("DELETE FROM mentions WHERE chirp_id=?", [chirp_id])

export default{
    getAll,
    getOne,
    create,
    destroy,
  };