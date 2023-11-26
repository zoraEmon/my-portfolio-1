import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href} 
            className='block py-2 pl-3 pr-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD4B] to-[#FF4B91]'
        >
           {title}
        </Link>
    );
};

export default NavLink ;