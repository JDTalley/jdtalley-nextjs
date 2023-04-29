import Navbar from "../Navbar";

const BlogLayout = ({ children }) => {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        </>
    )
}

export default BlogLayout;