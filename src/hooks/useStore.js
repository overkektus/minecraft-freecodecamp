import create from 'zustand'
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
  textures: 'dirt',
  cubes: [
    {
      key: nanoid(),
      pos: [2, 0.5, 0],
      texture: 'dirt',
    },
    {
      key: nanoid(),
      pos: [1, 0.5, 0],
      texture: 'wood',
    }
  ],
  addCube: (x, y, z) => {
    set((state) => ({
      cubes: [...state.cubes, { key: nanoid(), pos: [x, y, z,], texture: state.texture }],
    }))
  },
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}))