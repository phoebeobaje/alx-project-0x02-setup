import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Welcome to Our Listing App</h1>
        <nav>
            <ul className="flex space-x-4">
            <Link href="/home" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            </ul>
        </nav>
        </header>
    );
}
export default Header;