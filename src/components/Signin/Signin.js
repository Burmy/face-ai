import React from 'react';
import './Signin.css'

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }


    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('https://face-detecting-api.herokuapp.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className=" card-1 mv4 w-100 w-50-m  mw6 center">
                <main className="pa4 ">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db f4 fw6 br3 lh-copy " htmlFor="email-address">Email</label>
                                <input
                                    className=" br3 pr5 pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 br3 lh-copy f4" htmlFor="password">Password</label>
                                <input
                                    className="pa2 pr5 br3 white input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitSignIn}
                                className="btn pointer "
                                type="submit"
                                value="Sign in"
                            />
                        </div>
                        <div className="">
                            <p onClick={() => onRouteChange('Register')} className="btn pointer ">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Signin;