import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  preflight: true,
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      blue: '#2080f0',
      bg_blue: '#2080f01a',
      bd_blue: '#2080f04d',
      red: '#d03050',
      bg_red: '#d030501a',
      bd_red: '#d030504d',
      yellow: '#f0a020',
      bg_yellow: '#f0a0201a',
      bd_yellow: '#f0a0204d',
      green: "#18a058",
      bg_green: "#18a0581a",
      bd_green: "#18a0584d",
      gray: "#333639",
      bg_gray: "#3336391a",
      bd_gray: "#3336394d",
      tag_silver: "#24292f",
      bg_silver: "#f6f8fa",
      bd_silver: "#1b1f2426",
    },
  },
})