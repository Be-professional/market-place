import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-5xl text-center"> Oppsss!!!</h1>
            <Link className="flex justify-center mt-4" to='/'> <button className="border broder-green-400 p-1 bg-blue-400 rounded just">Back to home page</button></Link>
        </div>
    );
};

export default ErrorPage;