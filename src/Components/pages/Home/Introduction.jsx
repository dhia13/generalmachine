import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
export default function Events() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className="bg-white dark:bg-black mx-auto">
      <Content>
        <main className=" flex flex-col justify-center px-4 items-start pt-16 mb-10 mx-auto max-w-[1400px] ">
          <h1 className="text-4xl font-semibold my-2">
            {t(`About-Us.About-Us`)}
          </h1>
          <h2 className="text-xl font-normal ">
            {t("About-Us.About-Us-intro")}
          </h2>
          {/* Expertise */}
          <div className="my-4">
            <h2 className="text-2xl my-2 font-medium">
              {t("About-Us.Expertise.Expertise")}
            </h2>
            <ul className="list-disc space-y-3 list-inside mb-1">
              <li className="font-normal">
                <strong>{t("About-Us.Expertise.Expertise-1h")}</strong>
                {t("About-Us.Expertise.Expertise-1p")}
              </li>
              <li className="font-normal">
                <strong>{t("About-Us.Expertise.Expertise-2h")}</strong>
                {t("About-Us.Expertise.Expertise-2p")}
              </li>
              <li className="font-normal">
                <strong>{t("About-Us.Expertise.Expertise-3h")}</strong>
                {t("About-Us.Expertise.Expertise-3p")}
              </li>
              <li className="font-normal">
                <strong>{t("About-Us.Expertise.Expertise-4h")}</strong>
                {t("About-Us.Expertise.Expertise-4p")}
              </li>
            </ul>
          </div>
          {/* Commitment */}
          <div className="my-4">
            <h2 className="text-2xl my-2 font-medium">
              {t("About-Us.Commitment.Commitment")}
            </h2>
            <ul className="list-disc space-y-3 list-inside mb-1">
              <li className="font-normal">
                <strong>{t("About-Us.Commitment.Commitment-1h")}</strong>
                {t("About-Us.Commitment.Commitment-1p")}
              </li>
              <li className="font-normal">
                <strong>{t("About-Us.Commitment.Commitment-2h")}</strong>
                {t("About-Us.Commitment.Commitment-2p")}
              </li>
              <li className="font-normal">
                <strong>{t("About-Us.Commitment.Commitment-3h")}</strong>
                {t("About-Us.Commitment.Commitment-3p")}
              </li>
            </ul>
          </div>
          {/* contact */}
          <div className="my-4">
            <h2
              className="text-2xl mb-2 font-medium cursor-pointer text-blue-400"
              onClick={() => router.push("/Contact")}
            >
              {t(`About-Us.Contact-Us.Contact-Us`)}
            </h2>
            <h2>{t(`About-Us.Contact-Us.Contact-P`)}</h2>
          </div>
        </main>
      </Content>
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
