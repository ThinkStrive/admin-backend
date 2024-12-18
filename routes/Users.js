import Express from 'express';
import { createNewUser, deleteSingleUser, getSingleUser, getUserDocs, listAllUsers, updateSingleUser} from '../controllers/Users.js';


export const usersRoute = Express.Router()


usersRoute.get('/', listAllUsers);

usersRoute.get('/docs',getUserDocs);

usersRoute.get('/:id', getSingleUser);

usersRoute.post('/', createNewUser);

usersRoute.put('/:id', updateSingleUser);

usersRoute.delete('/:id', deleteSingleUser);





