import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const ggProvider = new GoogleAuthProvider();

function Login() {


    async function handleGgLogin() {
        await signInWithPopup(auth, ggProvider);
    }

    return (
        <div className="w-full h-screen bg-violet-50">
            <div className="container m-auto">
                <div className="grid row-span-full justify-center">
                    <div className="col-span-4 ">
                        <h1 className="text-center text-6xl text-blue-500 mt-28 font-mono">Chat</h1>
                        <button className="w-full mt-8 border px-8 py-3 border-yellow-300 hover:border-blue-300 rounded-lg" onClick={handleGgLogin}>Đăng nhập bằng Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;