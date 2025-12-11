import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import x from "../../assets/images/favicon-32x32.png"

export default function Footer() {
  return (
    <footer className="py-5 mb-0 ">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5>Copy right &copy; Dana Mahmoud</h5>
          </div>
          <div className="col-md-6">
            <ul className="contact list-unstyled d-flex justify-content-center align-items-center gap-4 mb-0">
              <li>
                <a href="https://github.com/danamah" target="_blank" rel="noopener noreferrer" className="text-white fs-3">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/dana-mahmoud-2615731b5/" target="_blank" rel="noopener noreferrer" className="text-white fs-3">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a href="https://www.frontendmentor.io/profile/danamah" target="_blank" rel="noopener noreferrer" >
                   <img className='img-fluid w-100' src={x} alt="" />
                </a>
              </li>
              <li className='pb-2'>
                <a href="https://vercel.com/dana-mahmouds-projects" target="_blank" rel="noopener noreferrer" className="text-white fs-3">
                  <span className="text-vercel">▲</span> 
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
