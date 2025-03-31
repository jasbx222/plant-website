import './OurTrendy.css'

const OurTrendy = () => {
  return (
    <div className='relative top-44 w-full px-5 md:px-20'>
      <h3 className='text-center text-3xl md:text-5xl text-white'>Our Trendy Plants</h3>

      <div className='flex flex-col md:flex-row justify-between items-center mt-10'>
        {/* صورة المنتج */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img 
            className='w-full md:w-3/4 rounded-lg shadow-lg'
            src="https://s3-alpha-sig.figma.com/img/b483/12db/ddc890f7f35ef3964ae1e7900b89782c?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O9XFKBPt-14AI1MuBiWuTQw6Wu7wer8Sm-QNaHHxYxhl2VOUXtCliU7j6733KprnxO230jbOlxHrE2hwxe7TmkK2xMyOYb1AU1Z1vtr-UjpZqzAnh4gPys76IL1M6UskuXQVBEAVBF5DAiOFTmdRt4p8joW288BrLxwnut-4NH7sPxH16mnUb8uA-flRvClRxYoMNbed8yPgcla5LWcPNryRe2ijKRfnKQTLd8lv~RnrcrDljQPctNVIgDcgf3lnCy1d7G5h2E1IS6bHPwm-syBBxH4VACbeVp10jtyAeD8Kxm2xMHMT~8JOTvWZuG1sk5RlCI~1otcDcAQgkIW3Jw__" 
            alt="Plant"
          />
        </div>

        {/* تفاصيل المنتج */}
        <div className='w-full md:w-1/2 text-center md:text-left mt-5 md:mt-0'>
          <h3 className='text-white text-2xl md:text-4xl font-semibold'>For Small Desk AI Plant</h3>
          <p className='text-white mt-3 md:w-3/4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <span className='text-white text-xl font-bold mt-2 block'>Rs. 599/-</span>
          
          {/* زر الشراء */}
          <div className='flex justify-center md:justify-start items-center gap-5 mt-5'>
            <button className='btn mt-3 hover:bg-green-500 text-white px-5 py-2 rounded-lg shadow-lg'>Buy Now</button>
            <img 
              src="https://s3-alpha-sig.figma.com/img/0cc1/2c30/ffef0466f2779edadcefe9250d10e34e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EX5HgtAr2QNbM7wfaqVY9ixxIG6gFKkDhFZYM04UZonn0MXkmF-9izj3bnr9vlxzHvOWgZXntwuB9dE9~6cd~kWqwGEnhevMTY5sDGBg29zF16XFcqemW7XV9EeLirv1YC85cA-6ehlsEgASmMTpuRRBSb5fbUqqAOFOcq5Vj~fYBPsY0~CELBtpgHhe7dy1JCb6ThuMZUQRO1bmB6JnRyrAjM-3JXHP08h0BQ2U8BQxDJKaEw2QncwbDbSwp224~kjPXQneHmDIO7kSJAys1xx7GZZ-VCP~bdxERDJvrOUfA-Hr4AcJTy9116XUa5xgoEwZ6v9WgSzCQXCsneB1Sw__"
              className='w-10 h-10'
              alt="Icon"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTrendy;
