import Navbar from "../components/navbar"
import WebSiteDescription from "../components/websiteDescription"

function Landing() {
    return(
        <>
    <Navbar/>
      <div className="bg-slate-50 bg-opacity-20 flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5 overflow-y-hidden">
        <div className="flex w-full max-w-[941px] flex-col items-center mb-9 max-md:max-w-full">
          {/* <img
            loading="lazy"
            srcSet="src\assets\landing_img.jpeg" className="aspect-[2.08] object-contain object-center w-[300px] max-w-full"
            alt="Your Image"
          /> */}
          <img
            loading="lazy"
            srcSet="src\assets\forecost.png" className="aspect-[2.08] object-contain object-center w-full max-w-full -mt-16 "
            alt="Your Image"
          />

          <span className="text-xl">abcjdfnjkdsfjlkfjksfjhsjfhiwehufwejhfdehsfuieshfjshdfiueofjhiusedfjc</span>
          <WebSiteDescription />
        
          <button className="text-white text-2xl font-bold whitespace-nowrap bg-black justify-center items-stretch mt-10 px-7 py-3.5 rounded-[30px] max-md:px-5">
            Predict your fav stock
          </button>
        </div>
        </div>
        </>
  );
}
        
export default Landing;