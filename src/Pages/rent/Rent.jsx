import "./Rent.scss";
import BasicCard from "../../Components/BasicCard";
import PopularLocalitiesSlider from "../../Components/PopularLocalitiesSlider";
import IntermedidateCard from "../../Components/IntermedidateCard";
import MediumCard from "../../Components/MediumCard";

export default function Rent() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings2 = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const RentData = [
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e266a84192b405017eed4d26c83a7bf1/v0/medium/1_bhk_apartment-for-rent-sector_76-Noida-bedroom.jpg",
      title: "1 BHK Apartment",
      description: "Fully Furnished",
      location: "Amarpali Silicon City, Sector 76, Noida",
      size: "750 sq.ft",
      price: "₹8,000",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/57e28fa977efaac7339a543873d6f682/v0/medium/1_rk_apartment-for-rent-sector_40_noida-Noida-hall.jpg",
      title: "2 BHK Apartment",
      description: "Semi Furnished",
      location: "Palm Springs, Sector 54, Gurgaon",
      size: "1,200 sq.ft",
      price: "₹12,000",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/34f4598ff0d4eaf24aeffcfd3ae742dd/v0/medium/1_bhk_apartment-for-rent-sector_40_noida-Noida-bedroom.jpg",
      title: "Studio Apartment",
      description: "Fully Furnished",
      location: "DLF Cyber City, Sector 24, Gurgaon",
      size: "500 sq.ft",
      price: "₹10,000",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      title: "3 BHK Villa",
      description: "Luxury Villa",
      location: "Sushant Lok, Sector 43, Gurgaon",
      size: "2,500 sq.ft",
      price: "₹45,000",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/04933f0c62684fc71d951813d09e8874/v0/medium/1_rk_apartment-for-rent-sector_116-Noida-bedroom.jpg",
      title: "2 BHK Flat",
      description: "Newly Renovated",
      location: "Noida Extension, Sector 16, Noida",
      size: "1,000 sq.ft",
      price: "₹15,000",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/85865526aea61cfc32e724010063c497/v0/medium/1_rk_apartment-for-rent-sector_52_noida-Noida-bedroom.jpg",
      title: "1 RK Apartment",
      description: "Compact Studio",
      location: "Galleria Market, Sector 28, Gurgaon",
      size: "350 sq.ft",
      price: "₹5,000",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/7cc8a608462db672fa66482dd086cf78/v0/medium/1_bhk_independent_house-for-rent-sector_49-Noida-bedroom.jpg",
      title: "3 BHK Penthouse",
      description: "Fully Furnished",
      location: "DLF Phase 5, Sector 53, Gurgaon",
      size: "2,200 sq.ft",
      price: "₹60,000",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "1 BHK Flat",
      description: "Affordable Housing",
      location: "Sector 70, Faridabad",
      size: "600 sq.ft",
      price: "₹7,000",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "2 BHK Duplex",
      description: "Spacious Layout",
      location: "South City 1, Gurgaon",
      size: "1,500 sq.ft",
      price: "₹25,000",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "4 BHK Villa",
      description: "Ultra-Luxury Villa",
      location: "Golf Course Road, Gurgaon",
      size: "3,000 sq.ft",
      price: "₹1,00,000",
    },
  ];

  return (
    <>
      <div className="rentContainer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>
                <span className="opacity-75 fs-3">Recently </span> Added
              </h2>
              <p className="m-0">Based on preferences of users like you</p>
              <img
                src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
                alt="line"
              />
              {/* <img src="data:image/png;base64,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" alt="icon" /> */}
            </div>
          </div>
          <div className="row">
            <div className="col bg-danger p-0 ">
              <PopularLocalitiesSlider settings={settings}>
                {RentData.map((rentData, index) => (
                  <div key={index} className="">
                    <BasicCard
                      title={rentData.title}
                      image={rentData.image}
                      description={rentData.description}
                      location={rentData.location}
                      size={rentData.size}
                      price={rentData.price}
                    />
                  </div>
                ))}
              </PopularLocalitiesSlider>
            </div>
          </div>

          <section className="featuredCollections mt-5">
            <div className="row">
              <div className="col">
                <h2>
                  <span className="opacity-75 fs-3">Featured</span> Collections
                </h2>
                <p className="m-0">Handpicked projects for you</p>
                <img
                  src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
                  alt="line"
                />
              </div>
            </div>
            <div className="row">
              <div className="col p-0  ">
                {/* <div className="IntermedidateCardContainer"> */}
      
                   
                   <PopularLocalitiesSlider settings={settings2}>
                   {RentData.map((rentData, index) => (
                  <div key={index} className="">
                    <IntermedidateCard
                      title={rentData.title}
                      image={rentData.image}
                      description={rentData.description}
                    
                    />
                  </div>
                ))}

                   </PopularLocalitiesSlider>
                {/* </div> */}
              </div>
            </div>
          </section>

          <section className="recommendedSellers mt-5">
            <div className="row">
              <div className="col">
                <h2>
                  <span className="opacity-75 fs-3">Recommended</span> Sellers
                </h2>
                <p className="m-0">Sellers with complete knowledge about locality and verified listings</p>
                <img
                  src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
                  alt="line"
                />
              </div>
            </div>
            <div className="row">
              <div className="col p-0  ">
                {/* <div className="IntermedidateCardContainer"> */}
      
                   
                   <PopularLocalitiesSlider settings={settings2}>
                   {RentData.map((rentData, index) => (
                  <div key={index} className="">
                    <MediumCard
                      title={rentData.title}
                      image={rentData.image}
                      description={rentData.description}
                    
                    />
                  </div>
                ))}

                   </PopularLocalitiesSlider>
                {/* </div> */}
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
