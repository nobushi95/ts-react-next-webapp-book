import { useEffect, useLayoutEffect, useState } from 'react';

const UPDATE_CYCLE = 1000;

const KEY_LOCALE = 'KEY_LOCALE';

const localeMap = {
  us: 'en-US',
  jp: 'ja-JP',
} as const;
type Locale = (typeof localeMap)[keyof typeof localeMap];

const getLocaleFromString = (text: string): Locale => {
  switch (text) {
    case localeMap.us:
      return 'en-US';
    case localeMap.jp:
      return 'ja-JP';
    default:
      return 'en-US';
  }
};

export const Clock = () => {
  const [timestamp, setTimeStamp] = useState(new Date());
  const [locale, setLocale] = useState<Locale>('en-US');

  useEffect(() => {
    console.log('setInterval');
    const timer = setInterval(() => {
      setTimeStamp(new Date());
    }, UPDATE_CYCLE);

    return () => {
      console.log('clearInterval');
      clearInterval(timer);
    };
  }, []);

  useLayoutEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE);
    if (savedLocale !== null) {
      console.log(`setLocale ${savedLocale}`);
      setLocale(getLocaleFromString(savedLocale));
    }
  }, []);

  useEffect(() => {
    console.log(`localStorage.setItem ${locale}`);
    localStorage.setItem(KEY_LOCALE, locale);
  }, [locale]);

  return (
    <div>
      <p>
        <span id="current-time-lable">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value={localeMap.us}>en-US</option>
          <option value={localeMap.jp}>ja-JP</option>
        </select>
      </p>
    </div>
  );
};
