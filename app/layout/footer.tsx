import Link from 'next/link';
import Image from "next/image";
import { BsTelegram, BsFacebook, BsYoutube, BsInstagram, BsLinkedin } from 'react-icons/bs';


export default function Footer() {
  return (
    <footer className='bg-light'>
      <div className="container max-w-1100 py-20">

        <div className='flex justify-between 2xl:flex-nowrap flex-wrap'>
          <div>
            <Link href={'/'}>
              <Image src='/images/logo.svg' width={214} height={46} alt="logo" />
            </Link>
            <p className='text-gray text-sm font-semibold w-72'>Onlayn platformaga tegishli barcha materiallar "NAJOT TA'LIM MARKAZI" MCHJning mulki hisoblanadi. Ushbu materiallardan onlayn ta'lim olishdan tashqari nusxa ko'chirish, tarqatish va boshqa maqsadlarda foydalanish qonunan man etiladi.</p>
          </div>
          <div className='ml-0 lg:ml-8 mt-2'>
            <h1 className='text-primary font-semibold mb-5'>
              Ma'lumotlar
            </h1>
            <ul className='text-gray text-sm font-semibold w-72'>
              <li className='pb-4 hover:underline'><Link href={'/'} >FAQ</Link></li>
              <li className='pb-4 hover:underline'> <Link href={'/blogs'} >Blog</Link> </li>
              <li className='pb-4 hover:underline'><Link href={'/'} >Ommavoy oferta</Link></li>
            </ul>
          </div>
          <div className='ml-0 lg:ml-8 mt-2'>
            <h1 className='text-primary font-semibold mb-5'>
              Ommabop Kurslar
            </h1>
            <ul className='text-gray text-sm font-semibold w-72'>
              <li className='pb-4 hover:underline'><Link href={'/courses'} >SMM online</Link></li>
              <li className='pb-4 hover:underline'> <Link href={'/courses'} >Social Media Design</Link> </li>
              <li className='pb-4 hover:underline'><Link href={'/courses'} >Dasturlash foundation</Link></li>
              <li className='pb-4 hover:underline'><Link href={'/courses'} >Adobe illustrator</Link></li>
            </ul>
          </div>
          <div className='ml-0 2xl:ml-8 mt-2'>
            <h1 className='text-primary font-semibold mb-5'>
              Bizning Loyihalar
            </h1>
            <ul className='text-gray text-sm font-semibold w-72'>
              <li className='pb-4 hover:underline'><Link href={'/https://www.youtube.com/@Osmondagibolalar'} >Osmondagi bolalar</Link></li>
              <li className='pb-4 hover:underline'> <Link href={'/https://www.youtube.com/watch?v=R5CYJ8zpdTY'} >0 dan 1gacha</Link> </li>
              <li className='pb-4 hover:underline'><Link href={'/https://abutech.uz/'} >Abutech</Link></li>
              <li className='pb-4 hover:underline'><Link href={'/https://t.me/alohidamavzu'} >Alohida mavzu</Link></li>
            </ul>
          </div>
        </div>
        <hr className="h-px my-8 ml-0 lg:ml-80 bg-gray-200 border-0 " />
        <div className='mt-10 flex justify-between flex-wrap  '>
          <div className=''>
            <p className='text-gray text-sm font-semibold'>© Najot Ta'lim, <br /> 2023
              Barcha huquqlar himoyalangan.</p>
          </div>
          <div className='mt-10 xl:mt-0'>
            <h1 className='text-primary font-semibold mb-5'>
              Ommabop Kurslar
            </h1>
            <div className='text-gray text-sm font-semibold w-72'>
              <p className='pb-4 hover:underline'> Mo'ljal: Rayhon milliy taomlari qarshi tomoni, 1- va 2-uylar orqa tomoni.</p>
            </div>
          </div>
          <div className='mt-10 xl:mt-0'>
            <h1 className='text-primary font-semibold mb-5'>
              Tarmoqlar
            </h1>
            <div className='text-gray text-sm font-semibold flex'>
              <BsTelegram className='w-6 h-6 ml-2 cursor-pointer hover:fill-blue-900'  />
              <BsFacebook className='w-6 h-6 ml-2 cursor-pointer hover:fill-blue-900'  />
              <BsYoutube className='w-6 h-6 ml-2 cursor-pointer hover:fill-blue-900'  />
              <BsInstagram className='w-6 h-6 ml-2 cursor-pointer hover:fill-blue-900'  />
              <BsLinkedin className='w-6 h-6 ml-2 cursor-pointer hover:fill-blue-900'  />
            </div>
          </div>
          <div className='mt-10 xl:mt-0'>
            <h1 className='text-primary font-semibold mb-5'>
              Telefon raqam:
            </h1>
            <div className='text-gray text-sm font-semibold w-72'>
              <p className='pb-4 hover:underline cursor-pointer'> +998(78)888-98-88</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
