import pageTitle from "../hooks/pageTitle";

const AboutUs = () => {

    pageTitle('Lego Store | About Us');


    return (
        <div className="bg-gray-100 min-h-screen">
      <header className="p-8 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to Our Brickland - Bangladeshs Premier LEGO Store!
        </h1>
      </header>

      <main className="container mx-auto py-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">About Our Brickland</h2>
          <p>
            At Our Brickland, we are passionate about LEGO and dedicated to providing the ultimate LEGO shopping experience for fans of all ages in Bangladesh. As the leading LEGO store in the country, we pride ourselves on offering an extensive selection of LEGO sets, exclusive products, and a wide range of accessories to bring your brick-building dreams to life.
          </p>
          <p>
            Our store is a haven for LEGO enthusiasts, collectors, and families who share a love for creativity, imagination, and endless possibilities. We understand the joy and excitement that LEGO brings, and we strive to create an environment that celebrates the magic of these iconic building blocks.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold my-4">What Sets Us Apart</h2>
          <ul className="list-disc ml-8">
            <li>Unparalleled Selection: Our Brickland boasts an extensive collection of LEGO sets, including the latest releases, exclusive sets, and hard-to-find items.</li>
            <li>Impeccable Quality: We only offer genuine LEGO products, ensuring that every purchase you make meets the highest standards of quality and authenticity.</li>
            <li>Knowledgeable Staff: Our friendly and knowledgeable staff members are passionate LEGO enthusiasts themselves.</li>
            <li>Community Hub: Our Brickland is not just a store; its a place where LEGO enthusiasts can come together, share their love for LEGO, and connect with like-minded individuals.</li>
            <li>Online Shopping Convenience: In addition to our physical store, we also provide a seamless online shopping experience through our user-friendly website.</li>
            <li>Exceptional Customer Service: We are committed to providing exceptional customer service at every step of your LEGO journey.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold my-4">Join Us at Our Brickland</h2>
          <p>
            At Our Brickland, we believe that LEGO is more than just a toy—its a gateway to endless creativity, innovation, and imagination. Whether youre a seasoned builder or just beginning your LEGO adventure, were here to inspire and support you every step of the way.
          </p>
          <p>
            Join us at Our Brickland, where every brick tells a story, and every visit is an opportunity to build something amazing. Let your imagination soar as you explore the wonderful world of LEGO with us!
          </p>
        </section>
      </main>

      <footer className="bg-gray-200 py-4 text-center">
        <p>Happy building,</p>
        <p>The Our Brickland Team</p>
      </footer>
    </div>
    );
};

export default AboutUs;