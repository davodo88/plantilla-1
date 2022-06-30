import Instagram from './atoms/instagram';
import Facebook from './atoms/facebook';
import Github from './atoms/github';
import Tweteer from './atoms/tweteer';
import Pinterest from './atoms/pinterest';

const Footer  = () => {
  return (
    <div className="block justify-center p-8">
      <div className="flex justify-center text-xl gap-5 mt-8 mb-24">
        <span className="">
          <a href="" className='hover:text-orange-500'>HOME</a>     
        </span>
        <span className="">
          <a href="" className='hover:text-orange-500'>PAGES</a>
        </span>
        <span className="">
          <a href="" className='hover:text-orange-500'>PORTFOLIO</a>
        </span>
        <span className="">
          <a href="" className='hover:text-orange-500'>BLOG</a>
        </span>
        <span className="">
          <a href="" className='hover:text-orange-500'>CONTACT</a>
        </span>
      </div>
      <div className="flex mb-12 justify-center">
        <div className="flex -ml-7 mr-7 px-5 border-r-4 border-orange-500">
          <h5>Estudio art. All right reserved.</h5>
        </div>
        <div className="flex gap-3">
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