/* eslint-disable react/prop-types */
import { Star, Quote, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const testimonials = [
  {
    name: "رهف عبد الله المبرك",
    image: <User />,
    content:
      "اعظم واخف يد دكتوره اميره ولله الحقها مع كل عياده تروح لها يعطيها الف عافيه الفيلر عندها خيال وجربت مره فرق معى يعطيها العافيه واى شئ  جديد ابى اجربيه مقدر اسلم وجهى الا لدكتوره اميره تسليم يدك",
    rating: 5,
  },
  {
    name: "Sarah Alfouzan",
    image: <User />,
    content: `المواعيد سريعه .... العياده نظيفه... الاسعار خياااال  الدكتوره اميره محروس شهادتى فيها مجروحه.. تعرفت على العياده بسسب
انتقلها لها.. وجربت برضو الليزر ممتاز.. ولهيدرافيشل مع ايه خياااال
نطفت وجهى بشكل عميق   `,
    rating: 5,
  },
  {
    name: "MAAB NIMER",
    image: <User />,
    content:
      "العياده مرتبة ونظيفه جربت عندهم الليزر وإبرة نضاره عند الدكتوره اميره من افضل الدكتورات الله يسعدها والموظفات لطيفات خدمه العملاء ولاستقبال اتمنى لهم دوام النجاح",
    rating: 5,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-light text-light" />
      ))}
    </div>
  );
}

function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="">
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-light font-Amiri mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-2xl italic text-brown max-w-2xl mx-auto">
            لا تكتفي بكلامنا فقط – استمعي إلى تجارب عملائنا الراضين عن خدماتنا
            واكتشفي بنفسك مدى رضاهم عن العمل معنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-bgColor rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
            >
              <Quote className="w-12 h-12 text-brown mb-6 opacity-20" />
              <p className="text-brown font-Amiri text-lg mb-6 ">
                {testimonial.content}
              </p>
              <StarRating rating={testimonial.rating} />
              <div className="flex items-center mt-6">
                <div className=" flex items-center justify-center w-12 h-12 rounded-full object-cover bg-light">
                  <div className="text-white">
                  {testimonial.image}
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-brown">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
