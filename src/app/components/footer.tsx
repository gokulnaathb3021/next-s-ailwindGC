import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-0 w-full bg-neutral-100">
      <p className="py-3 px-8 text-xl text-slate-600">India</p>
      <div className="py-3 px-8 flex justify-between">
        <ul className="flex [&>*]:mr-6 text-slate-600 text-xl">
          <li className="hover:underline">
            <Link href="https://about.google/">About</Link>
          </li>
          <li className="hover:underline">
            <Link href="https://ads.google.com">Advertising</Link>
          </li>
          <li className="hover:underline">
            <Link href="https://www.google.com/intl/en_in/business/">
              Business
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="https://www.google.com/search/howsearchworks/">
              How Search works
            </Link>
          </li>
        </ul>
        <ul className="flex [&>*]:mr-6 text-slate-600 text-xl">
          <li className="hover:underline">
            <Link href="https://policies.google.com/privacy">Privacy</Link>
          </li>
          <li className="hover:underline">
            <Link href="https://policies.google.com/terms">Terms</Link>
          </li>
          <li className="hover:underline">
            <Link href="https://support.google.com">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
