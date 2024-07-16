import Link from "next/link";

export default function Home() {

    return (
        <div className="container mx-auto text-white text-xl">
            Hello MDC-27
            <p>
                <Link className="text-sky-400 hover:underline" href="login">Login</Link>
                <a href="/login" className="text-sky-800">Login</a>
            </p>
            <p>
                <Link className="text-sky-400 hover:underline" href="about-us">About Us</Link>
            </p>
        </div>
    );
}