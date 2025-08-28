import React, { useContext } from 'react'
import userContext from '../Context/UserContext'

const Profile = () => {
    const { user } = useContext(userContext)
    return (
        <>
            {!user ? (
                <div>Please login</div>
            ) : (
                <div>Welcome: {user.userName}</div>
            )}
        </>
    )
}

export default Profile
