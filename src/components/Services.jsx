const treatments = [
  {
    title: "فيلر شفايف",
    description:
      "احصلي على شفاه ممتلئة ومتناسقة تضيف لمسة جاذبية لإطلالتكِ. نقدم تقنيات فيلر الشفايف    ",
    image: "assets/filler-lips.jpg",
  },
  {
    title: "بلازما شعر",
    description:
      " استعيدي قوة ولمعان شعركِ مع علاج البلازما المتقدم. يعمل على تعزيز نمو الشعر، تقوية البصيلات",
    image: "assets/hair.png",
  },
  {
    title: "علاج بالليزر",
    description:
      "تجربة متطورة في عالم الجمال، حيث يوفر العلاج بالليزر حلولاً فعّالة وآمنة لمشاكل البشرة المختلفة",
    image: "assets/laser.jpg",
  },
  {
    title: "هيدرافيشل",
    description:
      "للي بشرتكِ مع تقنية الهيدرافيشل التي تنظف بعمق، ترطب، وتجدد خلايا البشرة بلمسة لطيفة",
    image: "assets/pixlr.png",
  },
];

const Services = () => {
  return (
    <section className="py-20" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-Amiri text-light text-center mb-4">
              خدماتنا
            </h2>
            <h2 className="text-4xl italic text-brown">
              {" "}
              إبراز جوهر فنون الجمال{" "}
            </h2>
            <p className="font-Amiri text-brown text-2xl max-w-[600px] mt-4 mx-auto">
              نسعى لإبراز جمالكِ الطبيعي من خلال أحدث التقنيات واللمسات الفنية
              التي تُظهر أناقتكِ بأسلوب راقٍ ومميز، لأن الجمال فن ونحن نتقنه
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay="7000"
                className=" mt-6 rounded-lg transition text-right px-4"
              >
                <div className="relative ">
                  <img
                    src={treatment.image}
                    alt="image"
                    className="  min-w-full h-[250px] rounded-lg  "
                  />
                  <div className=" absolute inset-0 bg-black opacity-30 rounded-lg w-full z-30 " />
                </div>
                <div className="mt-2">
                  <h3 className="text-2xl font-semibold mb-2 text-light font-Amiri">
                    {treatment.title}
                  </h3>
                  <p className="text-brown italic text-lg mb-4 ">
                    {treatment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Services