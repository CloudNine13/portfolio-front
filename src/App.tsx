import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 text-white p-6">
      <div className="max-w-md text-center bg-zinc-800 p-8 rounded-2xl shadow-xl border border-zinc-700">
        <h1 className="text-3xl font-extrabold tracking-tight text-emerald-400 mb-2">Portfolio</h1>
        <p className="text-zinc-400 text-sm mb-6">
          {t('PERSONAL_INFO.NAME')} {t('PERSONAL_INFO.SURNAME')}
        </p>

        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="cursor-pointer rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors duration-200 active:scale-95"
        >
          Count is {count}
        </button>
      </div>
    </div>
  );
}
