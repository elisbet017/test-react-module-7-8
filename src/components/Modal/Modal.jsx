import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUserById } from 'redux/users/operations';

export const Modal = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleDeleteUser = () => {
    dispatch(deleteUserById(id));
    closeModal();
    navigate('/users')
  };
  return (
    <div>
      <p>Are you sure?</p>
      <button type="button" onClick={handleDeleteUser}>
        Yes
      </button>
      <button type="button" onClick={closeModal}>
        No
      </button>
    </div>
  );
};
