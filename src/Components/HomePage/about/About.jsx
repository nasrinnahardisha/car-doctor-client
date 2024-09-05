import aboutImg1 from "../../../assets/images/about_us/person.jpg"
import aboutImg2 from "../../../assets/images/about_us/parts.jpg"



const About = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
          <img
            src={aboutImg1}
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <img
            src={aboutImg2}
            className="max-w-sm absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            <h3 className="text-3xl font-bold text-red-500">About Us</h3>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
            </p>
            <p className="py-6">
            the majority have suffered alteration in some form, by injected humour, or randomised words which donn look even slightly believable. 
            </p>
            <button className="btn btn-error">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
