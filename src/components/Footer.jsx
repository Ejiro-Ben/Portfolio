export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-8 px-4 text-center border-t-2 border-gold-500">
      <div className="max-w-6xl mx-auto">
        <p className="my-2 text-gold-400 text-base">&copy; {currentYear} Ejiro Ben. All rights reserved.</p>
      </div>
    </footer>
  );
};
