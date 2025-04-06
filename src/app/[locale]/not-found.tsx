import { Locale } from 'next-intl';

export default function NotFound({ params: { locale } }: { params: { locale: Locale } }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl mt-4">111 Page not found 111</p>
    </div>
  );
}
