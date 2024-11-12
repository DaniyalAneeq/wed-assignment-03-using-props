import Image from "next/image";
import Logo from "../../public/Logo.png";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Button from "./components/Button";
import Box from "./components/Box";
import work_img from "./../../public/Work Together Image.jpg";
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

      <div className="px-[220px] py-[140px] top-[92px] bg-[#043873] text-[#ffffff] flex items-center font-Inter">
        <div className="w-[656px] h-[361px]">
          <div className="w-[656px] h-[238px]">
            <Heading
              className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6 space-x-5"
              title="Get More Done with whitepace"
            />
            <Paragraph
              className="font-[400] text-lg leading-[30px] tracking-[-0.02em] mb-10"
              para="Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks"
            />
            <br />
            <Button
              className="bg-[#4F9CF9] p-5 font-medium text-lg tracking-[-0.02em] rounded-lg"
              title="Try Whitepace free"
            />
          </div>
        </div>
        <Box className="w-[824px] h-[549px]" />
      </div>

      <div className="w-[1920px] h-[1588px] top-[921px] px-[220px] py-[140px] font-Inter flex flex-col">
        <div className="flex justify-between w-[1480px] h-[547px]">
          <div className="w-[672px] h-[411px] flex flex-row items-center">
            <div className="w-[672px] h-[288px]">
              <h2 className="font-bold text-[72px]         leading- [87.14px] tracking-[-0.02em] text-[#212529] mb-6">
                Project <br /> Management
              </h2>
              <p className="font-[400] text-lg leading-[30px] tracking-[-0.02em] text-[#212529] mb-10">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them <br /> to a note.
              </p>
              <br />
              <Button
                className="bg-[#4F9CF9] p-5 font-medium text-lg tracking-[-0.02em] rounded-lg"
                title="Get Started"
              />
            </div>
          </div>
          <Box className="w-[784px] h-[547px]" />
        </div>

        <div className="w-[1480px] h-[661px] flex items-center justify-between mt-[140px]">
          <div className="w-[710px] h-[661px]">
            <Image src={work_img} alt="work-img" />
          </div>
          <div className="w-[670px] h-[294px]">
            <div className="w-[670px] h-[171px]">
              <Heading
                className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#212529]"
                title="Work together"
              />
              <Paragraph
                className="font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#212529]"
                para="With whitepace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others."
              />
              <br />
              <Button
                className="bg-[#4F9CF9] py-5 px-10 font-medium text-lg leading-[23px] tracking-[-0.02em] rounded-md  text-[#ffffff]"
                title="Try it now"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[220px] py-[140px] w-[1921px] h-[759px] top-[92px] bg-[#043873] text-[#ffffff] flex items-center justify-between font-Inter">
        <div className="w-[697px] h-[264px]">
          <div className="w-[697px] h-[171px]">
            <Heading
              className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6"
              title="Use as Extension"
            />
            <Paragraph
              className="font-[400] text-lg leading-[30px] tracking-[-0.02em] mb-10"
              para="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
            />
            <br />
            <Button
              className="bg-[#4F9CF9] py-5 px-10 font-medium text-lg tracking-[-0.02em] rounded-md"
              title="Let's Go"
            />
          </div>
        </div>
        <Box className="w-[686px] h-[479px] bg-[#C4DEFD]" />
      </div>

      <div className="px-[220px] py-[140px] w-[1921px] h-[px] top-[3268px] bg-[#ffffff] flex items-center justify-between font-Inter">
        <Box className="w-[714px] h-[532.09px] bg-[#C4DEFD]" />
        <div className="w-[699px] h-[411px]">
          <div className="w-[669px] h-[288px]">
            <Heading
              className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6 text-[#212529]"
              title="Customise it
              to your needs"
            />
            <Paragraph
              className="font-[400] text-lg leading-[30px] tracking-[-0.02em] text-[#212529] mb-6"
              para="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
            />
            <br />
            <Button
              className="bg-[#4F9CF9] py-5 px-10 font-medium text-lg tracking-[-0.02em] rounded-md text-[#ffffff]"
              title="Let's Go"
            />
          </div>
        </div>
      </div>

      <div className="w-[1921px] h-[574px] py-[140px] px-[220px] top-[4080px] bg-[#043873] flex flex-col justify-between items-center font-Inter">
        <div className="w-[1481px] h-[294px] flex justify-center">
          <div className="w-[1064px] h-[171px]">
            <Heading
              className="font-Inter font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#ffffff] mb-6 text-center"
              title="Your work, everywhere you are"
            />
            <Paragraph
              className="font-Inter font-normal text-lg leading-[30px] tracking-[-0.02em] text-center text-[#ffffff]"
              para="Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!"
            />
            <br />
          </div>
        </div>
        <Button
          className="bg-[#4F9CF9] py-5 px-10 font-medium text-lg tracking-[-0.02em] rounded-lg font-Inter text-[#ffffff] text-center"
          title="Try Taskey"
        />
      </div>

      <div className="w-[1922px] h-[538px] top-[4654px] py-[140px] px-[220px] flex flex-col justify-between items-center">
        <div className="w-[1482px] h-[87px]">
          <Heading
            className="font-Inter font-bold text-7xl leading-[87.14px] text-center tracking-[-0.02em] text-[#212529]"
            title=" Our sponsors"
          />
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
