import { MenuService } from './menu.service';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    getAllMenus(): Promise<{
        id: number;
        name: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getMenuWithHierarchy(id: string): Promise<{
        items: ({
            children: {
                id: number;
                description: string | null;
                createdAt: Date;
                updatedAt: Date;
                orderNumber: number;
                menuId: number;
                parentId: number | null;
                title: string;
                url: string | null;
            }[];
        } & {
            id: number;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            orderNumber: number;
            menuId: number;
            parentId: number | null;
            title: string;
            url: string | null;
        })[];
    } & {
        id: number;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
