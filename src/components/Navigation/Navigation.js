import React from 'react';


const Navigation = ({ onRouteChange, isSignedIn }) => {

    if (isSignedIn) {
        return (
            < nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signout')}
                    className='btn pointer mr3'> Sign Out </p>
            </ nav >
        );
    } else {
        return (
            < nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')}
                    className='btn pointer mr3'>Sign In</p>

                <p onClick={() => onRouteChange('register')}
                    className='btn pointer mr3'>Register</p>

            </ nav >
        );
    }

}

export default Navigation;