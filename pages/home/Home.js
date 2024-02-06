import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import SecondaryBtn from "../../components/SecondaryBtn";
import ProductComponent from "../../components/ProductComponent";
import VideoComponent from "../../components/VideoComponent";
import ExploreComponent from "../../components/ExploreComponent";
import PrimaryBtn from "../../components/PrimaryBtn";
import AwardFeature from "../../components/AwardFeature";
import TabBar from "../../components/TabBar";
import Carousel from "../../components/Carousel";
import style from "../../styles/Brand.module.css";
import Center from "../../components/Center";
import Services from "../../components/Services";
import worklogo from "../../styles/images/etcworkmanagement.png";
import crmlogo from "../../styles/images/crm_sale.png";
import devlogo from "../../styles/images/etechdev.png";
import piechart from "../../styles/images/PIE CHART.png";
import MOBILE from "../../styles/images/MOBILE.jpg";
import Client_dsg from "../../styles/images/Client dashboard.png";
import BOARD from "../../styles/images/BOARD.png";
import view_logo from "../../styles/images/view.png";
import dashboard from "../../styles/images/dashboard.png";
import INTEGRATION from "../../styles/images/INTEGRATION.png";
import AUTOMATION from "../../styles/images/AUTOMATION.png";
import DOCTS from "../../styles/images/DOCTS FORAMTE.png";
import Mobile_dev from "../../styles/images/Mobile_dev.jpg";
import Web_development from "../../styles/images/Web_development.jpg";
import IOT_development from "../../styles/images/IOT_development.jpg";
import digital_marketing from "../../styles/images/digital_marketing.jpg";
import Head from "next/head";
import { Header } from "@/components/Header";
import Cart from "@/components/Cart";
import NewProduct from "@/components/NewProduct";
import { Middle } from "@/components/Middle";
import { PhotoMiddle } from "@/components/PhotoMiddle";
import Footer from "@/components/Footer";

const Brands = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: auto;
  margin-top: 20px;
    //   border:2px solid blue;
  box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.07);
`;

const GridDiv = styled.div`
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  padding: 10px;
`;
 
const GridCart = styled.div`
  text-align: center;
`;

const MainDiv = styled.div``;

const VideoLogo = styled.div``;
const LogoLeft = styled.div``;
const LogoRight = styled.div``;

const StyledVideo = styled.video`
  width: 100%;
  border-radius: 20px;
`;

const NewVideo = styled.video`
  height: 100%;
  border-radius: 10px;
  width: 100%;
`;

const Animation = styled.div``;
const Integration = styled.div``;
const VideoContainer = styled.div``;
const StyledDiv = styled.div``;
const Customers = styled.div``;
const SliderMain = styled.div``;
const Supporting = styled.div``;
const Award = styled.div``;
const Deliver = styled.div``;

// ---------------------Styled part end  ----------------------
const Home = () => {
  const [tab, settab] = useState(0);
  const [names, setnames] = useState([
    "Boards",
    "Views",
    "Dashboards",
    "Integrations",
    "Automation",
    "Apps",
    "Docs",
  ]);
  const [images, setimages] = useState([
    "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/board_icon.svg",
    "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/views_icon.svg",
    "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/dashboard_icon.svg",
    "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/integrations_icon.svg",
    "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/automations_icon.svg",
    "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/apps_icon.svg",
    "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/docs_icon.svg",
  ]);

  const handleTabClick = (index) => {
    settab(index);
  };

  // -----------------image for crousal----
  const content = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      alt: "Image 1",
      title: "Lamborghini Huracan Performante",
      description:
        "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before. ",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      alt: "Image 2 ",
      title: "Porsche 911 Turbo S Porsche 911 ",
      description:
        "This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm @ 2500 rpm of max power and max torque respectively.",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      alt: "Image 3",
      title: "Ford Mustang",
      description: "For offroad lovers. Super fast, Super Comfortable.",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80",
      alt: "Image 4",
      title: "Lamborghini Aventador SV",
      description:
        "Aventador SV provide thrills unlike anything that has ever been experienced before.",
    },
  ];

  return (
    <>
      <Head>
        <title>Product Page</title>
        <meta
          name="description"
          content="This is the description of your page"
        />
        <meta name="keywords" content="next.js, metadata, example" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      <Cart />
      <NewProduct />
      <Middle />
      <PhotoMiddle />

      {/* Trusted by 180,000+ customers worldwide */}
      <Brands>
        <div>SOME BRANDS WE HAVE WORKED WITH</div>
        <GridDiv className={style.grid}>
          <GridCart>
            <img
              src="https://www.etechcube.com/wp-content/uploads/2021/07/logo-1-300x179.png"
              alt="not found"
              width="100%"
              height="60"
            />
          </GridCart>
          <GridCart>
            <img
              src="https://www.etechcube.com/wp-content/uploads/2021/07/logo_main.png"
              alt="not found"
              width="100%"
              height="60"
            />
          </GridCart>
          <GridCart>
            <img
              src="https://www.etechcube.com/wp-content/uploads/2021/07/logo.png"
              alt="not found"
              width="100%"
              height="60"
            />
          </GridCart>
          <GridCart>
            <img
              src="https://www.etechcube.com/wp-content/uploads/2021/06/eKitchen__2_-removebg-preview-1.png"
              alt="not found"
              width="100%"
              height="60"
            />
          </GridCart>
          <GridCart>
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/lionsgate.png"
              alt="not found"
              width="100%"
              height="60"
            />
          </GridCart>
          <GridCart>
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/carrefour.png"
              alt="not found"
              width="100%"
              height="60"
            />
          </GridCart>
          <GridCart>
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png"
              alt="not found"
              width="100%"
              height="60"
            />
          </GridCart>
          <GridCart>
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/glossier.png"
              alt="not found"
              width="100%"
              height="60"
            />
          </GridCart>
          <GridCart>
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png"
              alt="not found"
              width="100%"
              height="60"
            />
          </GridCart>
        </GridDiv>
      </Brands>

      {/* The Work */}
      <MainDiv className={style.maindiv}>
            
        <div className={style.mainfirst}>
          <span style={{ display: "block" }}>The Work OS that lets you</span>
          <span>shape workflows, your way</span>
        </div>

        <div className={style.mainsecond}>
          <span style={{ display: "block" }}>
            Boost your team’s alignment, efficiency, and productivity by
          </span>
          <span style={{ display: "block" }}>
            customizing any workflow to fit your needs.
          </span>
          <SecondaryBtn to="/AllProducts">Get Started</SecondaryBtn>
        </div>
      </MainDiv>

      {/* mobile logo */}

      <VideoLogo className={style.videoLogo}>
        {/* main div*/}
        <LogoLeft className={style.logoLeft}>
          {/* left div */}
          <div
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                height: "25%",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "60%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    height: "45%",
                    borderRadius: "10px",
                    display: "flex",
                  }}
                >
                  <NewVideo
                    autoPlay
                    loop
                    muted
                    src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/Masonry/final/Timeline_column.mp4"
                  ></NewVideo>
                </div>
                <div
                  style={{
                    height: "45%",
                    borderRadius: "10px",
                    boxShadow: "#A0E9FF 0px 22px 70px 4px",
                  }}
                >
                  <NewVideo
                    autoPlay
                    loop
                    muted
                    src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/Masonry/final/Status_column.mp4"
                  ></NewVideo>
                </div>
              </div>
              <div
                style={{
                  height: "100%",
                  width: "40%",
                  display: "flex",
                  borderRadius: "10px",
                }}
              >
                <NewVideo
                  autoPlay
                  loop
                  muted
                  src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/Masonry/final/Battery.mp4"
                ></NewVideo>
              </div>
            </div>
            <div
              style={{
                height: "15%",
                borderRadius: "10px",
                boxShadow: "#A0E9FF 0px 22px 70px 4px",
              }}
            >
              <NewVideo
                autoPlay
                loop
                muted
                src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/Masonry/final/Integration.mp4"
              ></NewVideo>
            </div>
            <div
              style={{
                height: "20%",
                display: "flex",
                gap: "20px",
              }}
            >
              <div style={{ width: "60%" }}></div>
              <div
                style={{
                  width: "40%",
                  borderRadius: "10px",
                  boxShadow: "#A0E9FF 0px 22px 70px 4px",
                }}
              >
                {/* <NewVideo
                  autoPlay
                  loop
                  muted
                  src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/Masonry/final/Pie.mp4"
                ></NewVideo> */}
                <Image
                  src={piechart}
                  alt="alt"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              width: "40%",
              // height: "auto",
              // borderRadius: "20px",
              // boxShadow: "#A0E9FF 0px 22px 70px 4px",
              // boxShadow: "#A0E9FF 0px 100px 300px 30px",
            }}
          >
            {/* <StyledVideo
              autoPlay
              loop
              muted
              src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/Masonry/final/MobileApp.mp4"
            ></StyledVideo> */}
            <Image
              src={MOBILE}
              alt="alt"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </LogoLeft>

        <LogoRight className={style.logoRight}>
          {" "}
          {/* right div */}
          <div
            style={{
              width: "100%",
              height: "20%",
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "30%",
                borderRadius: "10px",
                boxShadow: "#A0E9FF 0px 7px 29px 0px",
              }}
            >
              <NewVideo
                autoPlay
                loop
                muted
                src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/Masonry/final/Automation.mp4"
              ></NewVideo>
            </div>
            <div
              style={{
                width: "25%",
                height: "90%",
                borderRadius: "10px",
                boxShadow: "#A0E9FF 0px 7px 29px 0px",
              }}
            >
              <NewVideo
                autoPlay
                loop
                muted
                src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/Masonry/final/Talk.mp4"
              ></NewVideo>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "70%",
              marginTop: "20px",
              backgroundColor: "#fff",
              display: "flex",
              borderRadius: "10px",
              boxShadow: "#A0E9FF 0px 7px 29px 0px",
            }}
          >
            {/* <NewVideo
              autoPlay
              loop
              muted
              src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/Masonry/final/Dash.mp4"
            ></NewVideo> */}

            <Image
              src={Client_dsg}
              alt="alt"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </LogoRight>
      </VideoLogo>

      {/* animation */}
      <Animation className={style.animation}>
        <div
          style={{
            fontFamily: "cursive",
            fontSize: "38px",
            textDecoration: "underline",
          }}
        >
          Our Expertise
        </div>
        <div className={style.animationdirection}>
          <Services
            title={"WEB APP DEVELOPMENT"}
            src={Web_development}
            alt="not found"
          />
          <Services
            src={Mobile_dev}
            title={"MOBILE APP DEVELOPMENT"}
            alt="not found"
          />
          <Services
            src={IOT_development}
            title={"IOT DEVELOPMENT"}
            alt="not found"
          />
          <Services
            src={digital_marketing}
            title={"DIGITAL MARKETING"}
            alt="not found"
          />
        </div>
      </Animation>

      {/* integration */}
      <Integration className={style.integration}>
        {/* -----integration--- */}
        <div className={style.integrationTop}>
          {/* tab bar -- */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <div className={style.integrationfirst}>
              <span style={{ display: "block" }}>
                Everything you need for any workflow
              </span>
              <span className={style.secondspan} style={{ display: "block" }}>
                Easily build your ideal workflow with etechcube.com building
                blocks.
              </span>
            </div>
            <div
              style={{
                marginTop: "20px",
                // height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <TabBar
                names={names}
                images={images}
                onTabClick={handleTabClick}
              />
            </div>
          </div>
          {/* tab bar content */}

          <div className={style.tabbarcontent}>
            <div className={style.contentfirst}>
              <div
                style={{
                  width: "auto",
                  height: "100%",
                  boxShadow: "0px -12px 47px -3px rgba(160,233,255,1)",
                }}
              >
                {tab === 0 ? (
                  // <NewVideo
                  //   autoPlay
                  //   loop
                  //   muted
                  //   src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/7_status.mp4"
                  // ></NewVideo>

                  <Image
                    src={BOARD}
                    alt="alt"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : tab === 1 ? (
                  // <NewVideo
                  //   autoPlay
                  //   loop
                  //   muted
                  //   src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/1_Views.mp4"
                  // ></NewVideo>

                  <Image
                    src={view_logo}
                    alt="alt"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : tab === 2 ? (
                  // <NewVideo
                  //   autoPlay
                  //   loop
                  //   muted
                  //   src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/2_Dashboards.mp4"
                  // ></NewVideo>
                  <Image
                    src={dashboard}
                    alt="alt"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : tab === 3 ? (
                  // <NewVideo
                  //   autoPlay
                  //   loop
                  //   muted
                  //   src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/4_Integrations.mp4"
                  // ></NewVideo>
                  <Image
                    src={INTEGRATION}
                    alt="alt"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : tab === 4 ? (
                  // <NewVideo
                  //   autoPlay
                  //   loop
                  //   muted
                  //   src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/3_Automations.mp4"
                  // ></NewVideo>

                  <Image
                    src={AUTOMATION}
                    alt="alt"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : tab === 5 ? (
                  <NewVideo
                    autoPlay
                    loop
                    muted
                    src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/5_Apps.mp4"
                  ></NewVideo>
                ) : tab === 6 ? (
                  // <NewVideo
                  //   autoPlay
                  //   loop
                  //   muted
                  //   src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/6_Docs.mp4"
                  // ></NewVideo>

                  <Image
                    src={DOCTS}
                    alt="alt"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : null}
              </div>
            </div>
            <div className={style.contentsecond}>
              <div className={style.contenttext}>
                <p style={{ color: "rgb(97, 97, 255)", fontSize: "28px" }}>
                  <span>
                    <img
                      src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:6161FF/Generator_featured images/Home Page - 2022 Rebrand/tabs/board_icon.svg"
                      alt="board image"
                      height={25}
                    />
                  </span>
                  <span style={{ marginLeft: "20px" }}>Boards</span>
                </p>
                <span style={{ display: "block", textAlign: "center" }}>
                  Everything starts with a visual board — the core
                </span>
                <span style={{ display: "block", textAlign: "center" }}>
                  of etechcube.com Work OS. Tailor it your way and
                </span>
                <span style={{ display: "block", textAlign: "center" }}>
                  manage anything from projects to departments
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* ---our product ---- down - */}
        <div className={style.product}>
          <div className={style.productcontent}>
            <span style={{ display: "block", color: "black" }}>
              <img
                src="https://www.etechcube.com/wp-content/uploads/2021/03/cropped-cropped-cropped-cropped-color_logo_transparent-1-1-1.png"
                width={100}
                height={35}
              />
              Our Products
            </span>
            <span
              style={{
                display: "block",
                color: "black",
                // fontSize: "44px",
                fontWeight: "bold",
              }}
            >
              End-to-end products to run
            </span>
            <span
              style={{
                display: "block",
                color: "black",
                // fontSize: "44px",
                fontWeight: "bold",
              }}
            >
              the core of your business
            </span>
            <span className={style.productspan}>
              Tailored products designed for every aspect of your teams' needs.
            </span>
          </div>

          <div className={style.ProductComponent}>
            {/* main component */}
            <ProductComponent
              src={worklogo}
              // src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/WM_new_logo/wm_main_logo_1.png"
              alt="not found"
              width={200}
              height={100}
              firstDiscription={
                "For professionals and teams managing tasks & workflows"
              }
              shortDiscription={
                "Manage tasks, projects, and processes to fuel collaboration and efficiency at scale"
              }
              firstUseCase={"Project management"}
              secondUseCase={"Portfolio pipeline"}
              thirdUseCase={"Resource management"}
              fourUseCase={"Goals & strategy"}
            />
            {/* end */}
            <ProductComponent
              src={crmlogo}
              // src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/crm_main_logo.png"
              alt="not found"
              width={200}
              height={100}
              firstDiscription={
                "For sales professionals and customer-facing teams"
              }
              shortDiscription={
                "Track and manage all aspects of your sales cycle, customer data, and more in one place."
              }
              firstUseCase={"Contact management"}
              secondUseCase={"Sales pipeline"}
              thirdUseCase={"Post-sales management"}
              fourUseCase={"Lead management "}
            />
            <ProductComponent
              src={devlogo}
              // src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/WM_new_logo/wm_main_logo_1.png"
              alt="not found"
              width={200}
              height={100}
              firstDiscription={
                "For professionals and teams managing tasks & workflows"
              }
              shortDiscription={
                "Manage tasks, projects, and processes to fuel collaboration and efficiency at scale"
              }
              firstUseCase={"Project management"}
              secondUseCase={"Portfolio pipeline"}
              thirdUseCase={"Resource management"}
              fourUseCase={"Goals & strategy"}
            />
          </div>
        </div>
        {/* end component */}
      </Integration>

      {/* video container */}

      <VideoContainer className={style.VideoContainer}>
        <StyledDiv className={style.StyledDiv}>
          <ExploreComponent
            src="https://www.etechcube.com/wp-content/uploads/2021/03/cropped-cropped-cropped-cropped-color_logo_transparent-1-1-1.png"
            alt="not found"
            width="50%"
            height="50%"
            contents={"Explore proven ways to work more efficiently"}
          />
          <VideoComponent
            url={
              "https://www.youtube.com/embed/4CXcK7f8FZE?si=e1jAqCbCPbWMFxAG"
            }
            first={"Simplify OKR tracking"}
            percentage={"80%"}
            second={"of goals achieved with"}
            third={"OKRs on etechcube.com"}
          />
          <VideoComponent
            url={
              "https://www.youtube.com/embed/DAl3dbTnAgw?si=xwGlSE1jYaQWSrTs"
            }
            first={"Onboard clients successfully"}
            percentage={"74%"}
            second={"improvement in customer"}
            third={"retention"}
          />
        </StyledDiv>
      </VideoContainer>

      {/* ------------SliderMain------- */}
      <Customers className={style.Customers}>

        <SliderMain className={style.SliderMain}>
          {/* first */}
          <div style={{ width: "auto" }}>
            <span className={style.slidecontent}>
              See how our customers drive impact
            </span>
            <PrimaryBtn
              to="/AllProduts"
              color={"blue"}
              textDecoration={"underline"}
              border={"2px solid black"}
            >
              Read more success stories
            </PrimaryBtn>
          </div>
          {/* second */}
          <div className={style.carouselDiv}>
            <Carousel content={content} />
          </div>
        </SliderMain>

        <Supporting className={style.Supporting}>
          <div className={style.Supportingcontent}>
            {/*first*/}
            <img
              src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured images/Home Page - 2022 Rebrand/customer-support/support_globe.png"
              alt="not found"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div className={style.Supportingsecond}>
            {/*second*/}
            <div className={style.sprtcontent}>
              <span
                style={{
                  display: "block",
                  fontWeight: "bold",
                  color: "black",
                  // margin: "0px 20px",
                  lineHeight: "40px",
                }}
              >
                Supporting your growth
              </span>
              <span
                style={{
                  display: "block",
                  fontWeight: "bold",
                  color: "black",
                  // margin: "0px 20px",
                  lineHeight: "40px",
                }}
              >
                every step of the way
              </span>
            </div>
            <div
              style={{
                height: "60%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className={style.Supportingfont}>
                <span style={{ display: "block" }}>
                  Our support superheroes are a click away to help you get the
                  most out of
                </span>
                <span style={{ display: "block" }}>
                  etechcube.com, so you can focus on working without limits.
                </span>
              </div>

              <div className={style.supportflex}>
                <div className={style.contentflex}>
                  <div className={style.supportimages}>
                    <span>
                      <img
                        src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/phone.png"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </span>
                  </div>

                  <div>
                    <span
                      style={{
                        display: "block",
                        color: "black",
                        fontSize: "24px",
                      }}
                    >
                      24/7
                    </span>
                    <span className={style.spanresize}>support</span>
                    <span className={style.spanresize}>anytime</span>
                    <span className={style.spanresize}>anywhere</span>
                  </div>
                </div>

                <div className={style.contentflex}>
                  <div className={style.supportimages}>
                    <span>
                      <img
                        src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/heart.png"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </span>
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <span
                      style={{
                        display: "block",
                        color: "black",
                        color: "black",
                        fontSize: "24px",
                      }}
                    >
                      Voted #1
                    </span>
                    <span className={style.spanresize}>Most Loved by</span>
                    <span className={style.spanresize}>customers on</span>
                    <span className={style.spanresize}>G2</span>
                  </div>
                </div>

                <div className={style.contentflex}>
                  <div className={style.supportimages}>
                    <span>
                      <img
                        src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/fast.png"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        display: "block",
                        color: "black",
                        fontSize: "24px",
                      }}
                    >
                      2 hour
                    </span>
                    <span className={style.spanresize}>average</span>
                    <span className={style.spanresize}>response time</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                height: "20%",
                display: "flex",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              <div>
                <span>
                  <PrimaryBtn backgroundColor={"#6161FF"} color={"white"}>
                    Get in touch
                  </PrimaryBtn>
                </span>
              </div>
              <div>
                <span>
                  <PrimaryBtn
                    to="/AllProduts"
                    color={"#6161FF"}
                    textDecoration={"underline"}
                    border={"0px"}
                  >
                    visit our customer center
                  </PrimaryBtn>
                </span>
              </div>
            </div>
          </div>
        </Supporting>

      </Customers>
      {/* -------------end---------- */}

      <Award className={style.Award}>
        {/* first---------- */}
        <div className={style.awardfirst}>
          <div className={style.awardcontent}>
            <span
              style={{
                display: "block",
                color: "black",
                fontWeight: "bold",
              }}
            >
              An award-winning platform. Loved by customers.
            </span>
            <span style={{ display: "block", fontSize: "18px" }}>
              Based on our customer reviews.
            </span>
          </div>
        </div>

        {/* second------------- */}
        <div className={style.AwardSecond}>
          <AwardFeature
            src="https://www.etechcube.com/wp-content/uploads/2021/07/logo-1-300x179.png"
            alt="not found"
            width="40%"
            height="100%"
            first={"Sensitive Logistics"}
            second={
              "“Exceptional logistics software—streamlined operations, increased efficiency. Grateful for the tailored solution. Highly recommend their expertise.”"
            }
          />
          <AwardFeature
            src="https://www.etechcube.com/wp-content/uploads/2021/07/logo_main.png"
            alt="not found"
            width="50%"
            height="100%"
            first={"Quick India Logistics"}
            second={
              "“Outstanding logistics software transformed our operations. Seamless, user-friendly, and responsive team. Truly exceeded our expectations !”"
            }
          />
          <AwardFeature
            src="https://www.etechcube.com/wp-content/uploads/2021/07/logo.png"
            alt="not found"
            width="40%"
            height="100%"
            first={"Fourier Campus"}
            second={
              "“Your software revolutionized our school processes, user-friendly, secure, and efficient. Outstanding support, highly recommended!”"
            }
          />
        </div>
      </Award>

      <Deliver className={style.Deliver}>
        <Center>
          <div>
            <span
              style={{ display: "block", fontSize: "28px", color: "white" }}
            >
              Deliver your best work with{" "}
              <span style={{ fontWeight: "bold" }}> etechcube.com</span>
            </span>
            <span
              style={{ fontSize: "18px", color: "white", display: "block" }}
            >
              No credit card needed ✦ <span>Unlimited time on Free plan</span>
            </span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <span style={{ color: "white", display: "block" }}>
              <PrimaryBtn>Get Started</PrimaryBtn>
            </span>
          </div>
        </Center>
      </Deliver>

      <Footer/>

    </>
  );
};  
export default Home;
