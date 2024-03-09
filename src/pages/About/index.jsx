import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "@/context/context";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
export default function Events() {
  const { page } = useContext(State);
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(true);
  const Transition = useTransition(animate, {
    from: { left: "-100%", opacity: 0 },
    enter: { left: "0", opacity: 1 },
    leave: { left: "-100%", opacity: 0 },
  });
  useEffect(() => {
    if (page === "about") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [page]);

  return (
    <div className="w-full h-full dark:bg-black mx-auto">
      {/* <PageIllustration /> */}
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              config={{ duration: 500 }}
              style={style}
              className="absolute w-full h-full
            inset-0 flex flex-col z-50 "
            >
              <Content>
                <main className="h-full flex flex-col justify-center px-4 items-start pt-16 mb-10 mx-auto max-w-[1400px] lg:w-full w-full ">
                  <h1 className="text-4xl font-bold">
                    {t(`About-Us.About-Us`)}
                  </h1>
                  <h2 className="text-xl font-medium mb-4">
                    {t("About-Us.About-Us-intro")}
                  </h2>
                  <h2 className="text-2xl">
                    {t("About-Us.Expertise.Expertise")}
                  </h2>
                  <ul className="list-disc space-y-4">
                    <li>
                      <h3 className="font-medium">
                        {t("About-Us.Expertise.Expertise-1h")}
                      </h3>
                      <p>{t("About-Us.Expertise.Expertise-1p")}</p>
                    </li>
                    <li>
                      <h3 className="font-medium">
                        {t("About-Us.Expertise.Expertise-2h")}
                      </h3>
                      <p>{t("About-Us.Expertise.Expertise-2p")}</p>
                    </li>
                    <li>
                      <h3 className="font-medium">
                        {t("About-Us.Expertise.Expertise-3h")}
                      </h3>
                      <p>{t("About-Us.Expertise.Expertise-3p")}</p>
                    </li>
                    <li>
                      <h3 className="font-medium">
                        {t("About-Us.Expertise.Expertise-4h")}
                      </h3>
                      <p>{t("About-Us.Expertise.Expertise-4p")}</p>
                    </li>
                  </ul>
                  <h2 className="text-2xl">
                    {t("About-Us.Commitment.Commitment")}
                  </h2>
                  <h3>{t("About-Us.Commitment.Commitment-h1")}</h3>
                  <ul className="list-disc space-y-4">
                    <li>
                      <h3 className="font-medium">
                        {t("About-Us.Commitment.Commitment-1h")}
                      </h3>
                      <p>{t("About-Us.Commitment.Commitment-1p")}</p>
                    </li>
                    <li>
                      <h3 className="font-medium">
                        {t("About-Us.Commitment.Commitment-2h")}
                      </h3>
                      <p>{t("About-Us.Commitment.Commitment-2p")}</p>
                    </li>
                    <li>
                      <h3 className="font-medium">
                        {t("About-Us.Commitment.Commitment-3h")}
                      </h3>
                      <p>{t("About-Us.Commitment.Commitment-3p")}</p>
                    </li>
                  </ul>
                  <h2>{t(`About-Us.Contact-Us.Contact-Us`)}</h2>
                  <h2>{t(`About-Us.Contact-Us.Contact-P`)}</h2>
                </main>
              </Content>
            </animated.div>
          )
      )}
    </div>
  );
}

const Content = styled.main`
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
