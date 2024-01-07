import BreadCrumb from "../Components/Modules/BreadCrumb";
import SectionHeader from "../Components/Modules/SectionHeader";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  return (
    <div className="container max-w-screen-lg mx-auto">
      <BreadCrumb route="جزئیات وبلاگ" />
      <SectionHeader englishTitle="Blog Details" persianTitle="جزئیات وبلاگ" />
      <p className="text-center mt-14 text-2xl text-stone-700">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </p>

      <div className="mt-40 mb-20">
        <img src="/img/blog-9.jpg" className="rounded-3xl shadow-lg" alt="" />
      </div>

      <div className="flex flex-col justify-center items-center gap-8 mb-32">
        <p className="text-justify leading-loose text-2xl">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <p className="text-justify leading-loose text-2xl">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <p className="text-justify leading-loose text-2xl">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <div className="flex flex-col gap-12 mb-32">
        <div className="">
          <div className="bg-orange-200 text-stone-900 text-2xl rounded-full shadow-lg p-4 w-44 flex justify-center items-center">
            مقالات مشابه
          </div>
          <p className="text-2xl text-stone-700 mt-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Link
              to="/project-details/1"
              className="group relative flex justify-center h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-lg md:h-96"
            >
              <img
                src="/img/project-1.jpg"
                loading="lazy"
                className="w-full h-full absolute inset-0 object-cover object-center transition duration-300 group-hover:scale-110"
                alt=""
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative mb-8 flex justify-center text-3xl text-center text-white">
                مقاله شماره یک
              </span>
            </Link>
          </div>
          <div className="flex-1">
            <Link
              to="/project-details/1"
              className="group relative flex justify-center h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-lg md:h-96"
            >
              <img
                src="/img/project-2.jpg"
                loading="lazy"
                className="w-full h-full absolute inset-0 object-cover object-center transition duration-300 group-hover:scale-110"
                alt=""
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative mb-8 flex justify-center text-3xl text-center text-white">
                مقاله شماره دو
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 mb-40">
        <div className="">
          <div className="bg-orange-200 text-stone-900 text-2xl rounded-full shadow-lg p-4 w-44 flex justify-center items-center">
            نظرات{" "}
          </div>
          <p className="text-2xl text-stone-700 mt-4">
            شما با نام X وارد شده اید!!
          </p>
        </div>
        <form action="flex flex-col">
          <textarea
            placeholder="نظر خود را بنویسید"
            className="w-full p-4 rounded-3xl shadow-xl text-2xl text-stone-700 min-h-60 max-h-80 duration-300 focus:border-b-4 focus:border-stone-800"
          ></textarea>
          <button className="text-2xl font-bold bg-stone-800 text-orange-200 w-60 rounded-full p-6 text-center shadow-md hover:bg-orange-300 hover:text-stone-800 duration-300 mt-4">
            ارسال پیام
          </button>
        </form>
      </div>
    </div>
  );
};
export default ProjectDetails;
