import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/users'>Users</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
};
