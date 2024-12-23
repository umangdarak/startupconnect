import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { data } from './data';
import { useDashboardContext } from '../provider';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
const style = {
  title: 'mx-4 text-sm whitespace-pre',
  active: 'bg-white rounded-full',
  link: 'flex items-center justify-start my-1 p-3 w-full hover:text-black',
  close: 'lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all',
  open: 'lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto',
};

export function SidebarItems() {
  const pathname = usePathname();
  const { isOpen } = useDashboardContext();
  const authState = useSelector((state: RootState) => state.auth);

  return (
    <ul className="md:pl-3 bg-white">
      {data.map((item) => (
      authState.userType==='Investor'&&item.title==='Follow Requests'?<></>:<li key={item.title}>
          <Link href={item.link}>
            <span className={style.link}>
              <div className={`p-2 ${item.link === pathname ? style.active : ''}`}>
                <span>{item.icon}</span>
              </div>
              <span className={`${style.title} ${isOpen ? style.open : style.close}`}>
                {item.title}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}