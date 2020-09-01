import React from 'react';


const Navigation = ({ onRouteChange, isSignedIn }) => {

    if (isSignedIn) {
        return (
            < nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signout')}
                    className='btn ph5 pointer br3 center'> Sign Out </p>
            </ nav >
        );
    } else {
        return (
            < nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')}
                    className='btn ph5 pointer br3 center'>Sign In</p>

                <p onClick={() => onRouteChange('register')}
                    className='btn ph5 pointer br3 center'>Register</p>

            </ nav >
        );
    }

}

export default Navigation;