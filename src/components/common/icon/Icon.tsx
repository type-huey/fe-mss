import { ReactComponent as Logo } from './Logo.svg';
import { ReactComponent as Loading } from './Loading.svg';
import { ReactComponent as Refresh } from './Refresh.svg';
import { ReactComponent as Close } from './Close.svg';
import { ReactComponent as Search } from './Search.svg';
import { ReactComponent as Empty } from './Empty.svg';

type PropsTypes = {
  icon: string;
  width?: string;
  height?: string;
  fill?: string;
};

export const icons: TIcon = {
  Logo,
  Close,
  Loading,
  Refresh,
  Search,
  Empty
};

export type TIcon = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function Icon({ icon, width, height, fill }: PropsTypes) {
  const SVGIcon = icons[icon];

  return <SVGIcon width={width} height={height} fill={fill} />;
}
