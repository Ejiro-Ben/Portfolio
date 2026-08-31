export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 text-center border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <p className="my-2 text-gray-300 text-base">&copy; {currentYear} Ejiro Ben. All rights reserved.</p>
      </div>
    </footer>
  );
};
