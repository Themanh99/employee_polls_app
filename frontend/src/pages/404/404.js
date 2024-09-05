import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Go back to Homepage
            </Link>
        </div>
    );
}

export default NotFoundPage;
