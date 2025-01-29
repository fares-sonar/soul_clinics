import { Star } from "lucide-react"

const About = () => {
  return (
    <section className="py-20 px-8 " id="about">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div
            className=" relative hidden lg:flex flex-1"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <img
              src="assets/soul-clinic.jpg"
              alt="clinic"
              loading="lazy"
              className="rounded-lg w-[550px] shadow-lg "
            />
            <img
              className="absolute -bottom-10 -right-10 w-56 rounded-lg"
              src="assets/soul-clinic2.jpg"
              alt="clinic"
              loading="lazy"
            />
          </div>
          <div
            className="flex-1 text-right"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <h2 className="text-5xl font-bold font-Amiri mb-6 text-brown">
              عيادات سول
            </h2>
            <p className="text-2xl mb-6 text-brown font-Amiri italic">
              نبحث لروحك عن تجربة إنسانية فريدة من نوعها .. تظل معك فترات لا
              محدودة .. لنكون معك بلمساتنا في كل مناسبة سعيدة او جمعة مبهجة ..
              فنجاحك هو نجاح لنا وابتسامتك تعبر عن دقة عملنا .. نقدم لك افضل
              كادر في اجمل مكان يليق بروحك .. فريق عمل سول الطبي
            </p>
            <ul className="space-y-4 ">
              <li className="flex justify-end items-center space-x-3">
                <span className="text-xl text-brown">منتجات تجميلية فاخرة</span>
                <Star className="w-5 h-5 text-light" />
              </li>
              <li className="flex justify-end  items-center space-x-3">
                <span className="text-xl text-brown">معدات على أحدث طراز</span>
                <Star className="w-5 h-5 text-light" />
              </li>
              <li className="flex justify-end  items-center space-x-3">
                <span className="text-xl text-brown">
                  خبراء التجميل المعتمدين
                </span>
                <Star className="w-5 h-5 text-light" />
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default About