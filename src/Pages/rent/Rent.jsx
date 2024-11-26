import "./Rent.scss";
import BasicCard from "../../Components/BasicCard";
import PopularLocalitiesSlider from "../../Components/PopularLocalitiesSlider";
import IntermedidateCard from "../../Components/IntermedidateCard";
import MediumCard from "../../Components/MediumCard";
import { NavLink } from "react-router-dom";

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

      name: "Sonu Pandey",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/57e28fa977efaac7339a543873d6f682/v0/medium/1_rk_apartment-for-rent-sector_40_noida-Noida-hall.jpg",
      title: "2 BHK Apartment",
      description: "Semi Furnished",
      location: "Palm Springs, Sector 54, Gurgaon",
      size: "1,200 sq.ft",
      price: "₹12,000",

      name: "khushboo Pandey",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/34f4598ff0d4eaf24aeffcfd3ae742dd/v0/medium/1_bhk_apartment-for-rent-sector_40_noida-Noida-bedroom.jpg",
      title: "Studio Apartment",
      description: "Fully Furnished",
      location: "DLF Cyber City, Sector 24, Gurgaon",
      size: "500 sq.ft",
      price: "₹10,000",

      name: "khushi",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",

      title: "3 BHK Villa",
      description: "Luxury Villa",
      location: "Sushant Lok, Sector 43, Gurgaon",
      size: "2,500 sq.ft",
      price: "₹45,000",

      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/04933f0c62684fc71d951813d09e8874/v0/medium/1_rk_apartment-for-rent-sector_116-Noida-bedroom.jpg",
      title: "2 BHK Flat",
      description: "Newly Renovated",
      location: "Noida Extension, Sector 16, Noida",
      size: "1,000 sq.ft",
      price: "₹15,000",

      name: "Pandey",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "PRO",
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
  const expertDealersData = [
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "",
    },
  ];

  const expertDealersProData = [
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "Sonu Pandey",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "8",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "Sonu",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "9",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "pandey",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "80",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "khsushi",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "90",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "rhman",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "PRO",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e9eb718d5ee742a2c15e1f1ce80cddfd/v0/medium/1_rk_independent_house-for-rent-sector_135-Noida-bedroom.jpg",
      name: "nothing",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "PRO",
    },
  ];

  return (
    <>
      <div className="rentContainer">
        <div className="container">
          <div className="row pb-4">
            <div className="col">
              <h2>
                <span className="opacity-75 fs-3">Recently </span> Added
              </h2>
              <p className="m-0">Based on preferences of users like you</p>
              <img
                src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
                alt="line"
              />
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
                      <NavLink to={"/featuredCollection"}>
                        <IntermedidateCard
                          title={rentData.title}
                          image={rentData.image}
                          description={rentData.description}
                        />
                      </NavLink>
                    </div>
                  ))}
                </PopularLocalitiesSlider>

                {/* </div> */}
              </div>
            </div>
          </section>

          <section className="recommendedSellers mt-3">
            <div className="row pb-4">
              <div className="col">
                <h2>
                  <span className="opacity-75 fs-3">Recommended</span> Sellers
                </h2>
                <p className="m-0">
                  Sellers with complete knowledge about locality and verified
                  listings
                </p>
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
                  {expertDealersProData.map((rentData, index) => (
                    <div key={index} className="">
                      <NavLink className={"navlink"} to={"/agents"}>
                        <MediumCard
                          image={rentData.image}
                          name={rentData.name}
                          address={[rentData.address]}
                          experience={rentData.experience}
                          properties={rentData.properties}
                          pro={rentData.pro}
                        />
                      </NavLink>
                    </div>
                  ))}
                </PopularLocalitiesSlider>

                <PopularLocalitiesSlider settings={settings2}>
                  {expertDealersData.map((rentData, index) => (
                    <div key={index} className="">
                      <NavLink className={"navlink"} to={"/agents"}>
                        <MediumCard
                          image={rentData.image}
                          name={rentData.name}
                          address={[rentData.address]}
                          experience={rentData.experience}
                          properties={rentData.properties}
                          pro={rentData.pro}
                        />
                      </NavLink>
                    </div>
                  ))}
                </PopularLocalitiesSlider>
                {/* </div> */}
              </div>
            </div>
          </section>

          <section className="NewsArticles mt-3">
            <div className="row">
              <div className="col pb-4">
                <h2>
                  <span className="opacity-75 fs-3">News &</span> Articles 
                </h2>
                <p className="m-0">
                Know what`s happening in Real Estate.
                </p>
                <img
                  src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
                  alt="line"
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
