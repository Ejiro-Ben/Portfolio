import '../styles/Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Ejiro Ben. All rights reserved.</p>
      </div>
    </footer>
  );
};
