import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => setUsers(json.data))
      .catch(err => console.warn(err))
      .finally(() => setLoading(false))
  },[]);

  const onClickValue = (e) => setSearchValue(e.target.value);

  const onClickInvites = (id) => {
    if(invites.includes(id)){
      setInvites((item) => item.filter(_id => _id !== id))
    }else{
      setInvites((item) => setInvites([...item,id]))
    }
  };

  const isSuccess = () => {
    setSuccess(true)
  }

  return (
    <div className="App">
      {success ? <Success count={invites.length}/> : 
            <Users 
            items={users} 
            isLoading={isLoading}
            onClickValue={onClickValue}
            searchValue={searchValue}
            onClickInvites={onClickInvites}
            invites={invites}
            isSuccess={isSuccess}
          />
      }

    </div>
  );
}

export default App;
