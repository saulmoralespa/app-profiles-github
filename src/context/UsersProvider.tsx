import { useState, useEffect, createContext } from 'react';
import clientAxios from '../config/axios';

const UsersContext = createContext();

const UsersProvider = ({children}) => {

    const [nameUser, setNameUser] = useState('');
    const [users, setUsers] = useState([]);
    const [imageLoading, setImageLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
          try {
            const { data } = await clientAxios(`search/users?q=${nameUser}&per_page=10`);
            const { items } = data;

            await items.forEach(async({login}) => {
                const { data } = await clientAxios(`users/${login}`);
                setUsers(users => [...users, {...data}])
            });
            setHasError(false);
          } catch (error) {
            setHasError(true);
          }
        }

        if(nameUser.length === 4){
            getUsers();
        }else{
            setUsers([]);
        }
    }, [nameUser]);
    
    
    
    return (
        <UsersContext.Provider
            value={{
                setNameUser,
                users,
                imageLoading,
                hasError,
                setImageLoading
            }}
        >
            {children}
        </UsersContext.Provider>
    );
}

export {
    UsersProvider
}

export default UsersContext;