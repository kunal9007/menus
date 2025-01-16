import { PrismaService } from '../prisma/prisma.service';
export declare class MenuService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllMenus(): Promise<{
        id: number;
        name: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getMenuWithHierarchy(menuId: number): Promise<{
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
