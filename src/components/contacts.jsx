import email from '../asset/email.png';
import phone from '../asset/phone.png';
import location from '../asset/address.png';

const Contacts = () => {
  return (
    <section id="contacts" className="contacts-section container py-5">
      <div className="row align-items-start gy-4 gx-5">
        
        <div className="col-12 col-md-6">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="icon-line"></div>
            <p className="m-0">Contact Me</p>
          </div>
          <h1 className="mb-3">Let's talk about our next project</h1>
          <p className="mb-4">
            Have a project in mind or an idea you'd love to bring to life? I'm
            always open to new challenges and creative partnerships.
          </p>
          <button>Contact Me</button>
        </div>

        <div className="col-12 col-md-6 mt-4 mt-md-5 ">
          <div className="d-flex flex-column gap-4">
            
            {/* Phone Block */}
            <div className="d-flex align-items-start gap-3">
              <img src={phone} alt="Phone" width="40" height="40" />
              <div>
                <p className="mb-1 fw-bold">Phone</p>
                <p className="mb-0">+250 790 329 702</p>
              </div>
            </div>

            {/* Email Block */}
            <div className="d-flex align-items-start gap-3">
              <img src={email} alt="Email" width="40" height="40" />
              <div>
                <p className="mb-1 fw-bold">Email</p>
                <p className="mb-0">bonnieumurerwa@gmail.com</p>
              </div>
            </div>

            {/* Address Block */}
            <div className="d-flex align-items-start gap-3">
              <img src={location} alt="Location" width="40" height="40" />
              <div>
                <p className="mb-1 fw-bold">Address</p>
                <p className="mb-0">Kigali, Rwanda</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
