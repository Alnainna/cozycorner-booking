import Image from 'next/image';

export const heading1 = (
  <>
    <h3 className='font-heading mb-7'>COZYCORNER BOOKING</h3>
    <p className='text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg'>
    With Cozycorner Booking, Unlock the Door to Comfort and Elegance.
    Discover Your Perfect Retreat – Indulge in our selection of exquisite rooms 
    tailored for your comfort and pleasure.
    </p>
    <button className='btn-primary'>Get Started</button>
  </>
);

export const section2 = (
  <div className='md:grid hidden gap-8 grid-cols-1'>
    <div className='rounded-2xl overflow-hidden h-48'>
      <Image
        src='/images/img-1.jpg'
        alt='img-1'
        width={300}
        height={300}
        className='img scale-animation'
      />
    </div>

    <div className='grid grid-cols-2 gap-8 h-48'>
      <div className='rounded-2xl overflow-hidden'>
        <Image
          src='/images/img-2.jpg'
          alt='img-2'
          width={300}
          height={300}
          className='img scale-animation'
        />
      </div>
      <div className='rounded-2xl overflow-hidden'>
        <Image
          src='/images/img-3.jpg'
          alt='img-3'
          width={300}
          height={300}
          className='img scale-animation'
        />
      </div>
    </div>
  </div>
);
