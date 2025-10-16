import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
      <header className="w-full p-4">
        <h1 className="text-2xl font-bold font-montserrat">Crumbl</h1>
      </header>

      <section className="text-center p-8">
        <div className="w-full max-w-md mx-auto mb-8">
            <Image 
                src="/cookies.jpg"
                alt="Crumbl Cookies"
                width={500}
                height={300}
                className="rounded-lg"
            />
        </div>
        <h2 className="text-5xl font-bold font-montserrat mb-4">Get a $100 Crumbl Gift Card!</h2>
        <p className="text-xl mb-8 font-lato">Love Crumbl cookies? Here’s your chance to get a $100 gift card to indulge in your favorite treats. Complete a short survey and a few offers to claim your reward. It’s that simple!</p>
        <button className="bg-black text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-800 transition-colors font-montserrat">
          Get My Gift Card
        </button>
        <p className="text-sm mt-4 font-lato">Limited time offer. Terms and conditions apply.</p>
      </section>

      <section className="w-full max-w-4xl p-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-2 font-montserrat">1. Sign Up</h3>
            <p className="font-lato">Provide your basic information to get started.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 font-montserrat">2. Complete Offers</h3>
            <p className="font-lato">Complete a short survey and a few offers from our partners.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 font-montserrat">3. Get Your Reward</h3>
            <p className="font-lato">Receive your $100 Crumbl gift card and enjoy your cookies!</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl p-8 text-center">
        <h2 className="text-4xl font-bold mb-4 font-montserrat">Don&apos;t Miss Out!</h2>
        <p className="text-lg mb-8 font-lato">This is a limited-time opportunity for Crumbl lovers. Start now and get your sweet reward!</p>
        <button className="bg-black text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-800 transition-colors font-montserrat">
          Claim My $100 Gift Card
        </button>
      </section>

      <footer className="w-full p-4 text-center text-sm text-gray-500">
        <p className="font-lato">This is an independent promotion and is not affiliated with, sponsored by, or endorsed by Crumbl, LLC. The Crumbl trademark is the property of Crumbl, LLC. Participation requires completion of offers from our partners. Users must be 18 or older. See terms and conditions for details.</p>
      </footer>
    </main>
  )
}
