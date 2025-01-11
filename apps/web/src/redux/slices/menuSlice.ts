
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Menu, MenuItem } from '@/types/menu';

interface MenuState {
  menus: Menu[];
  selectedMenu: Menu | null;
  loading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  menus: [],
  selectedMenu: null,
  loading: false,
  error: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    openMenus: {}, // Keeps track of open/close states for menus
  },
  reducers: {
    toggleMenu: (state, action) => {
      const menu = action.payload;
      state.openMenus[menu] = !state.openMenus[menu];
    },
  },
});

export const { toggleMenu } = menuSlice.actions;

export const fetchMenus = createAsyncThunk('menu/fetchMenus', async (): Promise<Menu[]> => {
  const response = await axios.get('/api/menus');
  return response.data;
});

export const fetchMenuById = createAsyncThunk('menu/fetchMenuById', async (id: number): Promise<Menu> => {
  const response = await axios.get(`/api/menus/${id}`);
  return response.data;
});

// const menuSlice = createSlice({
//   name: 'menu',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMenus.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchMenus.fulfilled, (state, action) => {
//         state.loading = false;
//         state.menus = action.payload;
//       })
//       .addCase(fetchMenuById.fulfilled, (state, action) => {
//         state.selectedMenu = action.payload;
//       })
//       .addCase(fetchMenus.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || null;
//       });
//   },
// });
//
export default menuSlice.reducer;
