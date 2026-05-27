function Footer() {
    return(
        <footer>
            <p>&copy; {new Date().toLocaleString("en" , {date: "numeric"})} hianime</p>
        </footer>
    );
}

export default Footer