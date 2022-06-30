import Instagram from './atoms/instagram';
import Facebook from './atoms/facebook';
import Github from './atoms/github';
import Tweteer from './atoms/tweteer';
import Pinterest from './atoms/pinterest';

const Footer  = () => {
  return (
    <div className="block justify-center p-8">
      <div className="flex flex-col md:flex-row justify-center sm:text-base md:text-xl gap-5 mt-8 mb-24">
        <div className="flex justify-center ">
          <a href="" className="hover:text-orange-500">
            HOME
          </a>
        </div>
        <div className="flex justify-center">
          <a href="" className="hover:text-orange-500">
            PAGES
          </a>
        </div>
        <div className="flex justify-center">
          <a href="" className="hover:text-orange-500">
            PORTFOLIO
          </a>
        </div>
        <div className="flex justify-center">
          <a href="" className="hover:text-orange-500">
            BLOG
          </a>
        </div>
        <div className="flex justify-center">
          <a href="" className="hover:text-orange-500">
            CONTACT
          </a>
        </div>
      </div>
      <div className="inline-block ml-8 md:flex mb-12 justify-center">
        <div className="flex md:-ml-7 md:mr-7 px-5 md:my-auto md:border-r-4 border-orange-500">
          <h5>Estudio art. All right reserved.</h5>
        </div>
        <div className="flex justify-center mt-4 md:mt-auto py-4 border-t-2 border-orange-500 md:border-none gap-3">
          <Instagram />
          <Facebook />
          <Github />
          <Pinterest />
          <Tweteer />
        </div>
      </div>
    </div>
  );
  }


    export default Footer;  