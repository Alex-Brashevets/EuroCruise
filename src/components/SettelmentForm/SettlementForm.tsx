import {SubmitHandler, useForm} from 'react-hook-form';
import {FormInput} from '../ui/Inputs/FormInput/FormInput';
import styles from './SettlementForm.module.css';
import representative from '/src/assets/world_2.svg'
import vector from '/src/assets/VectorM.svg'
import road from '/src/assets/Road.svg'
import roadFinish from '/src/assets/Road_finish.svg'
import telephone from '/src/assets/TeleP.svg'
import company from '/src/assets/company.svg'
import {GoogleReCaptchaCheckbox} from "@google-recaptcha/react";
import {useForm as useSendForm} from '@formspree/react';
import {useRef, useState} from "react";
import {useOnClickOutside} from '../../utils/hooks/useOnClickOutside';
import {ModalWindow} from '../ModalWindow/ModalWindow';
import {useTranslation} from "react-i18next";


export interface SettlementFormInputs {
  representative: string;
  email: string;
  phone: string;
  companyName: string;
  countryFrom: string;
  countryTo: string;
  cityFrom: string;
  cityTo: string
}


const SettlementForm = () => {
  const [insuranceSelected, SetInsuranceSelected] = useState(true);
  const [recaptchaCheked, setRecaptchaChecked] = useState<null | string>(null)
  const [recaptchReset, setRecaptchaReset] = useState<null | string>(null)
  const [state, handleSendFormSubmit] = useSendForm("xayrbezz");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const modalContainer = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalContainer, () => setModalIsOpen(false));
  const {t} = useTranslation();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SettlementFormInputs>()

  const onSubmit: SubmitHandler<SettlementFormInputs> = (data: any) => {
   if (recaptchaCheked) {
    console.log(data)
    handleSendFormSubmit(data)
    setModalIsOpen(true)
   }
  }

  return (
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.header}>
          <div  className={styles.header_info}>
            {t('CALCCOST')}
          </div>
          <span className={styles.line}/>
          <div className={styles.header_description}>
            {t('formDescription')}
            <span>* - {t('formDescriptionRequire')} </span>
          </div>
        </div>
        <div  id='Form' className={styles.representative_info}>
          <div className={styles.column}>
            <FormInput
                label={t('representativeLabel')}
                icon={representative}
                placeholder={t('representativePlaceholder')}
                register={register}
                register_field='representative'
                isError={errors.representative}
                helperText={t("helperText")}
              />
            <FormInput
                label={t('emailLabel')}
                icon={vector}
                placeholder={t('emailPlaceholder')}
                validate
                register={register}
                register_field='email'
                isError={errors.email}
                helperText={
                  errors.email?.type === 'required'
                      ? t('helperText')
                      : errors.email?.type === 'pattern'
                          ? t('helperTextEmail')
                          : ''
                        }
                        />
          </div>
          <div className={styles.column}>
            <FormInput
                label={t("phoneLabel")}
                icon={telephone}
                placeholder='+375 __ ___ __'
                register={register}
                register_field='phone'
                isError={errors.phone}
                helperText={t("helperText")}
                    />
            <FormInput
                label={t("companyLabel")}
                icon={company}
                placeholder={t("companyPlaceholder")}
                register={register}
                register_field='companyName'
                isError={errors.companyName}
                helperText={t("helperText")}
            />
          </div>
        </div>
        <h3 className={styles.info_title}>{t("SettlementFormInfoTitle")}</h3>
        <div className={styles.routes}>
          <FormInput
              label={t("countryFromLabel")}
              icon={road}
              placeholder={t("countryFromPlaceholder")}
              register={register}
              register_field='countryFrom'
              isError={errors.countryFrom}
              helperText={t("helperText")}
          />
          <FormInput
              label={t("countryToLabel")}
              icon={roadFinish}
              placeholder={t("countryToPlaceholder")}
              register={register}
              register_field='countryTo'
              isError={errors.countryTo}
              helperText={t("helperText")}
          />
          <FormInput
              label={t("cityFromLabel")}
              icon={road}
              placeholder={t("cityPlaceHolder")}
              register={register}
              register_field='cityFrom'
              isError={errors.cityFrom}
              helperText={t("helperText")}
          />
          <FormInput
              label={t("cityToLabel")}
              icon={roadFinish}
              placeholder={t("cityPlaceHolder")}
              register={register}
              register_field='cityTo'
              isError={errors.cityTo}
              helperText={t("helperText")}
          />
        </div>
        <h3 className={styles.info_title}>Страхование груза</h3>
        <div className={styles.buttons_container}>
          <div className={styles.insurance}>
            <div className={insuranceSelected ? styles.selected:""} onClick={()=>SetInsuranceSelected(true)}>
              {t("insurance")}
            </div>
            <div className={!insuranceSelected ?styles.selected:""} onClick={()=>SetInsuranceSelected(false)}>
              {t("insuranceNO")}
            </div>
          </div>
          <div className={styles.confirm}>
            <GoogleReCaptchaCheckbox  callback={(token)=>setRecaptchaChecked(token)}
            />
            <button type='submit' className={styles.button}>
              {t("formCalcCost")}
            </button>
          </div>
        </div>
        <ModalWindow 
        label={t("modalWindowLabel")}
         description={t("modalWindowDescription")}
          isOpen={modalIsOpen}
           ref={modalContainer}
           onClose={()=>setModalIsOpen(false)}
           />
      </form>
  );
};

export default SettlementForm;