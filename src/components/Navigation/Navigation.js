import React from 'react';


const Navigation = ({ onRouteChange, isSignedIn }) => {

    if (isSignedIn) {
        return (
            < nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signout')}
                    className='f5 ph4 card reg pointer br3'> Sign Out </p>
            </ nav >
        );
    } else {
        return (
            < nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')}
                    className='f5 ph4 card reg pointer br3'>Sign In</p>

                <p onClick={() => onRouteChange('register')}
                    className='f5 ph4 card reg pointer br3'>Register</p>

            </ nav >
        );
    }

}

export default Navigation;