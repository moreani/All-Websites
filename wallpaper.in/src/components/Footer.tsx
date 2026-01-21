
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-width section-padding">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <h3 className="text-2xl font-poppins font-semibold text-white">
              Wallpaper AI
            </h3>
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming Digital Spaces with Intelligent Design
          </p>
          
          <div className="w-24 h-px bg-primary mx-auto"></div>
          
          <div className="space-y-2">
            <p className="text-gray-400">
              © 2025 Wallpaper AI. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Owned by{" "}
              <a
                href="https://scalium.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-300"
              >
                Scalium.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
