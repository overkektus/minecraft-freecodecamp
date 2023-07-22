import create from 'zustand'
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
  textures: 'dirt',
  cubes: [{
    key: nanoid(),
    pos: [1, 1, 1],
    texture: 'dirt',
  }],
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