import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setShowLogin}) => {
    const navigate = useNavigate();
    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("customer");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            const endpoint = state === 'register' ? 'signup' : 'login';
            const payload = state === 'register'
                ? { name, email, password, role }
                : { email, password, role };

            const response = await fetch('http://localhost:5000/api/auth/' + endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Authentication failed');
            }

            localStorage.setItem('vehicleRentalToken', data.token);
            localStorage.setItem('vehicleRentalUser', JSON.stringify(data.user));
            setShowLogin(false);

            if (data.user?.role === 'owner') {
                navigate('/owner');
            } else {
                navigate('/cars');
            }
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };
  return (
    <div onClick={()=>setShowLogin(false)} className=' fixed top-0 bottom-0 left-0 right-0 z-100  flex items-center text-sm text-gray-600 bg-black/50 '>


        <form onSubmit={onSubmitHandler} onClick={(e)=>e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-88 text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className="text-2xl font-medium m-auto">
                <span className="text-primary">{role === 'owner' ? 'Admin' : 'User'}</span> {state === "login" ? "Login" : "Sign Up"}
            </p>
            {state === "register" && (
                <div className="w-full">
                    <p>Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="password" required />
            </div>
            <div className="w-full">
                <p>Sign in as</p>
                <div className="flex gap-3 mt-1">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name="role" value="customer" checked={role === 'customer'} onChange={(e) => setRole(e.target.value)} />
                        User
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name="role" value="owner" checked={role === 'owner'} onChange={(e) => setRole(e.target.value)} />
                        Admin
                    </label>
                </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {state === "register" ? (
                <p>
                    Already have account? <span onClick={() => setState("login")} className="text-primary cursor-pointer">click here</span>
                </p>
            ) : (
                <p>
                    Create an account? <span onClick={() => setState("register")} className="text-primary cursor-pointer">click here</span>
                </p>
            )}
            <button disabled={loading} className="bg-primary hover:bg-blue-800 transition-all text-white w-full py-2 rounded-md cursor-pointer disabled:opacity-60">
                {loading ? 'Please wait...' : (state === "register" ? "Create Account" : "Login")}
            </button>
        </form>


        
    </div>
  )
}

export default Login