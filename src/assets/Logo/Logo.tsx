import { Link } from 'wouter';
import logo from '../images/logo.png';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`${className}`}>
      <img src={logo} width={67} height={87} />
    </Link>
  );
}
