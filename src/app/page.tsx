import Image from "next/image";
import Logo from "../../public/Logo.png";
import Common from "./components/Common";
import work_img from "../../public/Work Together Image.jpg";
import apple from "../../public/Apple.jpg";
import microsoft from "../../public/microsoft 1.jpg";
import slack from "../../public/Group.jpg";
import google from "../../public/Google.jpg";

export default function Home() {
  return (
    <>
      <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between font-Inter">
        <div className="w-[191px] h-[34px]">
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="w-[737.5px] h-[60] flex justify-between items-center">
          <div className="w-[549px] h-[23px]">
            <ul className="flex flex-row text-[#ffffff] justify-between">
              <li>Products</li>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="w-[126px] h-[60px]">
            <button className="py-4 px-10 bg-[#FFE492] text-[#043873] rounded-lg">
              Login
            </button>
          </div>
        </div>
      </div>
      <Common
        firstDiv="px-[220px] py-[140px] top-[92px] bg-[#043873] text-[#ffffff] flex items-center font-Inter"
        secondDiv="w-[656px] h-[361px]"
        thirdDiv="w-[656px] h-[238px]"
        classNameh2="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6"
        headingTitle="Get More Done with whitepace"
        classNamepara="font-[400] text-lg leading-[30px] tracking-[-0.02em] mb-10"
        paraTitle="Project management software that enables your teams to
    collaborate, plan, analyze and manage everyday tasks"
        classNamebutton="bg-[#4F9CF9] p-5 font-medium text-lg tracking-[-0.02em] rounded-lg"
        buttonTitle="Try Whitepace free"
        classNamebox="w-[824px] h-[549px] bg-[#C4DEFD]"
      />

      <Common
        firstDiv="top-[92px] px-[220px] py-[140px] font-Inter flex items-center font-Inter"
        secondDiv="w-[656px] h-[361px]"
        thirdDiv="w-[656px] h-[238px]"
        forthDiv="w-[672px] h-[288px]"
        classNameh2="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529] mb-6"
        headingTitle="Project Management"
        classNamepara="w-[650px] font-[400] text-lg leading-[30px] tracking-[-0.02em] text-[#212529] mb-10"
        paraTitle="Images, videos, PDFs and audio files are supported. Create math
    expressions and diagrams directly from the app. Take photos with
    the mobile app and save them to a note."
        classNamebutton="bg-[#4F9CF9] px-10 py-5 font-medium text-lg tracking-[-0.02em] rounded-md"
        buttonTitle=" Get Started"
        classNamebox="w-[824px] h-[549px] bg-[#C4DEFD]"
      />

      <div className=" top-[92px] px-[220px] py-[140px] font-Inter flex flex-col">
        <div className="flex items-center justify-between mt-[10px]">
          <div className="w-[710px] h-[661px]">
            <Image src={work_img} alt="work-img" />
          </div>
          <div className="w-[670px] h-[294px]">
            <div className="w-[670px] h-[171px]">
              <h2 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#212529]">
                Work together
              </h2>
              <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#212529]">
                With whitepace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
              <br />
              <button className="bg-[#4F9CF9] py-5 px-10 font-medium text-lg leading-[23px] tracking-[-0.02em] rounded-md  text-[#ffffff]">
                Try it now{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-8 text-[#ffffff] inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Common
        firstDiv="px-[220px] py-[140px] w-[1921px] h-[759px] top-[92px] bg-[#043873] text-[#ffffff] flex items-center justify-between font-Inter"
        secondDiv="w-[697px] h-[264px]"
        thirdDiv="w-[697px] h-[171px]"
        classNameh2="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6"
        headingTitle="Use as Extension"
        classNamepara="font-[400] text-lg leading-[30px] tracking-[-0.02em] mb-10"
        paraTitle="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
        classNamebutton="bg-[#4F9CF9] py-5 px-10 font-medium text-lg tracking-[-0.02em] rounded-md"
        buttonTitle="Let's Go"
        classNamebox="w-[686px] h-[479px] bg-[#C4DEFD]"
      />

      <Common
        firstDiv="px-[220px] py-[140px] w-[1921px] h-[px] top-[3268px] bg-[#ffffff] flex items-center justify-between font-Inter"
        classNamebox="w-[686px] h-[479px] bg-[#C4DEFD]"
        secondDiv="w-[699px] h-[411px]"
        thirdDiv="w-[669px] h-[288px]"
        classNameh2="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6 text-[#212529]"
        headingTitle="Customise it
        to your needs"
        classNamepara="font-[400] text-lg leading-[30px] tracking-[-0.02em] text-[#212529] mb-6"
        paraTitle=" Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
        classNamebutton="bg-[#4F9CF9] py-5 px-10 font-medium text-lg tracking-[-0.02em] rounded-md text-[#ffffff]"
        buttonTitle="Let's Go"
      />

      <div className="w-[1921px] h-[574px] py-[140px] px-[220px] top-[4080px] bg-[#043873] flex flex-col justify-between items-center font-Inter">
        <div className="w-[1481px] h-[294px] flex justify-center">
          <div className="w-[1064px] h-[171px]">
            <h1 className="font-Inter font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#ffffff] mb-6 text-center">
              Your work, everywhere you are
            </h1>
            <p className="font-Inter font-normal text-lg leading-[30px] tracking-[-0.02em] text-center text-[#ffffff]">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
            <br />
          </div>
        </div>
        <button className="bg-[#4F9CF9] py-5 px-10 font-medium text-lg tracking-[-0.02em] rounded-lg font-Inter text-[#ffffff] text-center">
          Try Taskey{" "}
          <span>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-8 text-[#ffffff] inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>

      <div className="w-[1922px] h-[538px] top-[4654px] py-[140px] px-[220px] flex flex-col justify-between items-center">
        <div className="w-[1482px] h-[87px]">
          <h1 className="font-Inter font-bold text-7xl leading-[87.14px] text-center tracking-[-0.02em] text-[#212529]">
            Our sponsors
          </h1>
        </div>
        <div className="w-[1482px] h-[71px] flex justify-between">
          <div className="w-[55.47px] h-[68px]">
            <Image src={apple} alt="apple" />
          </div>
          <div className="w-[287px] h-[62px]">
            <Image src={microsoft} alt="microsoft" />
          </div>
          <div className="w-[280px] h-[71px]">
            <Image src={slack} alt="slack" />
          </div>
          <div className="w-[211px] h-[69.81px]">
            <Image src={google} alt="google" />
          </div>
        </div>
      </div>

      <div className="w-[1920px] h-[461px] top-[5195px] py-[140px] px-[220px] bg-[#043873]">
        <div className="w-[1480px] h-[289px] flex flex-col">
          <div className="w-[1480px] h-[169px] flex justify-between items-center">
            <div className="w-[295px] h-[169px] flex flex-col justify-between">
              <div className="w-[191px] h-[34px]">
                <Image src={Logo} alt="Logo" />
              </div>
              <div className="w-[240px] h-[120px]">
                <p className="font-Inter font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#F7F7EE]">
                  whitepace was created for the new ways we live and work. We
                  make a better workspace around the world
                </p>
              </div>
            </div>
            <div className="w-[295px] h-[127px] flex flex-col justify-between">
              <div className="w-[68px] h-[22px]">
                <p className="font-Inter font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-[#ffffff]">
                  Product
                </p>
              </div>
              <div className="w-[70px] h-5">
                <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#FFE492]">
                  Overview
                </p>
              </div>
              <div className="w-[50px] h-5">
                <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                  Pricing
                </p>
              </div>
              <div className="w-[177px] h-5">
                <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                  Customer stories
                </p>
              </div>
            </div>
            <div className="w-[295px] h-[130px] flex flex-col justify-between">
              <div className="w-[91px] h-[22px]">
                <p className="font-Inter font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-[#ffffff]">
                  Resources
                </p>
              </div>
              <div className="w-[33px] h-5">
                <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                  Blog
                </p>
              </div>
              <div className="w-[128px] h-5">
                <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                  Guides & tutorials
                </p>
              </div>
              <div className="w-[130pxpx] h-5">
                <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                  Help center
                </p>
              </div>
            </div>
            <div className="w-[295px] h-[130px] flex flex-col justify-between">
              <div className="w-[83px] h-[22px]">
                <p className="font-Inter font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-[#ffffff]">
                  Company
                </p>
              </div>
              <div className="w-[66px] h-5">
                <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                  About us
                </p>
              </div>
              <div className="w-[62px] h-5">
                <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                  Careers
                </p>
              </div>
              <div className="w-[99px] h-5">
                <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                  Media kit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1480px] h-5 text-center flex items-center justify-center">
          <div className="w-[169px] h-5">
            <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
              ©2021 Whitepace LLC.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
