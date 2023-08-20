import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById, editUser } from 'redux/users/operations';
import { selectUserById } from 'redux/users/selectors';

export const EditUserPage = () => {
  const params = useParams();
  const currentUser = useSelector(selectUserById);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    dispatch(getUserById(params.id));
  }, [dispatch, params.id]);

  const handleChange = e => {
    console.log(e.target.value);
    const field = e.target;
    switch (e.target.name) {
      case 'name': {
        console.log(field.value);
        setUser({ ...user, name: field.value });
        break;
      }
      case 'email': {
        setUser({ ...user, email: field.value });
        break;
      }
      case 'phone': {
        setUser({ ...user, phone: field.value });
        break;
      }
      case 'address': {
        setUser({ ...user, address: field.value });
        break;
      }
      case 'url': {
        setUser({ ...user, url: field.value });
        break;
      }
      default:
        return;
    }
  };

  const handleSubmit = () => {
    console.log(user);
    dispatch(editUser(user));
    navigation(`/users/${params.id}`);
  };

  return (
    <>
      {currentUser && (
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone
            <input
              type="number"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Link
            <input
              type="url"
              name="url"
              value={user.url}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Edit user</button>
        </form>
      )}
    </>
  );
};
