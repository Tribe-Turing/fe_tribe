import React, {useState} from 'react';
import UserCard from '../UserCard/UserCard';
import InterestSearchForm from '../InterestSearchForm/InterestSearchForm';
import UserProfile from '../UserProfile/UserProfile';
import './Dashboard.css'

const Dashboard = ({users, setMessageUser}) => {
    const [currentInterest, setCurrentInterest] = useState('')
    const filterInterests = (interest) => {
        setCurrentInterest(interest)
    }
    const filteredUsers = users.filter(user => {
        return user.interests.includes(currentInterest)
    }).map(user => {
        return(
            <UserCard
                image={user.image}
                id={user.id}
                key={user.id}
                username={user.first_name}
                setMessageUser={setMessageUser}
            />)
    })
    const userCards = users.map(user => {
        return(
            <UserCard
                image={user.image}
                id={user.id}
                key={user.id}
                username={user.first_name}
                setMessageUser={setMessageUser}
            />)
    })
    return (
        <div className='dashboard'>
          <>
            <InterestSearchForm filterInterests={filterInterests}/>
            <div className='card-container'>
              {currentInterest ? filteredUsers : userCards}
            </div>
          </>

        </div>
    )
}

export default Dashboard;
