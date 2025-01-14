
import Link from 'next/link';
import { Menu } from '@/types/menu';

interface MenuListProps {
  menus: Menu[];
}

const MenuList: React.FC<MenuListProps> = ({ menus }) => {
  return (
    <ul className="list-disc ml-5">
      {menus && menus.length > 0 ? (
        menus.map((menu) => (
          <li key={menu.id}>
            <Link href={`/menus/${menu.id}`}>
              {menu.name}
            </Link>
          </li>
        ))
      ) : (
        <li>No menus available.</li>
      )}
    </ul>


  );
};
{/* <ul className="list-disc ml-5"> */ }
{/*   {menus.map((menu) => ( */ }
{/*     <li key={menu.id}> */ }
{/*       <Link href={`/menus/${menu.id}`}> */ }
{/*         <a className="text-blue-500">{menu.name}</a> */ }
{/*       </Link> */ }
{/*     </li> */ }
{/*   ))} */ }
{/* </ul> */ }
export default MenuList;
