import Navbar from "../Navbar";

const mainStyles = {
    margin: '0 auto',
    padding: '0 2rem',
}

const articleStyles = {
    margin: '0 auto',
    maxWidth: 'min(700px, 100%)',
}

const BlogLayout = ({ children }) => {
    return (
        <>
        <Navbar />
        <main style={mainStyles}>
            <article style={articleStyles}>{children}</article>
        </main>
        </>
    )
}

export default BlogLayout;