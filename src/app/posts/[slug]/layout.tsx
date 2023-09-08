import { ReactNode } from 'react';
import BlogLayout from '../../../components/Blog/BlogLayout';

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return <BlogLayout>{children}</BlogLayout>;
}
