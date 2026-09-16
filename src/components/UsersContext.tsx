import React, { useEffect } from 'react';
import { User } from '../types/User';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchUsers } from '../store/usersSlice';

export const UserContext = React.createContext<User[]>([]);

type Props = {
  children: React.ReactNode;
};

export const UsersProvider: React.FC<Props> = ({ children }) => {
  const users = useAppSelector(state => state.users.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};
