import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { deleteUserById, getUserById } from 'redux/users/operations';
import { selectUserById } from 'redux/users/selectors';
import { Modal } from 'components/Modal/Modal';

export const UserDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserById(params.id));
  }, [dispatch, params]);

  const user = useSelector(selectUserById);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  return (
    <>
      {user &&
        (!isModalOpen ? (
          <div>
            <img src={user.avatar} alt="User avatar" />
            <p>{user.name}</p>
            <p>{user.phone}</p>
            <p>{user.address}</p>
            <button type="button" onClick={handleOpenModal}>
              Delete
          </button>
          <Link to='edit'>Edit</Link>
          </div>
        ) : (
          <Modal id={params.id} closeModal={handleCloseModal} />
        ))}
    </>
  );
};
