import './auth.css';

type Prop = {
    renderType: "signIn" | "signUp";
}

const Auth = ({renderType}: Prop) => {

    const SignUp = () => {
        return <div className="auth__signUp">
            Sign Up
        </div>
    };

    const SignIn = () => {
        return <div className="auth__signIn">
            Sign In
        </div>
    };

    return <section className="auth">{renderType === "signIn" ? <SignIn/> : <SignUp/>}</section>
}

export default Auth;