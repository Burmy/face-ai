import React from 'react';


const Navigation = ({ onRouteChange, isSignedIn }) => {

    if (isSignedIn) {
        return (
            < nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signout')}
                    className='f5 ph4 reg pointer br3'> Sign Out </p> {/* className card/reg in Signin.css */}
            </ nav >
        );
    } else {
        return (
            < nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')}
                    className='f5 ph4 reg pointer br3 '>Sign In</p> {/* className card/reg in Signin.css */}

                <p onClick={() => onRouteChange('register')}
                    className='f5 ph4 reg pointer br3'>Register</p> {/* className card/reg in Signin.css */}

            </ nav >
        );
    }

}

export default Navigation;