import { Response } from './Response'
import { useTranslation } from "react-i18next";

type MessageGeneratorProps = {
  handleInput: (val: string) => void; 
  inputLength: number;
  resetInput: (val: string) => void;
  inputValue: string;
  handleGenerate: (val: string) => void | void;
  messageValue: string
};

export const MessageGenerator = ({handleInput, inputLength, resetInput, inputValue, handleGenerate, messageValue}:MessageGeneratorProps) => {

  const { t } = useTranslation();

  return (
    <div className='content generator'>
        <div className='h2-content'>
            <div className='sticker'>Beta</div>
            {/* Этот раздел будет корректно функционаровать, когда мы подключим backend, а пока что в виде сгенерированного сообщения возвращается случайная цитата 5 раз подряд с открытого сайта по тестированию запросов web api  */}
            <div className='sticker-info'>
                <p></p>
            </div>
            <h2>{t("generator")}</h2>
            <p className='gray-text'>
            {t("generator_description")}
            </p>
        </div>
        <div className='generator-forms'>
            <div className='input-form'>
                <input 
                name='msg-input'
                placeholder={t("input_question")}
                maxLength={140}
                value={inputValue}
                onChange={(e) => handleInput(e.target.value)}
                ></input>
                <button 
                    className='m-button'
                    onClick={(e) => handleGenerate(inputValue)}
                >{t("generate")}</button>
                <div className='input-panel'>
                    <button className='input-clear' onClick={(e) => resetInput('')}>{t("clear")}</button>
                    <div className='vertical-line-div' style={{backgroundColor: '#8a8a8a', height: '20px'}}></div>
                    <div className='input-counter'><p>{inputLength} / 140</p></div>
                    
                </div>
            </div>
            <Response handleGenerate={handleGenerate}/>
        </div>
    </div>
  )
}
