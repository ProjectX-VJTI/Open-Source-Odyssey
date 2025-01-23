import { Link } from "react-router-dom";

const FourOFour = () => {
    return(
        <div className="h-[75vh] w-full grid place-items-center">
            <div>
                <div className="text-neutral-50 font-mono font-semibold text-3xl w-full text-center">
                    You look a bit lost, fancy some help?
                </div>
                <Link to="/" className="w-fit mx-auto mt-4 block rounded-md px-5 py-3 text-neutral-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium">Return To Home</Link>
            </div>
        </div>
    );
};

export default FourOFour;