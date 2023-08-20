import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/users/operations';

export const AddUserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const hangleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      phone: form.elements.phone.value,
      address: form.elements.address.value,
      url: form.elements.url.value,
    };
    console.log(user)
    const userAdd = await dispatch(addUser(user)).unwrap();
    navigate(`/users/${userAdd.id}`);
  };
  return (
    <form onSubmit={hangleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Phone
        <input type="number" name="phone" />
      </label>
      <label>
        Address
        <input type="text" name="address" />
      </label>
      <label>
        Link
        <input type="url" name="url" />
      </label>
      <button type="submit">Add user</button>
    </form>
  );
};
