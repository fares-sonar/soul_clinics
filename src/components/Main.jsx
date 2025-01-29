
const Main = () => {
  return (
    <main className="relative">
        <nav className="relative container mx-auto z-10 px-8 py-6">
          <div className="">
            <img src="assets/logo.png" className="w-36 bg-contain" alt="logo" loading="lazy" />
          </div>
        </nav>

        <div className="relative max-w-7xl mx-auto z-10 ">
          <div className="flex items-center ">
            <div className=" overflow-hidden">
              <img
                src="assets/clinic.webp"
                className="xl:block hidden max-w-lg rounded-t-full"
                alt="image-clinic"
                loading="lazy"
                data-aos="zoom-in"
                data-aos-delay="1000"
              />
            </div>
            <div
              className="space-y-8 lg:text-right text-center mx-auto"
              data-aos="zoom-in"
              data-aos-delay="1000"
            >
              <h1 className="text-7xl font-bold mb-6 text-[#61411D] font-Amiri ">
                عياده الجمال المثالى <br />
                رونق الجمال
              </h1>
              <p className="text-2xl mb-8 max-w-xl text-[#61411D] font-Amiri italic">
                عيادتنا تقدم لكِ أحدث التقنيات والعلاجات المتخصصة لتحقيق جمالك
                الطبيعي وتعزيز ثقتك بنفسك، لأنكِ تستحقين الأفضل دائمًا
              </p>
              <div className="flex md:flex-row flex-col gap-6 justify-end mt-8">
                <div className="text-[#61411D]">
                  <h2 className="font-semibold text-xl">التواصل</h2>
                  <ul className="space-y-2">
                    <li>+(966) 543951084</li>
                    <li>+(966) 563352840</li>
                    <li>
                      Instgram:{" "}
                      <a
                        className="underline"
                        href="https://www.instagram.com/soulclinics_/"
                      >
                        soulclinics_
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="text-[#61411D]">
                  <h2 className="font-semibold text-xl">العنوان</h2>
                  <ul className="space-y-2">
                    <li>
                      الرياض حى الوادى <br /> شارع ابى بكر الصديق الفرعى
                    </li>
                  </ul>
                </div>
                <div className="text-[#61411D]">
                  <h2 className="font-semibold text-xl">مواعيد العمل</h2>
                  <ul className="space-y-2">
                    <li>من السبت الى الخميس</li>
                    <li>من الساعه 02:00 مساء</li>
                    <li>الى الساعه 10:00 مساء</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Main