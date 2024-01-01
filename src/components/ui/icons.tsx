import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  CreditCard,
  Edit,
  ExternalLink,
  Facebook,
  File,
  FileText,
  Film,
  HelpCircle,
  Home,
  Image,
  Info,
  Instagram,
  Laptop,
  List,
  Loader2,
  Lock,
  Minus,
  MoreVertical,
  Pause,
  Pencil,
  Phone,
  Pizza,
  Play,
  Plus,
  RefreshCcw,
  Search,
  Settings,
  Tablet,
  ThumbsDown,
  ThumbsUp,
  Trash,
  TrendingUp,
  Tv2,
  Twitter,
  User,
  Volume2,
  VolumeX,
  X,
  Youtube,
  type LucideProps,
} from 'lucide-react';

export const Icons = {
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  lock: Lock,
  check: Check,
  add: Plus,
  remove: Minus,
  warning: AlertTriangle,
  user: User,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  externalLink: ExternalLink,
  help: HelpCircle,
  pizza: Pizza,
  bell: Bell,
  search: Search,
  info: Info,
  play: Play,
  pause: Pause,
  thumbsUp: ThumbsUp,
  thumbsDown: ThumbsDown,
  volumne: Volume2,
  volumneMute: VolumeX,
  refresh: RefreshCcw,
  edit: Pencil,
  edit2: Edit,
  phone: Phone,
  tablet: Tablet,
  computer: Laptop,
  tv: Tv2,
  home: Home,
  tvShow: Clapperboard,
  movie: Film,
  trendingUp: TrendingUp,
  list: List,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  logo: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden='true'
      focusable='false'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z'
      ></path>
    </svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='github'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 496 512'
      {...props}
    >
      <path
        fill='currentColor'
        d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='discord'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 488 512'
      {...props}
    >
      <path
        fill='currentColor'
        d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
      ></path>
    </svg>
  ),
};

export const GithubLogoIcon: React.FC<{ width?: number; height?: number }> = ({
  width = 15,
  height = 15,
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 15 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z'
      fill='currentColor'
      fillRule='evenodd'
      clipRule='evenodd'
    />
  </svg>
);
