
export interface Menu {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface MenuItem {
  id: number;
  title: string;
  description?: string;
  url?: string;
  orderNumber: number;
  children?: MenuItem[];
}
