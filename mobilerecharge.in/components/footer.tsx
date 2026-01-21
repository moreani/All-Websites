export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold font-poppins mb-2">Mobile Recharge AI</h3>
            <p className="text-white/80">Empowering Instant Transactions Through Intelligent Automation</p>
          </div>

          <div className="border-t border-white/20 pt-4">
            <p className="text-white/60">
              © {new Date().getFullYear()} Mobile Recharge AI. All rights reserved. |
              <span className="text-accent font-semibold"> Owned by Scalium.in</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
