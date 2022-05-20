
import Instagram from './instagram';
import Facebook from './facebook';


const Footer  = () => {
  return (
    <div className='p-8'>
      <div className="flex  justify-around">
        <Instagram />
        <h5>Estudio art. All right reserved.</h5>
        <Facebook />
        
      </div>
    </div>
  );
  }


    export default Footer;  