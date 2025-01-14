
import { MenuItem } from '@/types/menu';
import MenuList from '@/components/MenuList';

interface MenuHierarchyProps {
  items: MenuItem[];
}

const MenuHierarchy: React.FC<MenuHierarchyProps> = ({ items }) => {
  const renderItems = (items: MenuItem[]) =>
    items.map((item) => (
      <li key={item.id}>
        {item.title}
        {item.children && item.children.length > 0 && (
          <ul className="ml-5 list-disc">
            {renderItems(item.children)}
          </ul>
        )}
      </li>
    ));

  return <ul className="list-disc ml-5">{renderItems(items)}</ul>;
};

export default MenuHierarchy;
