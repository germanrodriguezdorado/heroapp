import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";





export const LoginScreen = ({ history }) => {


    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {

        const lastPath = localStorage.getItem("lastPath") || "/";



        dispatch({
            type: types.login,
            payload: {
                name: "german"
            }
        });

        history.replace(lastPath);
        // history.replace("/"); // <= Ideal cuando es login asi no puede volver

    };

    return (
        <div className="container mt-5">
            <h1>Welcome to HeroApp</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
