const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white">
      <div className="container mx-auto px-6 text-center">
        <p className="font-inter text-text-light text-sm">
          © {currentYear} Children.co.in | All Rights Reserved.
          <br />
          Designed by Scalium Digital Media Private Limited
        </p>
      </div>
    </footer>
  );
};

export default Footer;
