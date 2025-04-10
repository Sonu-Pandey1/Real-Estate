import "./Home.scss";
import Spotlight from "../Components/Spotlight";
import PopularLocalitiesSlider from "../Components/PopularLocalitiesSlider";
import { NavLink } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import MediumCard from "../Components/MediumCard";
import IntermedidateCard from "../Components/IntermedidateCard";
import BasicCard from "../Components/BasicCard";
import DevelopersCard from "../Components/DevelopersCard";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


function Home() {
  const { listings, formatPrice, formatSize, capitalize } = useContext(AuthContext)

  const ProjectsInFocus = listings?.map((listing) => ({
    id: listing.id,
    image: listing.images[0] || "https://housing-images.n7net.in/01c16c28/e266a84192b405017eed4d26c83a7bf1/v0/medium/1_bhk_apartment-for-rent-sector_76-Noida-bedroom.jpg",
    title: capitalize(listing.propertyName) || "No Title",
    condition: capitalize(listing.propertyCondition) || "Row",
    company: listing.company || "Unknown Developer",
    size: capitalize(listing.buildingType) + " , " + capitalize(listing.propertyType) || "N/A",
    location: capitalize(listing.city) + "," + capitalize(listing.state) || "Unknown Location",
    price: formatPrice(listing.price) || "Price on Request",
  })) || [];

  const featuredProjects = listings?.map((listing) => ({
    id: listing.id,
    image: listing.images[0] || "https://housing-images.n7net.in/01c16c28/e266a84192b405017eed4d26c83a7bf1/v0/medium/1_bhk_apartment-for-rent-sector_76-Noida-bedroom.jpg",
    title: capitalize(listing.propertyName) || "No Title",
    company: listing.company || "by ESCON INFRA REALTORS",
    description: capitalize(listing.propertyCondition) || "Row",
    location: capitalize(listing.address) + ", " + capitalize(listing.city) + ", " + capitalize(listing.state) || "Unknown Location",
    size: formatSize(listing.size) || "N/A",
    price: formatPrice(listing.price) || "Price on Request",
  })) || [];

  const recentlyAdded = listings?.map((listing) => ({
    id: listing.id,
    image: listing.images[0] || "https://housing-images.n7net.in/01c16c28/e266a84192b405017eed4d26c83a7bf1/v0/medium/1_bhk_apartment-for-rent-sector_76-Noida-bedroom.jpg",
    title: capitalize(listing.propertyName) || "No Title",
    company: listing.company || "by ESCON INFRA REALTORS",
    description: capitalize(listing.propertyCondition) || "Row",
    location: capitalize(listing.address) + ", " + capitalize(listing.city) + ", " + capitalize(listing.state) || "Unknown Location",
    size: formatSize(listing.size) || "N/A",
    price: formatPrice(listing.price) || "Price on Request",
  })) || [];

  const blogData = [
    {
      image:
        "https://housing.com/news/wp-content/uploads/2024/07/Top-areas-in-Noida-Extension-for-investment-f.jpg",
      title: "Top areas in Noida Extension for investment",
      description:
        "With new infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential.",
      writerName: " Sonu Pandey",
      publishTime: "Aug 2024",
    },
    {
      image:
        "https://housing.com/news/wp-content/uploads/2018/04/Buying-in-a-project-on-a-leasehold-plot-f.jpg",
      title: "Buying a project on a leasehold plot: What you should know?",
      description:
        "A property  infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential where you lease the land from a landlord for a specific period is called leasehold property.",
      writerName: "Khushboo",
      publishTime: "Sep 2024",
    },
    {
      image:
        "https://assets-news.housing.com/news/wp-content/uploads/2020/02/29105827/Jewar-Airport-No-significant-gains-for-the-property-market-FB-1200x700-compressed.jpg",
      title:
        "Everything you want to know about Noida International Airport at Jewar",
      description:
        "The Noida  infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential International Airport at Jewar is slated to be operational by April 2025",
      writerName: "Riyhan",
      publishTime: "Oct 2024",
    },
    {
      image:
        "https://housing.com/news/wp-content/uploads/2024/05/Noida-metro-aqua-line-extension-F.jpg",
      title: "Noida Metro receives approval for Aqua Line Extension",
      description:
        "Under this infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential extension project, 11 new metro stations will be added to the Aqua Line.",
      writerName: "Sonu Pandey",
      publishTime: "Nov 2024",
    },
    {
      image:
        "https://assets-news.housing.com/news/wp-content/uploads/2020/07/22174727/Everything-home-buyers-need-to-know-about-the-repo-rate-and-how-it-affects-them-FB-1200x700-compressed.jpg",
      title: "Top areas in Noida Extension for investment",
      description:
        "With new infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential.",
      writerName: "Sonu Pandey",
      publishTime: "Aug 2024",
    },
    {
      image:
        "https://housing.com/news/wp-content/uploads/2024/02/Mahindra-Lifespaces-launches-plotted-development-project-in-Chennai-f.jpg",
      title: "Top areas in Noida Extension for investment",
      description:
        "With new infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential.",
      writerName: "Sonu Pandey",
      publishTime: "Aug 2024",
    },
    {
      image:
        "https://housing.com/news/wp-content/uploads/2024/05/Godrej-Properties-achieves-over-Rs-2000-cr-through-launch-of-Godrej-Jardinia-in-Noida-f.jpg",
      title: "Top areas in Noida Extension for investment",
      description:
        " infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential With new infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential.",
      writerName: "Sonu Pandey",
      publishTime: "Aug 2024",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    focusOnSelect: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const settings4 = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const settings5 = {
    dots: false,
    infinite: true,
    speed: 600,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    focusOnSelect: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const settings6 = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    focusOnSelect: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const DevelopersProjectsData = [
    {
      image:
        "https://housing-images.n7net.in/4f2250e8/b0801f0e089c7b572e75758f9f126eae/v0/medium/eros_sampoornam_3-noida_extension-greater+noida-ajay_enterprises_pvt_ltd.jpeg",
      logo: "https://housing-images.n7net.in/0b8ad14c/fb26d0d390f8954bf2485c299976f3bb/v0/medium.png",
      title: "Ajay Enterprise Pvt Ltd",
      description:
        "EROS Group, a Company which needs no introduction “The Recognized Real Estate Giant in India” with special strength in and around Delhi, exuberate quality and excellence with over 80 years of expertise and experience. It has created some of the most pioneering episodes of Real Estate Promotion and Town Planning for a period of over 80 impressive years.",
      establised: "1947",
      projects: "3",
      name: "Eros Sampoornam 3",
      location: "Noida Extension, Grater Noida",
      price: "69.72 L - 1.8 Cr",
    },
    {
      image:
        "https://housing-images.n7net.in/4f2250e8/c925ab04f02f54312c67fe3ec4b889e3/v0/medium/ats_picturesque_reprieves_phase_2-sector_152-noida-ats_infrastructure_limited.jpeg",
      logo: "https://housing-images.n7net.in/4f2250e8/c925ab04f02f54312c67fe3ec4b889e3/v0/medium/ats_picturesque_reprieves_phase_2-sector_152-noida-ats_infrastructure_limited.jpeg",
      title: "Elite Group",
      description:
        "ELITE GROUP is one of the leading real estate developers in the land of NCR.Elite Group was born in July 2010 with Flagship Company as HR Oracle Developers Pvt. Ltd. which was a SPV between HR Buildcon Pvt Ltd. and Oracle Real Tech Pvt Ltd.Both these companies have been in real estate sector from quite last 35 years. Redefining urban living in NCR through innovative and sustainable construction. With a commitment to quality, community, and the environment, we create exceptional housing that elevates lifestyles and enriches neighborhoods, such as Noida & Greater Noida.Fueled by architectural excellence and modern understanding, we design spaces that foster well-being and connectivity. Embracing technology and safety, we exceed expectations, leaving symbols of progress.Transparency, local collaboration, and co-consciousness define our ecological efforts. We inspire industry-wide sustainable practices, envisioning vibrant, harmonious communities. Our foundation lies on integrity, professionalism, relentless excellence. We craft living spaces that embody dreams and promise a brighter tomorrow.",
      establised: "2000",
      projects: "3",
      name: "Golfgreen Elite Golf Green",
      location: "Sector79, Grater Noida",
      price: "1.68 Cr - 3.76 Cr",
    },
    {
      image:
        "https://housing-images.n7net.in/4f2250e8/d254fd1b0f28b8d9c00eb56762a3952c/v0/medium/palm_olympia_ph_2-noida_extension-greater+noida-sam_india.jpeg",
      logo: "https://housing-images.n7net.in/0b8ad14c/7ddb2daf178ee72645aaeea83bc19527/v1/medium.jpg",
      title: "Sam India",
      description:
        "A name that beautifully blends the most integral ways of life. Green and Active. An artful blend of modern architecture where nature serenades with urban delight. Amidst hurried footsteps, there exists a quite refuge, hidden like a precious gem waiting to be unraveled. The gentle rustle of the leaves, the hum of the city life muted by the calmness of a rooftop garden, The stillness of the blue lagoon in a concrete labyrinth, these are the whispers of serenity in urban chaos.",
      establised: "1947",
      projects: "3",
      name: "Palm Olympia Ph 2",
      location: "Noida Extension, Grater Noida",
      price: "1.8 Cr - 1.99 Cr",
    },
    {
      image:
        "https://housing-images.n7net.in/4f2250e8/b0801f0e089c7b572e75758f9f126eae/v0/medium/eros_sampoornam_3-noida_extension-greater+noida-ajay_enterprises_pvt_ltd.jpeg",
      logo: "https://housing-images.n7net.in/0b8ad14c/fb26d0d390f8954bf2485c299976f3bb/v0/medium.png",
      title: "Top areas in Noida Extension for investment",
      description:
        "With new infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential infrastructure projects and the upcoming Jewar airport in the region, the real estate market in Noida Extension sees significant growth potential.",
      establised: "1947",
      projects: "3",
      name: "Eros Sampoornam 3",
      location: "Noida Extension, Grater Noida",
      price: "69.72 L - 1.8 Cr",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      {/* Spotlight Section */}
      <section className="mt-4 mt-sm-0">
        <Spotlight />
      </section>

      <section className="featuredCollections container mt-5">
        <div className="row">
          <div className="col">
            <h2>
              <span className="opacity-75 fs-3">Projects in </span> Focus
            </h2>
            <p className="m-0">NoteWorthy projects in Noida</p>
            <img
              className="imgg"
              src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
              alt="line"
            />
          </div>
        </div>
        <div className="row">
          <div className="col p-0  ">
            <PopularLocalitiesSlider settings={settings4}>
              {ProjectsInFocus.map((ProjectsInFocus, index) => (
                <div key={index} className="">
                  <NavLink to={`/search/${ProjectsInFocus.id}`}>
                    <IntermedidateCard
                      title={ProjectsInFocus.title}
                      image={ProjectsInFocus.image}
                      company={ProjectsInFocus.company}
                      size={ProjectsInFocus.size}
                      location={ProjectsInFocus.location}
                      price={ProjectsInFocus.price}
                      condition={ProjectsInFocus.condition}
                    />
                  </NavLink>
                </div>
              ))}
            </PopularLocalitiesSlider>
          </div>
        </div>
      </section>

      {/* featured Developers     */}
      {/*  //todo---- for this we neeed to develop post a project for us or developers then fetch details there only we and devvloper handle posting and calling othere propertys there is indivisaul and dealrs also if delear post proprty ther is name and compnay name if indivisual post then only name */}

      <section className="py-5 featuredDevelopersSection">
        <div className="container">
          <div className="row">
            <div>
              <h2>
                <span className="opacity-75 fs-3">Featured </span>Developers
              </h2>
              <p className="text-muted m-0">Prominent developers in Noida</p>
              <img
                className="imgg"
                src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
                alt="line"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <PopularLocalitiesSlider settings={settings5}>
                {DevelopersProjectsData.map((DevelopersProjectsData, index) => (
                  <div key={index} className="">
                    <NavLink to={"/developerProjects"} className="text-decoration-none">
                      <DevelopersCard className=""
                        title={DevelopersProjectsData.title}
                        image={DevelopersProjectsData.image}
                        projects={DevelopersProjectsData.projects}
                        name={DevelopersProjectsData.name}
                        location={DevelopersProjectsData.location}
                        price={DevelopersProjectsData.price}
                        description={DevelopersProjectsData.description}
                        establised={DevelopersProjectsData.establised}
                        logo={DevelopersProjectsData.logo}
                      />
                    </NavLink>
                  </div>
                ))}
              </PopularLocalitiesSlider>
            </div>
          </div>
        </div>
      </section>

      <section className="recentlyAdded container">
        <div className="row pb-4">
          <div className="col">
            <h2>
              <span className="opacity-75 fs-3">Featured </span> Propertys
            </h2>
            <p className="m-0">Based on preferences of users like you</p>
            <img
              className="imgg"
              src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
              alt="line"
            />
          </div>
        </div>
        <div className="row">
          <div className="col p-0">
            <PopularLocalitiesSlider settings={settings}>
              {recentlyAdded.map((recentlyAdded, index) => (
                <div key={index} className="" >
                  <BasicCard
                    id={recentlyAdded.id}
                    title={recentlyAdded.title}
                    image={recentlyAdded.image}
                    description={recentlyAdded.description}
                    location={recentlyAdded.location}
                    size={recentlyAdded.size}
                    price={recentlyAdded.price}
                  />
                </div>
              ))}
            </PopularLocalitiesSlider>
          </div>
        </div>
      </section>

      <section className="featuredProjects container">
        <div className="row pb-4">
          <div className="col">
            <h2>
              <span className="opacity-75 fs-3">Featured </span>Projects
            </h2>
            <p className="m-0">Exclusive showcase of top projects</p>
            <img
              className="imgg"
              src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
              alt="line"
            />
          </div>
        </div>
        <div className="row">
          <div className="col p-0">
            <PopularLocalitiesSlider settings={settings3}>
              {featuredProjects.map((featuredProjects, index) => (
                <div key={index} className="">
                  <BasicCard
                    id={featuredProjects.id}
                    title={featuredProjects.title}
                    company={featuredProjects.company}
                    image={featuredProjects.image}
                    description={featuredProjects.description}
                    location={featuredProjects.location}
                    size={featuredProjects.size}
                    price={featuredProjects.price}
                    owner={featuredProjects.owner}
                  />
                </div>
              ))}
            </PopularLocalitiesSlider>
          </div>
        </div>
      </section>

      {/* <section className="featuredCollections container mt-5">
        <div className="row">
          <div className="col">
            <h2>
              <span className="opacity-75 fs-3">Featured</span> Collections
            </h2>
            <p className="m-0">Handpicked projects for you</p>
            <img
              className="imgg"
              src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
              alt="line"
            />
          </div>
        </div>
        <div className="row">
          <div className="col p-0  ">
            <PopularLocalitiesSlider settings={settings2}>
              {featuredCollections.map((featuredCollections, index) => (
                <div key={index} className="">
                  <NavLink to={"/featuredCollection"}>
                    <IntermedidateCard
                      title={featuredCollections.title}
                      image={featuredCollections.image}
                      description={featuredCollections.description}
                    />
                  </NavLink>
                </div>
              ))}
            </PopularLocalitiesSlider>
          </div>
        </div>
      </section> */}

      {/* Sallers */}

      <section>
        <div className="container">
          <div className="row">
            <div className="col housingExpert mt-5 py-3">
              <p className=" fs-2">
                Recommended <span className=" fw-medium">Sellers</span>
              </p>
              <p className=" text-muted">
                Sellers with complete knowledge about locality and verified
                listings
              </p>
              <PopularLocalitiesSlider settings={settings2}>
                {expertDealersProData.map((rentData, index) => (
                  <div key={index} className="mediumCardWrapper">
                    <NavLink
                      className={" text-decoration-none text-dark"}
                      to={"/agents"}
                    >
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
                    <NavLink
                      className={"text-decoration-none text-dark"}
                      to={"/agents"}
                    >
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
            </div>
          </div>
        </div>
      </section>

      <article>
        <section className="NewsArticles mt-3 mb-4">
          <div className="container">
            <div className="row">
              <div className="col pb-4">
                <h2>
                  <span className="opacity-75 fs-3">News &</span> Articles
                </h2>
                <p className="m-0">Know what`s happening in Real Estate.</p>
                <img
                  className="imgg"
                  src="https://masaischool.com/images/new-homepage/yellow-vector.svg"
                  alt="line"
                />
              </div>
            </div>
            <div className="row">
              <div className="col mb-3">
                <PopularLocalitiesSlider settings={settings6}>
                  {blogData.map((blogData, index) => (
                    <div key={index} className="">
                      <NavLink
                        className={"text-decoration-none text-dark"}
                        to={"/news-articles"}
                      >
                        <BlogCard
                          image={blogData.image}
                          title={blogData.title}
                          description={[blogData.description]}
                          writerName={blogData.writerName}
                          publishTime={blogData.publishTime}
                        />
                      </NavLink>
                    </div>
                  ))}
                </PopularLocalitiesSlider>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default Home;
