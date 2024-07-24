import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F8F8F8] h-[392px] w-[100%] border-t-2 border-[#351120]">
      <footer className="bg-[#121212] text-[#FEF5E3] py-20 w-[80%] mx-auto mt-20 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="flex justify-evenly mb-6">
            <div>
              <h2 className="text-6xl font-Raleway font-[400]">Glow <br/> Scout</h2>
            </div>
            <div className="flex space-x-8 text-2xl text-center">
              <div>
                <h3 className="font-Raleway mb-2">Quick Links</h3>
                <ul>
                  <li><Link href="/"><Link href="#">Home</Link></Link></li>
                  <li><Link href="/treatments"><Link href="#">Treatments</Link></Link></li>
                  <li><Link href="/spas"><Link href="#">Spas</Link></Link></li>
                  <li><Link href="/blog"><Link href="#">Blog</Link></Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-Raleway mb-2">Privacy Policy</h3>
                <ul>
                  <li><Link href="/terms"><Link href="#">Terms & Conditions</Link></Link></li>
                  <li><Link href="/about"><Link href="#">About Us</Link></Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-Raleway mb-2">Follow Us</h3>
                <ul>
                  <li><Link href="https://instagram.com"><Link href="#">Instagram</Link></Link></li>
                  <li><Link href="https://facebook.com"><Link href="#">Facebook</Link></Link></li>
                  <li><Link href="https://youtube.com"><Link href="#">YouTube</Link></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}