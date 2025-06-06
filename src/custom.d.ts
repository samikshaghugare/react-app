declare module "*.mp4" {
  const src: string;
  export default src;
}


// TypeScript doesn't know how to handle .mp4 files by default.
// This tells TypeScript how to handle .mp4 imports.