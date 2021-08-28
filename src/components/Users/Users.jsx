import React from 'react';
import us from './Users.module.css';
// import * as axios from 'axios'; 

let Users = (props) => {
  debugger
  if (props.users.length === 0) {

    // axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //   props.setUsers()
    // })

    props.setUsers( [
      { id: 1, photoUrl: 'https://avatarko.ru/img/kartinka/1/Shrek.jpg', 
        followed: false, fullName: 'Andrew', status: 'I am the boss', 
        location: {city: 'Moscow', country: 'Russia'} 
      },
      { id: 2, photoUrl: 'https://avatarko.ru/img/kartinka/1/Shrek.jpg', 
        followed: true, fullName: 'Sasha', status: 'I am not the boss', 
        location: {city: 'Minsk', country: 'Belarus'} 
      },
      { id: 3, photoUrl: 'https://avatarko.ru/img/kartinka/1/Shrek.jpg', 
        followed: false, fullName: 'Mikola', status: 'I am the ???', 
        location: {city: 'Kiev', country: 'Ukrain'} 
      },
      ]
    )
  }

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <div>
          <div>
            <img src={u.photoUrl} alt='avatar' className={us.userPhoto} />
          </div>
          <div>
            {
              u.followed
                ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                : <button onClick={ () => {props.follow(u.id)} }>Follow</button>
            }
          </div>
        </div>
        <div>
          <div>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </div>
          <div>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </div>
        </div>
      </div>)
    }
  </div>
}

export default Users;
