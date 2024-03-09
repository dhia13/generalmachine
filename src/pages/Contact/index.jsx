import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "@/context/context";
import CopyMail from "@/components/Ui/Buttons/CopyMail";
import FlipIcon from "@/components/Ui/Buttons/FlipIcon";
import ContactUsForm from "@/components/pages/contact/ContactForm";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export default function Events() {
  const { t } = useTranslation();
  const { page } = useContext(State);
  const [animate, setAnimate] = useState(true);
  const Transition = useTransition(animate, {
    from: { right: "-100%", opacity: 0 },
    enter: { right: "0", opacity: 1 },
    leave: { right: "-100%", opacity: 0 },
  });
  useEffect(() => {
    if (page === "contact") {
      console.log("triger animation");
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [page]);
  const [emails, setEmails] = useState([
    "Dhiachabane@yahoo.fr",
    "Dhiakizaro@gmail.com",
    "GeneralMachine@yahoo.fr",
  ]);
  return (
    <div className="w-[100%] h-[100%] relative dark:text-white  text-black bg-white dark:bg-black">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="absolute w-full h-full
              inset-0 flex flex-col z-50 "
            >
              <Content className="bg-white dark:bg-black">
                <ContactUsForm />
                <div className="flex justify-center items-center md:flex-row flex-col gap-2 md:gap-10 mb-4">
                  <h1 className="text-lg font-semibold">
                    {t("TakeInitiative")}:
                  </h1>
                </div>
                <div className="flex justify-center items-center md:flex-row flex-col gap-2 md:gap-10 mb-4">
                  {emails.map((e) => (
                    <CopyMail mail={e} />
                  ))}
                  {/* <CopyMail mail="GeneralMachine@yahoo.fr" />
                  <CopyMail mail="GeneralMachine@yahoo.fr" /> */}
                </div>
                {/* media icons */}
                <div className="text-white flex justify-center items-center gap-4 mb-4">
                  <FlipIcon
                    icon="/images/icons/whatsapp.png"
                    link="https://wa.me/+213794064884"
                    color="0a66c2"
                  />
                  <FlipIcon
                    icon="/images/icons/telegram.png"
                    link="https://t.me/+213794064884"
                    color="#2481cc"
                  />
                  <FlipIcon
                    icon="/images/icons/messenger.png"
                    link="https://m.me/Sahhar13"
                    color="#2481cc"
                  />
                  <FlipIcon
                    icon="/images/icons/call.png"
                    link="tel:+213794064884"
                    color="#2481cc"
                  />
                </div>
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
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
