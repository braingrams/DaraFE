export interface IMenuProps {
  link: { href: string; name: string };
  onClick: any;
}
export interface IBtnProps {
  p?: any;
  text: string;
  onClick?: () => void;
  icon?: any;
  bg?: any;
  color?: any;
  w?: any;
  type?: any;
  disabled?: any;
}
export interface ITextWithDot {
  dot?: boolean;
  text: string;
}

export interface IMainHeader {
  size?: any;
  text: string;
  align?: any;
  color?: any;
  w?: any;
  fw?: any;
}
export interface ICustomCard {
  title?: any;
  text: string;
  bg?: any;
  icon?: any;
  w?: any;
  dir?: boolean;
}
export interface IContentDisplay {
  rtl?: boolean;
  text: string;
  img?: any;
  sub: string;
  btn?: any;
  onClick?: any;
  gap?: any;
  social?: boolean;
}

export interface IAccordion {
  content: string;
  title: string;
}

export interface ICustomList {
  text: string;
  sub: string;
}

export interface ICustomSteps {
  title: string;
  sub: string;
  bg: any;
  rtl?: boolean;
  num: string;
  h: any;
}

export interface ICustomContact {
  text: string;
  title: string;
  icon: any;
  url?: any;
}

export interface IPrimaryInput {
  label?: string;
  placeholder?: string;
  h?: any;
  count?: any;
  error?: any;
  name?: any;
  type?: any;
  onChange?: any;
}

export interface IFilterHeads {
  title: string;
  onClick?: any;
}

export interface ICategoryBox {
  name: string;
  src?: string;
  rate: string;
  job: string;
  num: string;
  projects: string;
}
