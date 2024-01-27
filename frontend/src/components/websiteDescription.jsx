import Typist from 'react-typist';

function WebsiteDescription() {
  return (
    <Typist className="text-black text-center text-2xl font-bold mt-3 max-md:max-w-full">
      <span>Explore the world of finance and markets</span>
      <Typist.Delay ms={1500} />
      <Typist.Backspace count={34} delay={300} />
      <span>Unlock insights into stock movements</span>
      <Typist.Delay ms={1500} />
      <Typist.Backspace count={32} delay={300} />
      <span>Understand market sentiment like never before</span>
    </Typist>
  );
}

export default WebsiteDescription;
