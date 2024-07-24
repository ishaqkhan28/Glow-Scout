import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen bg-[#351120] text-[#FEF5E3] flex flex-wrap items-center justify-center ">
      <div className="flex justify-between space-x-40">
        <Image
          src="/images/Rectangle 26.svg"
          loading = 'eager'
          alt="Person 1"
          className="object-cover rounded-lg"
          width={300}
          height={300}
        />
        <div className="max-w-xl text-center">
        <h1 className="text-6xl font-[300] mb-8">About <br/> Glow Scout</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus. Lorem ipsum dolor sit amet, consectetur  elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet,  adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor, consectetur adipiscing elit. Ut ut nibh faucibusadipiscing elit. Ut ut nibh . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus. Lorem ipsum dolor sit amet, consectetur  elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet,  adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor, consectetur adipiscing elit. Ut ut nibh faucibus.
          </p>
        </div>
        <Image
          src="/images/Rectangle 27.svg"
          alt="Person 2"
          loading = 'eager'
          className="object-cover rounded-lg"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;