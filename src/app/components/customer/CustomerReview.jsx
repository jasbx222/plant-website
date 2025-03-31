import { CupSoda, LineChart } from "lucide-react";
import "../OurTrendy/OurTrendy.css";

const reviews = [
  {
    name: "Nain Josi",
    image:
      "https://s3-alpha-sig.figma.com/img/4a56/d454/f235cd5c1971dead64a93dc4aaa9a014?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BWMu6-FiNGoG8Rfwhi29hw43dJyOz9f4MbZe0bwgnQ-7IzQMYO~klpjdZdeUqc9e3yElKYd-M2bvk7ndzrAtIbf3CFCoTs7YADshcfLVuG0lceTvFsrI1ztarQGDrElvvW3xPqo5Jl4n2pWJWUfDemQdy1yYIC5sEWv-ukfIuFPtAnLS~R2wslgWN2BpxLTDzuayF02sFlvKJ-WGc~eX1HhTFpBX2SQ5VboisYFojW~jJBl4s1~vXis1B3lvKA4iDqjD3uevyofN6xSFkM-pTLNJnhMnZXemy9bCVzLII~2LnFMfj3Hi5CdazO5d1VHeS2YMcQo1VPjxK7c30nlKwg__",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Alina Thakur",
    image:
  "https://s3-alpha-sig.figma.com/img/4ffd/e716/5e260e2e279d043e1b6d943cb283c7a8?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ditUotYZ6S3eL-Lf16nAqNip2jDDWf3~AjSRPJrrroQ8UKAXNwIyfxnsPJhu6Da4GFBEwmal2EaTKfjiXHkDcmO-sz3vITd5KHMuF9BtYhhhalo4H3LDr9ePRgYoRVzZJ3LU43~LsB6~tc02LVqSgLA3ctjS81-tCCNIZMs-x7PT5hN8ADHYteOy8~JZM7L-JB4yXcj8pgLsGldt44WzcBHUST1WUvxDN5XhjCaVSWr0jkaxolObqRwvXyk9FZii12ymjdsXhmJteWLFpcIHUp2taPKdPHz6-AJucWIWC46wvX9Bb2kzI7KOxte~gpNPJrWNSvoxlO3PY8c5i2DBGw__",
      rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Max Makvana",
    image:
  "https://s3-alpha-sig.figma.com/img/4858/8321/ff69f90e7d4eef1028e0f502f53fa5a6?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OMNAHTAKLLZ03-3q5Uy26OtRLeg~G5otujp~fLpMp5oOmykkw8pghG8xQms6avKLWo9YT7o7kIczZi1k~iymiVgm8IKniGtp~VuxO6qqlOrqWi~CqTYPxwJ2eVOr1duacvyrb0KMD-P-ocJzz0UaK8GEi0xcYVmin6VWUmWh-xnl~QzwqrU7T3nDczgUqi2BAoe6QuzAckU8GcO6Pd0MI9zqkGKyjhewxaguGHvmvNx8QC~xJNy5ApL0oUOG~xFz8NGNuKtGRuFF3q3PKwV~NctMokF6y56CLAT7tYBkBp7AZV9Cw8-sa4w8EcLbkiET8dicUwmvwOQQYHW4qY~fPg__",
  
      rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function CustomerReview() {
  return (
    <section
      className="py-16 relative top-72"
      style={{
        height: "100vh",
      }}
    >
      <h2 className="text-white text-3xl flex justify-center gap-4 items-center font-semibold text-center mb-8 relative md:bottom-20">
     <span> Customer Review</span>
      <LineChart size={40} style={{
        color:'rgba(255, 255, 255, 0.5)'
      }}/>
      </h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-customer rounded-2xl  p-6 text-white shadow-lg w-80 sm:w-72 md:w-80 lg:w-96"
          >
            <div className="flex items-center -z-30 justify-center  gap-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="rounded-full z-50 relative bottom-6"
                style={{ borderRadius: "50%", height: "70px", width: "70px" }}
              />
              <div>
                <h3 className="text-xl font-bold">{review.name}</h3>
                <div className="flex">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
