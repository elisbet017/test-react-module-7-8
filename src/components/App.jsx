import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import UsersPage from '../pages/UsersPage';
import { UserDetailsPage } from '../pages/UserDetailsPage';
import { AddUserPage } from 'pages/AddUserPage';
import { EditUserPage } from 'pages/EditUserPage';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetailsPage />} />
        <Route path="users/add" element={<AddUserPage />} />
      </Route>
      <Route path="users/:id/edit" element={<EditUserPage />} />
    </Routes>
  );
};
