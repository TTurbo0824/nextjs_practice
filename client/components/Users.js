import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addUser} from '../store/usersSlice';

export default function clock() {
  const dispatch = useDispatch();
  const {users} = useSelector((state) => state.users);
  const [name, setName] = useState('');

  const addNewUser = () => {
    dispatch(addUser(name));
  };
  
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label>New User:</label>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={addNewUser}>Add</button>
      <h4>User List:</h4>
      <ol>
        {users.map((user, idx) => (
          <li key={idx}>{user}</li>
        ))}
      </ol>
    </div>
  );
}
