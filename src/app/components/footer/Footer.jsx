import { EqualApproximatelyIcon, Smile } from 'lucide-react';
import '../OurTopSelling/OurTop.css'
export default function Footer() {
  return (
    <footer className="bg-footer relative top-96 md:top-0 text-white py-8">
      {" "}
      <div className=" relative top-32 md:top-0 mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {" "}
        <div>
          {" "}
          <div className="flex items-center gap-2 mb-4">
            {" "}
            <img
              src="https://s3-alpha-sig.figma.com/img/5e88/b521/17aa40baa6a96e43b5c4e57858edaa47?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ObA0JwyqafNxVJbvxozwQRM5SfmPoh3RnqTy5LPS4Yl5GRpY6U5UKqKnYrLGwQIpdfVuSFTpVVV7vjeaXnt0xG9O70hbWGN3TEqN884ztK-E9zTLVL3ViGISszD1N7BLgS4jMtQIwnnjufi-qSJrmhK8wY2it3Z4GnNVN6ZT7P7BwXS6yQIdB-dq1QGddrR7kkl6w99xrWkiG-vJtgtDnL5nRFIGqwSEuLcHYrVjo-GcokqbtGBM~z35Ca-xWPvyKrG~5iMkXkIJg8Uf74jSZwsbDMr68A28FnAkhlm9ZYWhoQfTvdcI1tz-kGJimkaRogmRbzra~fofSURE-B~yQg__"
              alt="Plant Icon"
              className="w-10 h-10"
            />{" "}
            <h1 className="text-3xl font-bold">Planto.</h1>{" "}
          </div>{" "}
          <p className="text-xl md:relative md:left-10 max-w-xs mb-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>{" "}
          <div className="flex gap-4 text-xl md:relative md:left-10 max-w-xs mb-4 md:top-5">
            {" "}
            <a href="#" className="text-white ">
              FB
            </a>{" "}
            <a href="#" className="text-white">
              TW
            </a>{" "}
            <a href="#" className="text-white">
              LI
            </a>{" "}
            ----------{">"}
          </div>{" "}
        </div>{" "}
        <div>
          {" "}
          <h2 className="text-xl font-semibold mb-3">Quick Link's</h2>{" "}
          <ul className="space-y-1">
            {" "}
            <li>
              <a href="#" className="text-white text-lg">
                Home
              </a>
            </li>{" "}
            <li>
              <a href="#" className="text-white text-lg">
                Type's Of plant's
              </a>
            </li>{" "}
            <li>
              <a href="#" className="text-white text-lg">
                Contact
              </a>
            </li>{" "}
            <li>
              <a href="#" className="text-white text-lg">
                Privacy
              </a>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div>
          {" "}
          <h2 className="text-xl font-semibold mb-3 relative bottom-5 flex"> <span>For Every Update.</span><Smile color='yellow'/></h2>{" "}
          <div className="flex items-center bg-plant  text-black rounded-lg overflow-hidden h-12">
            {" "}
            
            <input
              type="email"
      placeholder='Enter Email'
              className="p-3 w-full  text-white text-center outline-none"
            />{" "}
            <button className=" btn text-black px-4 p-5 py-3 font-semibold border">
              SUBSCRIBE
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="text-center text-sm mt-4">
        {" "}
        <p> © Jassim Devloper </p>{" "}
      </div>{" "}
    </footer>
  );
}
