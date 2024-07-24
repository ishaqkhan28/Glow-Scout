const steps = [
    { id: 1, title: 'Sign Up', description: '' },
    { id: 2, title: 'Select your Beauty Goals', description: '' },
    { id: 3, title: 'Select Treatment', description: '' },
    { id: 4, title: 'Select Spa', description: '' },
  ];
  
  const HowItWorks = () => (
    <section className="py-20  bg-[#FEF5E3]">
      <h2 className="text-6xl font-normal text-center mb-6">How Glow Scout Works</h2>
      <div className="flex justify-center flex-wrap space-x-14 ">
        {steps.map(step => (
          <div key={step.id} className="text-center bg-[#F6E9CE] p-6 w-[150px]  shadow-md rounded-lg text-xl">
            <h3 className="text-3xl font-bold mb-48">{`0${step.id}`}</h3>
            <p className="text-2xl ">{step.title}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="px-6 py-2 bg-[#351120] text-[#FEF5E3] rounded-full">Get Started</button>
      </div>
    </section>
  );
  
  export default HowItWorks;
  