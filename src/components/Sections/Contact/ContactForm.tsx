import dynamic from 'next/dynamic';
import emailjs from 'emailjs-com';
import {FC, memo, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), {ssr: false});

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowRecaptcha(true);
          observer.disconnect();
        }
      },
      {rootMargin: '200px'},
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      const fieldData: Partial<FormData> = {[name]: value};
      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleRecaptchaChange = useCallback((value: string | null) => {
    setRecaptchaValue(value);
  }, []);

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (isSubmitting) return;
      if (!recaptchaValue) {
        setStatus('Please complete the CAPTCHA.');
        return;
      }

      setIsSubmitting(true);

      const formDataRecord: Record<string, unknown> = {
        from_name: data.name,
        email: data.email,
        message: data.message,
        'g-recaptcha-response': recaptchaValue,
      };

      try {
        await emailjs.send('service_ialq19j', 'template_roh2pmr', formDataRecord, '5JcbdFW4WzhmaC_0O');
        setStatus('Message sent successfully!');
      } catch (error) {
        setStatus('An error occurred.');
      }

      setTimeout(() => setIsSubmitting(false), 30000);
    },
    [isSubmitting, recaptchaValue, data],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  const {t} = useTranslation();
  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage} ref={formRef}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />

      {showRecaptcha && (
        <ReCAPTCHA onChange={handleRecaptchaChange} sitekey="6Lf-ressAAAAAJogaYkSFnmSf1iFSZQU52plyhxx" />
      )}

      <button
        aria-label="Submit contact form"
        className={`
        w-max rounded-full border-2 px-4 py-2 text-sm font-medium shadow-md outline-none
        ${
          isSubmitting || !recaptchaValue
            ? 'cursor-not-allowed border-gray-600 bg-gray-900 text-gray-400'
            : 'border-orange-600 bg-stone-900 text-white hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800'
        }
      `}
        disabled={isSubmitting || !recaptchaValue}
        type="submit">
        {t('Send Email')}
      </button>

      {status && <p>{status}</p>}
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
