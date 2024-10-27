import Express from 'express';
import { createNewUser, deleteSingleUser, getSingleUser, listAllUsers, updateSingleUser} from '../controllers/Users.js';


export const usersRoute = Express.Router()


usersRoute.get('/', listAllUsers);

usersRoute.get('/:id', getSingleUser);

usersRoute.post('/', createNewUser);

usersRoute.put('/:id', updateSingleUser);

usersRoute.delete('/:id', deleteSingleUser);





