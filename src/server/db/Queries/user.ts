import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { users } from "../../types";

const getAll =() => SelectQuery<users>('SELECT * from users');
const getOne =(id:number) => SelectQuery<users>('SELECT * from users WHERE id=?', [id]);

interface NewUserObject{
    email:string;
    handle:string
};

const create = (newUser: NewUserObject) => ModifyQuery('INSERT INTO users SET ?', [newUser]);
const update = (id: number, updatedUser: NewUserObject) => ModifyQuery('UPDATE users SET ? WHERE id=?', [updatedUser,id]);
const destroy =(id:number) => ModifyQuery('DELETE from users WHERE id=?', [id]);

export default{
    getAll,
    getOne,
    create,
    update,
    destroy,
  };