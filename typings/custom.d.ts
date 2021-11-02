declare module "*.svg" {
  const content: any;
  export default content;
}

declare module '*.css';

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.ts" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}
