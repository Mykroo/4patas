import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/static/images/ninas2.jpg"
          alt="Hero image of a happy pet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Shelter 4Patas</h1>
            <p className="text-xl mb-8">Find your new best friend today</p>
            <div className="space-x-4">
              <Link href="/adopt" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                Adopt
              </Link>
              <Link href="/donate" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-8">
            We are dedicated to finding loving homes for pets in need. Our mission is to provide shelter, care, and a second chance for every animal.
          </p>
          <Image
            src="/static/images/fininas.jpg"
            alt="About us image"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Pets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((pet) => (
              <div key={pet} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={`/static/images/pet${pet}.jpg`}
                  alt={`Featured pet ${pet}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Pet {pet}</h3>
                  <p className="text-gray-600 mb-4">A loving companion waiting for a home.</p>
                  <Link href={`/pets/${pet}`} className="text-blue-500 hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Adopt</h3>
              <p className="text-gray-600">Give a pet a forever home.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Donate</h3>
              <p className="text-gray-600">Support our mission with a donation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Success Stories</h2>
          <div className="space-y-8">
            {[1, 2].map((story) => (
              <div key={story} className="bg-white p-6 rounded-lg shadow-md">
                <Image
                  src={`/static/images/success${story}.jpg`}
                  alt={`Success story ${story}`}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Success Story {story}</h3>
                <p className="text-gray-600">A heartwarming tale of a pet finding their forever home.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Donate Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us / Donate</h2>
          <p className="text-lg mb-8">Get in touch with us or make a donation to support our cause.</p>
          <div className="space-x-4">
            <Link href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Contact Us
            </Link>
            <Link href="/donate" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
