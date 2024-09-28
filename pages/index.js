import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import Navbar from "./helperpages/navbar.js";
import Footer from "./helperpages/footer.js";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import i18nextConfig from "~/next-i18next.config";

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(
        locale,
        ["common", "dict2"],
        i18nextConfig
      )),
    },
  };
}

export const Section = ({
  id,
  imageSrc,
  altText,
  subheading,
  content,
  link,
  btnText,
}) => {
  return (
    <div
      id={id}
      className="flex flex-col items-center mx-auto w-full max-w-sm"
    >
      <div className="bg-gray-200 w-full h-44 flex rounded items-center justify-center mb-1 relative">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          style={{ objectFit: "contain" }}
          className="mx-auto"
        />
      </div>
      <div className="yqa-subheading text-center w-full">{subheading}</div>
      <div className="copywrite-content mx-2 my-4 text-justify w-full mb-6">
        {content.split("|||").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== content.split("|||").length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
      <div className="text-center">
        <Link href={link}>
          <button className="call-action-button">{btnText}</button>
        </Link>
      </div>
    </div>
  );
};

export const ResourceSection = ({
  id,
  imageSrc,
  buttonText,
  altText,
  link,
}) => {
  return (
    <div
      id={id}
      className="flex flex-col justify-between w-full max-w-sm h-80 border border-NavTextGray rounded-lg shadow-sm mx-auto p-4 pt-12"
    >
      <div className="flex-1 flex justify-center items-start relative">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          style={{ objectFit: "contain" }}
          className="mx-auto"
        />
      </div>
      <div className="mt-auto flex items-center justify-center pb-4">
        <Link href={link}>
          <button className="call-action-button text-NavTextGray font-bold bg-ResourceButtonYellow rounded-full w-40">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("dict2:index_tab_title")}</title>
        <meta name="description" content="Welcome to MyRentalCompass." />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="font-istok flex flex-col min-h-screen text-black bg-white">
        <Navbar activePage="Home" className="z-10" />

        <div className="relative h-96 w-full">
          <Image
            src="/banner-homepage.jpg"
            alt="Description of the image"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              filter: "brightness(60%)",
            }}
            className="absolute inset-0 z-0 shadow-md"
            priority
          />
          <div className="relative z-10 flex flex-col justify-center h-full text-BackgroundWhite space-y-6">
            <div className="flex flex-col items-center space-y-6 flex-grow mb-8">
              <div className="flex flex-col justify-center">
                <div className="text-center">
                  <div className="h1-container">
                    <h1 className="font-bold text-4xl md:text-6xl mt-16 relative z-10 text-center max-w-full">
                      {t("dict2:index_banner_title")}
                    </h1>
                    <div className="highlighter-line"></div>
                  </div>
                </div>
                <h2 className="text-xl md:text-3xl text-center mt-14 mb-6">
                  {t("dict2:index_banner_title_byline_1")}
                  <br />
                  {t("dict2:index_banner_title_byline_2")}
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/map">
                  <button className="call-action-button w-auto p-4 md:p-6 mt-6 text-lg md:text-2xl font-bold rounded-3xl">
                    {t("dict2:index_banner_map_button")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 mb-20 flex flex-col items-center space-y-4">
          <h1 className="index-page-section-heading">
            {t("dict2:index_yqa_section_heading")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Section
              id="yqa-section-1"
              imageSrc="/looking-to-rent-icon.jpeg"
              altText="looking-to-rent-icon"
              subheading={t("dict2:index_yqa_section_subheading_1")}
              content={t("dict2:index_yqa_section_description_1")}
              link="/resources"
              btnText={t("dict2:index_yqa_section_button_1")}
            />
            <Section
              id="yqa-section-2"
              imageSrc="/curious-icon.jpeg"
              altText="curious-icon"
              subheading={t("dict2:index_yqa_section_subheading_2")}
              content={t("dict2:index_yqa_section_description_2")}
              link="/rights"
              btnText={t("dict2:index_yqa_section_button_2")}
            />
            <Section
              id="yqa-section-3"
              imageSrc="/liveability-icon.jpeg"
              altText="liveability-icon"
              subheading={t("dict2:index_yqa_section_subheading_3")}
              content={t("dict2:index_yqa_section_description_3")}
              link="/liveability"
              btnText={t("dict2:index_yqa_section_button_3")}
            />
          </div>
          <h1 className="index-page-section-heading pt-12 pb-6">
            {t("dict2:index_or_section_heading")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceSection
              id="or-section-1"
              imageSrc="/or-plan-melb-picture.jpeg"
              buttonText={t("dict2:index_or_section_buttons_text")}
              altText="or-plan-melb-picture"
              link="https://www.planning.vic.gov.au/guides-and-resources/strategies-and-initiatives/plan-melbourne"
            />
            <ResourceSection
              id="or-section-2"
              imageSrc="/or-unsdg-picture.jpeg"
              buttonText={t("dict2:index_or_section_buttons_text")}
              altText="or-unsdg-picture"
              link="https://sdgs.un.org/goals/goal11"
            />
            <ResourceSection
              id="or-section-3"
              imageSrc="/or-crt-logo.jpeg"
              buttonText={t("dict2:index_or_section_buttons_text")}
              altText="or-crt-picture"
              link="https://www.rentingcommissioner.vic.gov.au/"
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
