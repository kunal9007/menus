// import { Controller } from '@nestjs/common';

// @Controller('hello')
// export class HelloController {}

import { Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) { }

  // Retrieve all menus
  @Get()
  async getAllMenus() {
    console.log("get menus ")
    try {
      return await this.menuService.getAllMenus();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Retrieve a specific menu with hierarchical data
  @Get(':id')
  async getMenuWithHierarchy(@Param('id') id: string) {
    console.log("get menus id")

    const menuId = parseInt(id, 10);
    if (isNaN(menuId)) {
      throw new HttpException('Invalid menu ID', HttpStatus.BAD_REQUEST);
    }

    try {
      return await this.menuService.getMenuWithHierarchy(menuId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
