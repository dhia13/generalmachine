import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import submitContact from "../../../api.js/contactUs";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    town: "",
    subject: "",
    comment: "",
    newLetter: false,
  };
  let provinceData = [
    {
      Country: "algeria",
      provinces: [
        { name: "Adrar" },
        { name: "Chlef" },
        { name: "Laghouat" },
        { name: "Oum El Bouaghi" },
        { name: "Batna" },
        { name: "Béjaïa" },
        { name: "Biskra" },
        { name: "Béchar" },
        { name: "Blida" },
        { name: "Bouira" },
        { name: "Tamanrasset" },
        { name: "Tébessa" },
        { name: "Tlemcen" },
        { name: "Tiaret" },
        { name: "Tizi Ouzou" },
        { name: "Alger" },
        { name: "Djelfa" },
        { name: "Jijel" },
        { name: "Sétif" },
        { name: "Saïda" },
        { name: "Skikda" },
        { name: "Sidi Bel Abbès" },
        { name: "Annaba" },
        { name: "Guelma" },
        { name: "Constantine" },
        { name: "Médéa" },
        { name: "Mostaganem" },
        { name: "M'Sila" },
        { name: "Mascara" },
        { name: "Ouargla" },
        { name: "Oran" },
        { name: "El Bayadh" },
        { name: "Illizi" },
        { name: "Bordj Bou Arréridj" },
        { name: "Boumerdès" },
        { name: "El Tarf" },
        { name: "Tindouf" },
        { name: "Tissemsilt" },
        { name: "El Oued" },
        { name: "Khenchela" },
        { name: "Souk Ahras" },
        { name: "Tipaza" },
        { name: "Mila" },
        { name: "Aïn Defla" },
        { name: "Naâma" },
        { name: "Aïn Témouchent" },
        { name: "Ghardaïa" },
        { name: "Relizane" },
        { name: "El M'Ghair" },
        { name: "El Menia" },
        { name: "Ouled Djellal" },
        { name: "Bordj Baji Mokhtar" },
        { name: "Béni Abbès" },
        { name: "Timimoun" },
      ],
    },
    {
      Country: "tunisia",
      provinces: [
        { name: "Tunis" },
        { name: "Ariana" },
        { name: "Ben Arous" },
        { name: "Manouba" },
        { name: "Nabeul" },
        { name: "Zaghouan" },
        { name: "Bizerte" },
        { name: "Béja" },
        { name: "Jendouba" },
        { name: "Le Kef" },
        { name: "Siliana" },
        { name: "Sousse" },
        { name: "Monastir" },
        { name: "Mahdia" },
        { name: "Sfax" },
        { name: "Kairouan" },
        { name: "Kasserine" },
        { name: "Sidi Bouzid" },
        { name: "Gabès" },
        { name: "Médenine" },
        { name: "Tataouine" },
        { name: "Gafsa" },
        { name: "Tozeur" },
        { name: "Kebili" },
      ],
    },
    {
      Country: "libya",
      provinces: [
        { name: "Tripoli" },
        { name: "Benghazi" },
        { name: "Misrata" },
        { name: "Tarhuna" },
        { name: "Zawiya" },
        { name: "Zliten" },
        { name: "Al Khums" },
        { name: "Sirte" },
        { name: "Sabha" },
        { name: "Derna" },
        { name: "Zuwara" },
        { name: "Murzuq" },
        { name: "Ghat" },
        { name: "Ajdabiya" },
        { name: "Surt" },
        { name: "Al Bayda" },
        { name: "Tobruk" },
        { name: "Sebha" },
        { name: "Kufra" },
        { name: "Janzour" },
        { name: "Al Abyar" },
        { name: "Al Ajaylat" },
        { name: "Tajura" },
        { name: "Houn" },
        { name: "Al Marj" },
        { name: "Zintan" },
        { name: "Nalut" },
        { name: "Gharyan" },
        { name: "Bani Walid" },
        { name: "Awbari" },
      ],
    },
  ];
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (successMessage || errorMessage) {
      setInterval(() => {
        setErrorMessage(false);
        setSuccessMessage(false);
      }, 3000);
    }
  }, [successMessage, errorMessage]);
  const onSubmit = async (values, actions) => {
    console.log(values);
    actions.setSubmitting(true);
    const url = process.env.BACKENDURL;
    await submitContact(url, { data: values })
      .then((res) => {
        actions.resetForm();
        actions.setSubmitting(false);
        setSuccessMessage(t("MessageSuccess"));
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(t("MessageFailed"));
        setSuccessMessage("");
        actions.setSubmitting(false);
      });
  };

  return (
    <div className="mt-5 w-full justify-center items-center flex flex-col mb-4">
      <h2 className="font-semibold my-8 text-4xl dark:text-white text-black border-b-[2px] border-black pb-2 dark:border-white">
        Contact Us
      </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          // You can add validation logic here if needed
          return errors;
        }}
      >
        {({ isSubmitting, isValid, values }) => (
          <Form className="justify-center items-center flex-col gap-4 flex">
            <div className="flex justify-center items-center md:gap-10 md:flex-row flex-col gap-4">
              <div className="min-w-[300px]">
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="bg-gray-700 text-white text-sm rounded-md block w-full p-2.5 lg:w-[400px]"
                  placeholder={t("FirstName")}
                  required
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="min-w-[300px]">
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="bg-gray-700 text-white text-sm rounded-md block w-full p-2.5 lg:w-[400px]"
                  placeholder={t("LastName")}
                  required
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="flex justify-center items-center md:gap-10 md:flex-row flex-col gap-4">
              <div className="min-w-[300px]">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-700 text-white text-sm rounded-md block w-full p-2.5 lg:w-[400px]"
                  placeholder={t("Email")}
                  required
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="min-w-[300px]">
                <Field
                  type="number"
                  id="Phone"
                  name="phone"
                  className="bg-gray-700 text-white text-sm rounded-md block w-full p-2.5 lg:w-[400px]"
                  placeholder={t("PhoneNumber")}
                  required
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="flex justify-center items-center md:gap-10 md:flex-row flex-col gap-4">
              <div className="min-w-[300px]">
                <Field
                  as="select"
                  id="country"
                  name="country"
                  className="bg-gray-700 text-white text-sm rounded-md block w-full p-2.5 lg:w-[400px]"
                  required
                >
                  <option value="">{t("SelectACountry")}</option>
                  <option value="algeria">{t("Algeria")}</option>
                  <option value="libya">{t("Libya")}</option>
                  <option value="tunisia">{t("Tunisia")}</option>
                </Field>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="min-w-[300px]">
                <Field
                  as="select"
                  id="town"
                  name="town"
                  className="bg-gray-700 text-white text-sm rounded-md block w-full p-2.5 lg:w-[400px]"
                  required
                >
                  {values.country ? (
                    provinceData
                      .find((country) => country.Country === values.country)
                      ?.provinces.map((province, index) => (
                        <option key={index} value={province.name}>
                          {province.name}
                        </option>
                      ))
                  ) : (
                    <option>{t("FirstSelectACountry")}</option>
                  )}
                </Field>
                <ErrorMessage
                  name="town"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="flex justify-center items-center md:gap-10 md:flex-row flex-col gap-4">
              <div className="min-w-[300px]">
                <Field
                  type="text"
                  id="subject"
                  name="subject"
                  className="bg-gray-700 text-white text-sm rounded-md block w-full p-2.5 lg:w-[400px]"
                  placeholder={t("Subject")}
                  required
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="min-w-[300px]">
                <Field
                  type="text"
                  id="company"
                  name="company"
                  className="bg-gray-700 text-white text-sm rounded-md block w-full p-2.5 lg:w-[400px]"
                  placeholder={t("Company")}
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="min-w-[300px] sm:col-span-2">
              <Field
                as="textarea"
                id="comment"
                name="comment"
                rows="5"
                className="bg-gray-700 text-white text-sm rounded-md block w-full p-2.5 lg:w-[840px]"
                placeholder={t("LeaveAComment")}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="min-w-[300px] mx-4 text-center">
              <label htmlFor="newsletter" className="text-sm">
                <Field
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="mr-2 text-center"
                />
                {t("JoinNewLetter")}
              </label>
            </div>
            <div className="flex justify-end items-center my-2">
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="py-2 hover:animate-pulse px-2 w-[180px] text-sm justify-items-end font-medium text-center border-2 border-black dark:border-white dark:text-white text-black rounded-sm"
              >
                {isSubmitting ? t("Sending") : t("SendMessage")}
              </button>
            </div>
            {successMessage && (
              <div className="text-green-500">{successMessage}</div>
            )}
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
