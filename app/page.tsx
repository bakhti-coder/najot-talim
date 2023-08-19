'use client'
import React, { useRef } from "react";
import Link from 'next/link';
import '../css/textanimation.css'
import { useEffect, useState } from "react";
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Iframe from 'react-iframe'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


export default function Home() {

  const texts = ["Najot'tailimda", "mutaxassislaridan ", "onlayn", "istalgannuqtadan",];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState()



  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <main>
      <section className='bg-lightgraysh'>
        <div className='container max-w-1100 md:pt-44 pt-20 pb-16 flex justify-between '>
          <div>

            <div className=' md:text-[40px] text-[25px] font-bold  w-full lg:w-auto '>
              <h1>Kasblarni</h1>

              <div className="falling-text-container">
                {texts.map((text, index) => (
                  <div
                    key={index}
                    className={`falling-text ${index === currentIndex ? 'falling' : ''}`}
                  >
                    {text}
                  </div>
                ))}
              </div>


            </div>
            <h1 className='mt-0 md:mt-5 md:text-[40px] text-[25px] font-bold'>o‘rganing</h1>
            <p className='font-semibold text-gray mt-5 mb-16'>
              O‘zingizga qulay vaqtda, joyda va uslubda <br /> zamonaviy kasblarni o‘rganing.
            </p>
            <button className='px-10 py-3 text-white font-semibold focus:outline-none text-center hover:bg-white hover:text-black border border-white hover:border-orange bg-orange rounded-full transition'>
              <Link href={'/courses'}>
                Kurslarni ko'rish
              </Link>
            </button>
          </div>
          <div className="hidden md:flex">
            <div>
              <Image src={'/images/home/Screenshot 2023-08-19 160115.png'} width={800} height={70} alt='main' />
            </div>

          </div>
        </div>
      </section>
      <section>
        <div className='container max-w-1100 pt-10 transition-all'>
          <h1 className='text-3xl font-semibold mb-10 text-primary'>Bizning afzalliklarimiz</h1>
          {open ?
            <div className='grid  gap-16 grid-cols-1 md:grid-cols-2'>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/onlayn-akademiya.svg'} width={130} height={100} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>Onlayn akademiya</h3>
                  <p className='text-[14px] text-gray font-medium'>«Najot Ta’lim» digital academy — bu zamonaviy kasblar o‘qitiladigan onlayn akademiya. Qayerda bo‘lishingizdan qat’i nazar: uydami yo mehmonda, daladami yo safarda — o‘zingizga qulay tarzda va vaqtda bilim olishingiz mumkin, internet va noutbuk bo‘lsa bas.</p>
                </div>
              </div>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/O‘z ishining ustalari.svg'} width={130} height={100} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>O‘z ishining ustalari</h3>
                  <p className='text-[14px] text-gray font-medium'>Darslar katta tajribaga ega malakali mutaxassislar tomonidan tayyorlangan. O‘z ishining ustalaridan yanada ishonchli bilim va tajribaga ega bo’lasiz</p>
                </div>
              </div>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/Shunchaki kurs emas.svg'} width={130} height={100} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>Shunchaki kurs emas</h3>
                  <p className='text-[14px] text-gray font-medium'>Har bir o‘quv kursi shunday ishlab chiqilganki, ularni muvaffaqiyatli yakunlab, siz zamonaviy kasb egasiga aylanishingiz va shu sohada o‘z faoliyatingizni boshlashingiz mumkin. Hammasi o‘z qo‘lingizda.</p>
                </div>
              </div>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/onlayn-akademiya.svg'} width={130} height={100} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>Interaktiv darslar</h3>
                  <p className='text-[14px] text-gray font-medium'>Darslarni o‘zlashtirish davrida sizda savollar tug‘ilishi tabiiy holat. Mentorlarga murojaat qilishingiz, o’zingizni qiziqtirgan savollarizga javob olishingiz va tavsiyalar olishingiz mumkin</p>
                </div>
              </div>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/Nazariya va amaliyot.svg'} width={80} height={100} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>Nazariya va amaliyot</h3>
                  <p className='text-[14px] text-gray font-medium'>Siz har bir kursda berilgan topshiriqlarni amalga oshirish orqali bilimlaringizni yanada mustahkamlab borasiz</p>
                </div>
              </div>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/Mentor kerakmi.svg'} width={130} height={100} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>Mentor kerakmi?</h3>
                  <p className='text-[14px] text-gray font-medium'>Darslarni o‘zlashtirish davrida sizda savollar tug‘ilishi tabiiy holat. Mentorlarga murojaat qilsangiz, ular sizni qiynayotgan masalalar bo‘yicha yechim topishga yo‘l ko‘rsatadilar.</p>
                </div>
              </div>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/hamjamiyat.svg'} width={130} height={100} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>Hamjamiyat</h3>
                  <p className='text-[14px] text-gray font-medium'>Kursni boshlashingiz bilan “Najot Ta’lim” yopiq hamjamiyatiga a’zo bo‘lasiz. Bu yerda siz o‘rganishga va tajriba almashishga tayyor odamlarni uchratasiz va tanishasiz</p>
                </div>
              </div>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/hammainson.svg'} width={130} height={100} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>Hammamiz insonmiz</h3>
                  <p className='text-[14px] text-gray font-medium'>O‘qish jarayonida avvalgi o‘tilgan mavzular yoddan ko‘tarilishi, ba’zi mavzularni mustahkamlashga ehtiyoj tug‘ilishi mumkin. Shu bois sizda avvalgi darslarni takroran ko‘rish imkoniyati bor.</p>
                </div>
              </div>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/setifikat.svg'} width={130} height={100} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>Sertifikat</h3>
                  <p className='text-[14px] text-gray font-medium'>Kursni muvaffaqiyatli yakunlaganingizdan so‘ng sizga elektron sertifikat taqdim etiladi. Sertifikat sizni bilimingizni oson ko’rsatib beruvchi isbot</p>
                </div>
              </div>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/toloov.svg'} width={130} height={100} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>Tezkor to‘lov</h3>
                  <p className='text-[14px] text-gray font-medium'>Xaridni eng ommabop to‘lov tizimlari orqali bir zumda amalga oshiring va kursni qo‘lga kiriting. Hammasi onlayn, hammasi zamonaviy, hammasi oson..</p>
                </div>
              </div>
            </div>
            :
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/onlayn-akademiya.svg'} width={130} height={200} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>Onlayn akademiya</h3>
                  <p className='text-[14px] text-gray font-medium'>«Najot Ta’lim» digital academy — bu zamonaviy kasblar o‘qitiladigan onlayn akademiya. Qayerda bo‘lishingizdan qat’i nazar: uydami yo mehmonda, daladami yo safarda — o‘zingizga qulay tarzda va vaqtda bilim olishingiz mumkin, internet va noutbuk bo‘lsa bas.</p>
                </div>
              </div>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/O‘z ishining ustalari.svg'} width={130} height={100} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>O‘z ishining ustalari</h3>
                  <p className='text-[14px] text-gray font-medium'>Darslar katta tajribaga ega malakali mutaxassislar tomonidan tayyorlangan. O‘z ishining ustalaridan yanada ishonchli bilim va tajribaga ega bo’lasiz</p>
                </div>
              </div>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/Shunchaki kurs emas.svg'} width={130} height={100} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>Shunchaki kurs emas</h3>
                  <p className='text-[14px] text-gray font-medium'>Har bir o‘quv kursi shunday ishlab chiqilganki, ularni muvaffaqiyatli yakunlab, siz zamonaviy kasb egasiga aylanishingiz va shu sohada o‘z faoliyatingizni boshlashingiz mumkin. Hammasi o‘z qo‘lingizda.</p>
                </div>
              </div>
              <div className='flex'>
                <div className='mr-10'>
                  <Image src={'/images/home/interaktiv darslar.svg'} width={130} height={100} alt='logo' />
                </div>
                <div>
                  <h3 className='text-xl text-primary font-medium pb-4'>Interaktiv darslar</h3>
                  <p className='text-[14px] text-gray font-medium'>Darslarni o‘zlashtirish davrida sizda savollar tug‘ilishi tabiiy holat. Mentorlarga murojaat qilishingiz, o’zingizni qiziqtirgan savollarizga javob olishingiz va tavsiyalar olishingiz mumkin</p>
                </div>
              </div>
            </div>}

          <div className="mt-10 cursor-pointer flex items-center">
            <div>
              {open ? <div className="flex">
                <h1 className=" text-green-600 text-md font-semibold" onClick={handleClick}>Qisqartirish</h1>
                <ChevronUp className="mt-1 " size={16} />
              </div> :
                <div className="flex">
                  <h1 className=" text-green-600 text-md font-semibold" onClick={handleClick}>Ko'proq</h1>
                  <ChevronDown className="mt-1" size={16} />
                </div>}
            </div>


          </div>


        </div>
      </section>
      <section className="bg-light mt-10">
        <div className="container max-w-1100 py-10">
          <div>
            <h1 className="text-primary text-3xl font-bold pb-3">Yo‘nalishlar bo‘yicha kurslar</h1>
            <p className="text-gray font-bold text-[14px]">Zamonaviy sohalardan birini o‘rganing va talabgir kasb egasi bo‘ling!</p>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">

              {React.Children.toArray(
                [
                  {
                    title: 'SMM onlayn',
                    subTitle: "Ijtimoiy tarmoqlar orqali turli...",
                  },
                  {
                    title: 'Social Media Design',
                    subTitle: "Ijtimoiy tarmoqlar orqali turli...",
                  },
                  {
                    title: 'Dasturlash foundation',
                    subTitle: "Foundation dasturlash kursida C va...",
                  },
                  {
                    title: 'Adobe Illustrator',
                    subTitle: "Adobe Illustrator - vektorli...",
                  },
                  {
                    title: '.NET mutaxassislik kursi',
                    subTitle: ".NET mutaxassislik kursi yordamida...",
                  },
                  {
                    title: 'Node JS Telegram bot',
                    subTitle: "Telegram bot yasash va...",
                  },
                  {
                    title: 'Kompyuter savodxonligi...',
                    subTitle: "Ushbu kurs orqali kompyuterdan...",
                  },
                  {
                    title: 'HBS AKADEMIYASI',
                    subTitle: "No'ldan professional darajada...",
                  },

                ].map((el, key) => (

                  <div key={key} className="border border-light cursor-pointer py-3 px-4 hover:scale-105 transition duration-500 hover:bg-white hover:border-white rounded h-full ">

                    <h1 className="text-[18px] font-bold text-primary pb-4">{el.title}</h1>
                    <p className="text-gray text-sm">{el.subTitle}</p>

                  </div>

                ))
              )}
            </div>
            <p className="text-green-600 font-semibold">
              <Link href={'/courses'}>Barcha kurslarni ko'rish</Link>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-1100 py-10">
          <div>
            <h1 className="text-primary text-3xl font-bold pb-3">Bitiruvchilarimizning ish joylari:</h1>
            <p className="text-gray font-bold text-[14px]">Eng yaxshi bitiruvchilarimiz nufuzli tashkilot va kompaniyalarda faoliyat yuritadi. Zamonaviy kasb egalariga doim va har yerda talab yuqori bo‘ladi.</p>
          </div>
          <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">

            {React.Children.toArray(
              [
                {
                  image: '/images/work/work-place-epam.svg'
                },
                {
                  image: '/images/work/work-place-techart.svg'
                },
                {
                  image: '/images/work/work-place-humo.svg'
                },
                {
                  image: '/images/work/work-place-agrobank.svg'
                },
                {
                  image: '/images/work/work-place-davr-bank.svg'
                },
                {
                  image: '/images/work/work-place-texnomart.svg'
                },
                {
                  image: '/images/work/work-place-soliq.svg'
                },
                {
                  image: '/images/work/work-place-uzcard.svg'
                },
                {
                  image: '/images/work/work-place-mytaxi.svg'
                },
                {
                  image: '/images/work/work-place-faktor.svg'
                },
                {
                  image: '/images/work/work-place-jatfon.svg'
                },
                {
                  image: '/images/work/work-place-fido-studio.svg'
                },
                {
                  image: '/images/work/work-place-osmondagi-bolalar.svg'
                },
                {
                  image: '/images/work/work-place-islom-uz.svg'
                },
                {
                  image: '/images/work/work-place-cambridge.svg'
                },
                {
                  image: '/images/work/work-place-kun-uz.svg'
                },
                {
                  image: '/images/work/work-place-yoshlar-agentligi.svg'
                },
                {
                  image: '/images/work/work-place-pcg.svg'
                },

              ].map((el, key) => (

                <div key={key} className="my-10 mx-auto rounded-lg px-8 py-8 bg-light  transition duration-500 hover:bg-white hover:shadow-lg cursor-pointer">
                  <Image src={el.image} width={100} height={100} alt="epam" />
                </div>

              ))
            )}

          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-1100">
          <div>
            <h1 className="text-primary md:text-3xl text-2xl font-bold pb-3">Bitiruvchilarimizdan izohlar</h1>
            <p className="text-gray font-bold md:text-[14px] text-[12px]">Oʻquv kurslarimiz, ustozlar, qoʻlga kiritilgan bilim va koʻnikmalar, olingan natijalar haqida bitiruvchilarimizdan eshiting hamda ulardan kerakli tavsiyalar oling.</p>
          </div>
          <div className="grid  md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10">
            <div>
              <div className="block lg:absolute rounded-lg">
                <Iframe url="/video/bitiruvchilar-1.mp4?autoplay=false"
                  width="237px"
                  height="420px"
                  id=""
                  className=" bg-transparent rounded-2xl"
                  overflow="hidden" />
              </div>
              <div className="relative z-20 top-[280px] pl-4 text-sm hidden lg:inline-block">
                <span className="text-white font-semibold ">25.01.2023</span>
                <p className="text-gren font-semibold">Frontend dasturchi</p>
                <h2 className="text-white font-bold text-md">Salohiddin Dilmatov</h2>
              </div>
            </div>
            <div>
              <div className="block lg:absolute rounded-lg">
                <Iframe url="/video/bitiruvchilar-2.mp4?autoplay=false"
                  width="237px"
                  height="420px"
                  id=""
                  className=" bg-transparent rounded-2xl"
                  overflow="hidden" />
              </div>
              <div className="relative z-20 top-[280px] pl-4 text-sm hidden lg:inline-block">
                <span className="text-white font-semibold ">25.01.2023</span>
                <p className="text-gren font-semibold">SMM-menejer</p>
                <h2 className="text-white font-bold text-md">Abdumannof Tursunov</h2>
              </div>
            </div>
            <div>
              <div className="block lg:absolute rounded-lg">
                <Iframe url="/video/bitiruvchilar-3.mp4?autoplay=false"
                  width="237px"
                  height="420px"
                  id=""
                  className=" bg-transparent rounded-2xl"
                  overflow="hidden" />
              </div>
              <div className="relative z-20 top-[280px] pl-4 text-sm hidden lg:inline-block">
                <span className="text-white font-semibold ">25.01.2023</span>
                <p className="text-gren font-semibold">Grafik dizayner</p>
                <h2 className="text-white font-bold text-md">Shohzoda Sunatillayeva</h2>
              </div>
            </div>
            <div>
              <div className="block lg:absolute rounded-lg">
                <Iframe url="/video/bitiruvchilar-4.mp4?autoplay=false"
                  width="237px"
                  height="420px"
                  id=""
                  className=" bg-transparent rounded-2xl"
                  overflow="hidden" />
              </div>
              <div className="relative z-20 top-[280px] pl-4 text-sm hidden lg:inline-block">
                <span className="text-white font-semibold ">25.01.2023</span>
                <p className="text-gren font-semibold">ART-direktor</p>
                <h2 className="text-white font-bold text-md">Sayfulloh Asadullayev</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section> 
        <div className="container max-w-1100 mt-[430px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-0">
            <div>
              <Image src='/images/operator.jpg' width={5000} height={1000} alt="menejer" className="rounded-l-2xl" />
            </div>
            <div className="bg-light rounded-r-2xl py-10  pl-5 pr-14">
              <div className="bg-white py-10 px-5 rounded-2xl">
                <h1 className="font-semibold text-2xl pb-5">Yordam kerakmi?</h1>
                <p className="text-sm md:text-lg text-gray"> <Link href={'/'} className="text-orange hover:underline">FAQ</Link>  boʻlimi ham sizga yordam bera olmadimi? Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz.</p>
                <div className="mt-5">
                  <form >
                    <div>
                      <label form="first_name" className="block mb-2 text-sm font-medium text-gray">Ismingizni kiriting</label>
                      <input name="from_name" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:border-blue-500" placeholder="Ali" required />
                    </div>
                    <div className="mt-5">
                      <label form="first_name" className="block mb-2 text-sm font-medium text-gray">Telefon raqamingizni kiriting</label>
                      <PhoneInput
                        international
                        type="tel" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required
                        defaultCountry="UZ"
                        value={value}
                        onChange={(newValue) => setValue} />
                    </div>
                    <p className="text-black font-semibold text-sm mt-6">"So‘rov yuborish" tugmasini bosish orqali <br />
                      <Link className="text-orange hover:underline" href={'/'}>Platformadan foydalanish qoidalari </Link>  ga rozilik bildirasiz.
                    </p>
                    <button type="submit" className="text-white font-semibold text-center bg-orange py-2.5 w-full rounded-full mt-5 hover:bg-white hover:text-black border border-orange hover:border-orange transition">So'rov yuborish</button>
                  </form>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
