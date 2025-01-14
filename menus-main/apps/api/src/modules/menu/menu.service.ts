
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(private readonly prisma: PrismaService) { }

  // Fetch all menus
  async getAllMenus() {
    return this.prisma.menu.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  // Fetch a menu with hierarchical items
  async getMenuWithHierarchy(menuId: number) {
    const menu = await this.prisma.menu.findUnique({
      where: { id: menuId },
      include: {
        // id: true,
        // name: true,
        // description: true,
        items: {
          where: { parentId: null }, // Fetch only root items initially
          include: { children: true }, // Include children for hierarchy
          orderBy: { orderNumber: 'asc' }, // Order items
        },
      },
    });

    if (!menu) {
      throw new Error(`Menu with ID ${menuId} not found`);
    }

    return menu;
  }
}
