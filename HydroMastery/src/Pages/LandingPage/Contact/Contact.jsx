import './Contact.css';
import { useForm } from "react-hook-form";
import Options from './Options.json';
import CustomError from '../../../Components/Error/CustomError';
import { FiMapPin } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';

export default function Contact() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      reset();
      toast.success("Thank you for contacting us!", {
        position: 'bottom-center',
      })
      console.log(data);
    }

    const iconComponents = {
      FiMapPin,
      IoMailOutline,
      IoCallOutline,
    };

    const renderIcon = (icon, classNames, { ...restOptions} = {}) => {
      const IconComponent = iconComponents[icon] || FiMapPin; // FaXTwitter default icon
      return <IconComponent className={classNames} style={{...restOptions }}/>;
  }

    return <section id="contact" className="contact section-bg">
    <div className="container" data-aos="fade-up">
      <ToastContainer draggable={'mouse'}/>

      <div className="section-title">
        <h2>{Options.Title}</h2>
        <p>{Options.Subtitle}</p>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="info-box mb-4">
            {renderIcon("FiMapPin", "bx bx-map", {fontSize: '25px'})}
            <h3>Our Address</h3>
            <p>{Options.Address}</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="info-box mb-4">
            {renderIcon("IoMailOutline", "bx bx-map", {fontSize: '25px'})}
            <h3>Email Us</h3>
            <p>{Options.Email}</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="info-box  mb-4">
            {renderIcon("IoCallOutline", "bx bx-map", {fontSize: '25px'})}
            <h3>Call Us</h3>
            <p>{Options.Phonenumber}</p>
          </div>
        </div>

      </div>

      <div className="row">

        <div className="col-lg-6 ">
          <iframe title='map' className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35743.93714809796!2d-3.2208787304687716!3d55.94944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c787c66e0a35%3A0x244965aa27fcb29d!2sSt.%20Leonard&#39;s%20Land%20Swimming%20Pool%2C%20The%20University%20of%20Edinburgh!5e0!3m2!1sel!2sgr!4v1705866436176!5m2!1sel!2sgr" frameBorder="0" style={{border:'0', width: '100%', height: '384px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="col-lg-6">
          <form onSubmit={handleSubmit(onSubmit)} method="post" role="form" netlify >
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" {...register("name", { required: "This field is required"  })}/>
                {errors.name && <CustomError>{errors.name.message}</CustomError>}
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" {...register("email", { required: "This field is required"  })}/>
                {errors.email && <CustomError>{errors.email.message}</CustomError>}
            </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" {...register("subject", { required: "This field is required"  })}/>
              {errors.subject && <CustomError>{errors.subject.message}</CustomError>}
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" {...register("message", { required: "This field is required" })}></textarea>
              {errors.message && <CustomError>{errors.message.message}</CustomError>}
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>
}