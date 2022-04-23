import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addUser} from '../store/users/action';

export default function clock() {
  const dispatch = useDispatch();
  const {users} = useSelector((state)=> state.users);
  const [name, setName] = useState('');

  const addNewUser = () => {
    dispatch(addUser(name));
  }
  const handleChange = (event) => {
    setName(event.target.value);
  }
  
}
