import { Facebook, Instagram, MapPin, Phone, Twitter } from 'lucide-react'

const Contact = () => {
  return (
    <section className=" py-20 px-8" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-light font-Amiri mb-12">
            تواصل معنا
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="w-full h-[400px] shadow-lg" data-aos='zoom-in' data-aos-delay='500'>
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d328203.8394445204!2d46.583622883269456!3d24.652125247084086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd002c3800ab%3A0x783a096bf87cd98d!2zU291bCBjbGluaWNzLdi52YrYp9iv2KfYqiDYs9mI2YQ!5e0!3m2!1sen!2seg!4v1738098895726!5m2!1sen!2seg"
                allowFullScreen=""
                loading="lazy"
                title="location for soul clinic"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-right flex flex-col items-end" data-aos='zoom-in' data-aos-delay='500'>
              <h3 className="text-xl text-brown italic font-bold mb-4">
                لديك أي استفسار؟ لا تتردد في الاتصال بنا، وسنكون سعيدين بالرد
                عليك بأسرع وقت ممكن
              </h3>
              <div className="flex flex-col items-end space-y-4">
                <p className="flex items-center space-x-3">
                  <span className="text-brown">+(966) 543951084</span>
                  <Phone className="w-5 h-5 text-brown" />
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-brown">
                    الرياض حى الوادى شارع ابى بكر الصديق الفرعى
                  </span>
                  <MapPin className="w-5 h-5 text-brown" />
                </p>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.instagram.com/soulclinics_/"
                  className="text-brown hover:text-light"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-brown hover:text-light">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-brown hover:text-light">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact