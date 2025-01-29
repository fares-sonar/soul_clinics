import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
function Team() {
  useEffect(() => {
      AOS.init({
        duration: 500,
        easing: "ease-in-out",
      });
    }, []);
  return (
    <div className=" py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-5xl text-light font-Amiri mb-16">
          خبراء التجميل المحترفين
        </h1>

        <div className="grid md:grid-cols-2 gap-16 items-center justify-center">
          {/* First Doctor */}
          <div className="flex flex-col-reverse md:flex-row md:flex-col-row  items-center gap-8"
          data-aos='fade-up' data-aos-delay="400">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-bgColor shadow-lg">
                <img
                  src="assets/Amira.webp"
                  alt="D.Amira"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left ">
              <h2 className="text-2xl font-serif text-brown mb-2">
                د/ اميره محروس
              </h2>
              <p className="text-brown italic mb-3">
                اخصائيه الجلديه و التجميل و الليزر
              </p>
              <p className="text-brown">
              ماجستير الجلديه و التجميل <br />
              خبره 14 عاما
              </p>
            </div>
          </div>

          {/* Second Doctor */}
          <div className="flex flex-col-reverse md:flex-row md:flex-col-row items-center gap-8" data-aos='fade-up' data-aos-delay="400">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-bgColor shadow-lg">
                <img
                  src="assets/Rasha.webp"
                  alt="D.Rasha"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-serif text-brown mb-2">
                د/ رشا الزينى
              </h2>
              <p className="text-brown italic mb-3">
                اخصائيه الجلديه و التجميل
              </p>
              <p className="text-brown">
                ماجستير الجلديه و التجميل <br />
                خبره 17 عاما
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
