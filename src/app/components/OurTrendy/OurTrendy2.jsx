import './OurTrendy.css'

const OurTrendy = () => {
  return (
    <div className='relative top-44 w-full px-5 md:px-20'>
      <div className='flex  flex-col-reverse md:flex-row justify-between items-center mt-10'>
    

        {/* تفاصيل المنتج */}
        <div className='w-full md:w-1/2 text-center relative left-6 md:text-left mt-5 md:mt-0'>
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
            {/* صورة المنتج */}
            <div className='w-full md:w-1/2 flex justify-center'>
          <img 
            className='w-full md:w-3/4 rounded-lg shadow-lg'
            src="https://s3-alpha-sig.figma.com/img/444f/ba49/a2674d2262c5455bcc501cb91b314490?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o~eTTCm0-LJLN5Vrbh5eyWyj4DvOTPm2VejUQCrmhUu7WbJzRQgOpcrxWt97LC1ubMHr9MNnOK-OYyL6U~7l5p8eatROV4~CKwAU4GAxX1l5vntsDMcuA7G4LXped2e2rwSP4kbspPE-YNP-12dPh1g4pV1uh5wTCrLwdgX430O1LhZ0or4vMwhfpsc9FrYB4Hu7ptyR58I5v5bcKPyzwsn-7Fh3DIHX~oYs01J90wUKhc6~mPNdFwypG49zogQ4N0a5eMrlvqcJioKqTXjnmQXlOUyAQzy05s2gzf8Hpr3mQfepPZU0243MAvLqlvjE~yVgD2~MF4PQX831bWcqdA__" 
            alt="Plant"
          />
        </div>
      </div>
    </div>
  )
}

export default OurTrendy;
