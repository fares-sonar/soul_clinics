import { LeafyGreen,Cross,Heart } from "lucide-react"

const Features = () => {
  return (
    <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div data-aos="zoom-in" data-aos-delay="700" className="text-center">
            <LeafyGreen className="w-12 h-12 mx-auto mb-4 text-light" />
            <h3 className="text-xl font-semibold mb-2 text-brown">
              %100 طبيعى
            </h3>
            <p className="font-Amiri italic text-xl text-brown ">
              قدم لكِ حلولًا وعلاجات طبيعية 100% تساعدكِ على استعادة نضارة
              بشرتكِ وتألقها{" "}
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="700" className="text-center">
            <Cross className="w-12 h-12 mx-auto mb-4 text-light" />
            <h3 className="text-xl font-semibold mb-2 text-brown">
              التكنولوجيا المتقدمة
            </h3>
            <p className="font-Amiri italic text-xl text-brown ">
              نستخدم أحدث أساليب التكنولوجيا المتقدمة لتقديم أفضل العلاجات
              الجمالية التي تناسب احتياجاتكِ
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="700" className="text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-light" />
            <h3 className="text-xl font-semibold mb-2 text-brown">
              تجربة فاخرة
            </h3>
            <p className="font-Amiri italic text-xl text-brown ">
              نقدم لكِ في عيادتنا تجربة فاخرة تجمع بين الراحة، الخصوصية،
              والخدمات الراقية. من لحظة دخولكِ حتى انتهاء جلستكِ
            </p>
          </div>
        </div>
      </section>
  )
}

export default Features