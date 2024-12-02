import "./Home.scss";
import Spotlight from "../Components/Spotlight";
import PopularLocalitiesSlider from "../Components/PopularLocalitiesSlider";
import { NavLink } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import MediumCard from "../Components/MediumCard";
import IntermedidateCard from "../Components/IntermedidateCard";
import BasicCard from "../Components/BasicCard";
import DevelopersCard from "../Components/DevelopersCard";

function Home() {
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

  var settings5 = {
    dots: false,
    infinite: true,
    speed: 600,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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

  var settings4 = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
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

  var settings3 = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 3,
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

  const ProjectsInFocus = [
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e266a84192b405017eed4d26c83a7bf1/v0/medium/1_bhk_apartment-for-rent-sector_76-Noida-bedroom.jpg",
      title: "Elite X",
      description: "Fully Furnished",
      company: "By ELite Group",
      size: "3,4 BHK Apatment",
      location: "Noida Extension, Grater Noida",
      price: "1.92 Cr - 3.07 Cr",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e266a84192b405017eed4d26c83a7bf1/v0/medium/1_bhk_apartment-for-rent-sector_76-Noida-bedroom.jpg",
      title: "Rg Luxury Phase 2",
      description: "Fully Furnished",
      company: "By Bhutani Group",
      size: "3,4 BHK Apatment",
      location: "Noida Extension, Grater Noida",
      price: "92 La - 1.07 Cr",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e266a84192b405017eed4d26c83a7bf1/v0/medium/1_bhk_apartment-for-rent-sector_76-Noida-bedroom.jpg",
      title: "Steller One Phase 3",
      description: "Fully Furnished",
      company: "By Pandey Group",
      size: "3,4 BHK Apatment",
      location: "Noida Extension, Grater Noida",
      price: "1.12 Cr - 2.07 Cr",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e266a84192b405017eed4d26c83a7bf1/v0/medium/1_bhk_apartment-for-rent-sector_76-Noida-bedroom.jpg",
      title: "Eros Sampooram 3",
      description: "Fully Furnished",
      company: "By Khushi",
      size: "2 BHK Apatment",
      location: "Noida Extension, Grater Noida",
      price: "1 Cr - 3 Cr",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e266a84192b405017eed4d26c83a7bf1/v0/medium/1_bhk_apartment-for-rent-sector_76-Noida-bedroom.jpg",
      title: "Orchid Esate",
      description: "Fully Furnished",
      company: "By ELite Group",
      size: "3,4 BHK Apatment",
      location: "Noida Extension, Grater Noida",
      price: "1.92 Cr - 3.07 Cr",
    },
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e266a84192b405017eed4d26c83a7bf1/v0/medium/1_bhk_apartment-for-rent-sector_76-Noida-bedroom.jpg",
      title: "1 BHK Apartment",
      description: "Fully Furnished",
      company: "By ELite Group",
      size: "3,4 BHK Apatment",
      location: "Noida Extension, Grater Noida",
      price: "1.92 Cr - 3.07 Cr",
    },
  ];

  const RentData1 = [
    {
      image:
        "https://housing-images.n7net.in/01c16c28/e266a84192b405017eed4d26c83a7bf1/v0/medium/1_bhk_apartment-for-rent-sector_76-Noida-bedroom.jpg",
      title: "1 BHK Apartment",
      description: "Fully Furnished",
      location: "Amarpali Silicon City, Sector 76, Noida",
      size: "750 sq.ft",
      price: "₹8,000",
      company: "by ESCON INFRA REALTORS",
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
      company: "by ESCON INFRA REALTORS",

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
      company: "by ESCON INFRA REALTORS",

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
      company: "by ESCON INFRA REALTORS",

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
      company: "by ESCON INFRA REALTORS",

      name: "Pandey",
      address: ["sector-62", "sector-34", "noida", "delhi"],
      experience: "5 Years",
      properties: "89",
      pro: "PRO",
    },
  ];
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
      <section>
        <Spotlight />
      </section>

      <section className="featuredCollections container mt-5">
        <div className="row">
          <div className="col">
            <h2>
              <span className="opacity-75 fs-3">Projects in </span> Focus
            </h2>
            <p className="m-0">Noteworthy projects in Noida</p>
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
              {ProjectsInFocus.map((rentData, index) => (
                <div key={index} className="">
                  <NavLink to={"/featuredCollection"}>
                    <IntermedidateCard
                      title={rentData.title}
                      image={rentData.image}
                      company={rentData.company}
                      size={rentData.size}
                      location={rentData.location}
                      price={rentData.price}
                      description={rentData.description}
                    />
                  </NavLink>
                </div>
              ))}
            </PopularLocalitiesSlider>
          </div>
        </div>
      </section>

      {/* featured Developers */}
      <section className="py-5">
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
                      <DevelopersCard
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
              {RentData1.map((rentData, index) => (
                <div
                  key={index}
                  className="" // Added padding for spacing
                >
                  <BasicCard
                    title={rentData.title}
                    company={rentData.company}
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
      </section>

      <section className="recentlyAdded container">
        <div className="row pb-4">
          <div className="col">
            <h2>
              <span className="opacity-75 fs-3">Recently </span> Added
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
              {RentData.map((rentData, index) => (
                <div
                  key={index}
                  className="" // Added padding for spacing
                >
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
      </section>

      <section className="featuredCollections container mt-5">
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
          </div>
        </div>
      </section>

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
                <PopularLocalitiesSlider settings={settings2}>
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
