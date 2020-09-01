import React from 'react';


const Navigation = ({ onRouteChange, isSignedIn }) => {

    if (isSignedIn) {
        return (
            < nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signout')}
                    className='btn'> Sign Out </p>
            </ nav >
        );
    } else {
        return (
            < nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')}
                    className='btn'>Sign In</p>

                <p onClick={() => onRouteChange('register')}
                    className='btn'>Register</p>

            </ nav >
        );
    }

}

export default Navigation;