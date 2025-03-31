"use client";
import './OurTop.css'
const plants = [
  { name: "Calathea plant", price: "Rs. 309/-", image: "https://s3-alpha-sig.figma.com/img/b483/12db/ddc890f7f35ef3964ae1e7900b89782c?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O9XFKBPt-14AI1MuBiWuTQw6Wu7wer8Sm-QNaHHxYxhl2VOUXtCliU7j6733KprnxO230jbOlxHrE2hwxe7TmkK2xMyOYb1AU1Z1vtr-UjpZqzAnh4gPys76IL1M6UskuXQVBEAVBF5DAiOFTmdRt4p8joW288BrLxwnut-4NH7sPxH16mnUb8uA-flRvClRxYoMNbed8yPgcla5LWcPNryRe2ijKRfnKQTLd8lv~RnrcrDljQPctNVIgDcgf3lnCy1d7G5h2E1IS6bHPwm-syBBxH4VACbeVp10jtyAeD8Kxm2xMHMT~8JOTvWZuG1sk5RlCI~1otcDcAQgkIW3Jw__",btn:'Buy Now' },
  { name: "Desk plant", price: "Rs. 359/-", image: "https://s3-alpha-sig.figma.com/img/95e7/2828/2f4fb901ee2edc80783c2fbd7df490c2?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AdohMOje~eqiAO9Vd94LbmIyo6XQCCG8EmFQtdL2aNKMDaNAPYagoPtXqiTug~VNg2v0x2YYAIJp1Nuye-~bzMZtsSpsrTbsSJOkvjLEQpk38gwsBrKKhVu1jhLnLYGrkE28KZQZ0oYrtKTAhyUjKjqssj3cvW8fAxZUfOl10XLJnOxkFT~Tdq9bquWaIVhKNFwlm6SFE0s7M9A2lzqsigxSNvM66U-04IvwrgtyIkbCysvW8mubAPucb7S9mLsOng2sw2ZmDlA1emUFFe-27QWZ4CwXzeLvWbmj2oXarLGX517kE-YW1SnLzSWCO3t1hLZl9v8e-Y3fsbqPO8jeAw__",btn:'Buy Now' },
  { name: "Calathea ai plant", price: "Rs. 399/-", image: "https://s3-alpha-sig.figma.com/img/eb03/51a5/771ed55c7f3454bcce697dfe63237769?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NkE1~wFHmogPA0Rk2hlqvaL6QzqwlV9GolMcINMKQUyMy-MXSWQHH1pTEY8ccW3XA8zVXxE8SrmL~IMNAP~KVNNbuZuoFivlbhm~92hyzDZvDe2AClN6Kgl9RZzG666bC43cqtI44tXa5VXp7IW8MlRnvsVq2HBKBV~op-euFHXaZX60QvYKSqd0Y0oDEBps0w5NYW3dJHUyaMlq9ZlBH-KGj49L5Gdcekyd3Xy8a-f7y2J5MhxuVx6hdrxqFNSyg2AHKkbHpJF6-Qvr4XV3PGciW6850tGxweQVBofj7krN3cvnY3e-XVdInceU2GJaH9WKyE8f7W9zacVPNoGk9w__" ,btn:'Buy Now'},
  { name: "Cal 874 plant", price: "Rs. 259/-", image: "https://s3-alpha-sig.figma.com/img/5196/aba5/8f7006d90ec0712ac1d01688cde1a537?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K0-9D0~ZwYuZfgyywcIhqrPsaA7UmrLKwlaMgib9NCQvjWWAWNArlhm1CymlDx9AAzi5As6bz5GFZ9ch-SDDWbRoB8D9CK6ZcDdWna~rePjq8e5JVwxvlWgnyGNhOhojCLZB9pMbOcdrZIplqBOnPM13GpIphxaqxLFpr1~Eid7c71KjKp5tBpfEVor6yUNQikhOP5N2Be66VJW6xhHQDDw3Azwm-mERIHS5DTMZ9hc-VHECTyekK8v7MrKB~JvWQL6sKxm0TKF2-STCAMpHCJEkyDX5aoMzUWzBPh6rJ-~YpJnjs90zZ6jtBPqATpTNxSZTHZ5oUf6-rOPUwBxriA__",btn:'Buy Now' },
  { name: "Show plant", price: "Rs. 759/-", image: "https://s3-alpha-sig.figma.com/img/6d90/9165/07b2b3030961c99c6af0ebac97b86c78?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UUr8mkVXh7zSISDftYf2-AC6YnDFWwwiSfUDVHrtvEwwbwRTWRUIxNBY0OczhxmnATl31~hrm-d~bGyxfORvoBLVNw9m9xJM0LG337VUvdWmataQdQ5QoU8VaZU7uJ1R0S2uTvfdSmsMvA88yCHBRk0mTf1q9seKxn4J3WA4SbYCF-vyXJ2qEKGJ6PQMVuA4KAsi7Pcio1KcIv3LOWpzUwIu6al-QavbpNH1XBcpk-OK7x~oahffl44BYRtNsuE9F3qyD3NL2rhRUBGOFVXwDYXgqPg3VgZh4PuTcHaL1i4c8RPuISGcM8OmRIUEAwLbD98sSpYTTmNrZaLaPst3Xg__",btn:'Buy Now' },
  { name: "Calat O2 plant", price: "Rs. 659/-", image: "https://s3-alpha-sig.figma.com/img/b483/12db/ddc890f7f35ef3964ae1e7900b89782c?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O9XFKBPt-14AI1MuBiWuTQw6Wu7wer8Sm-QNaHHxYxhl2VOUXtCliU7j6733KprnxO230jbOlxHrE2hwxe7TmkK2xMyOYb1AU1Z1vtr-UjpZqzAnh4gPys76IL1M6UskuXQVBEAVBF5DAiOFTmdRt4p8joW288BrLxwnut-4NH7sPxH16mnUb8uA-flRvClRxYoMNbed8yPgcla5LWcPNryRe2ijKRfnKQTLd8lv~RnrcrDljQPctNVIgDcgf3lnCy1d7G5h2E1IS6bHPwm-syBBxH4VACbeVp10jtyAeD8Kxm2xMHMT~8JOTvWZuG1sk5RlCI~1otcDcAQgkIW3Jw__",btn:'Buy Now' },
];

export default function PlantShop() {
  return (
    <div className="min-h-screen container relative md:top-44 top-60 md:left-8 text-white flex flex-col items-center ">
      {" "}
      <h2 className="text-2xl font-bold  relative bottom-3 px-6 py-2 rounded-lg">
        Our Top Selling
      </h2>{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {" "}
        {plants.map((plant, index) => (
          <div
            key={index}
            className="bg-plant p-6 rounded-lg shadow-lg text-center"
          >
            {" "}
            <img
              src={plant.image}
              alt={plant.name}
             
              className="mx-auto"
            />{" "}
            <h3 className="mt-4 text-xl font-semibold">{plant.name}</h3>{" "}
            <p className="text-gray-400 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>{" "}
            <p className="text-green-400 text-lg font-bold mt-4">
              {plant.price}
            </p>{" "}
            <button className='btn'>{plant.btn}</button>
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
