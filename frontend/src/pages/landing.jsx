import Navbar from "../components/navbar"

function Landing() {
    return(
        <>
    <Navbar/>
      <div className="bg-slate-50 bg-opacity-20 flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[941px] flex-col items-center mt-5 mb-9 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="src\assets\landing_img.jpeg" className="aspect-[2.08] object-contain object-center w-[394px] max-w-full"
            alt="Your Image"
          />
          <h1 className="text-black text-[180px] font-extrabold self-stretch mt-3.5 max-md:max-w-full max-md:text-4xl">
            FORECOST
          </h1>
          <p className="text-black text-center text-2xl font-bold mt-7 max-md:max-w-full">
            lorem impsum lorem impsum lorem impsum
          </p>
          <button className="text-white text-2xl font-bold whitespace-nowrap bg-black justify-center items-stretch mt-9 px-7 py-3.5 rounded-[30px] max-md:px-5">
            Predict your fav stock
          </button>
        </div>
        </div>
        </>
  );
}
        
export default Landing;