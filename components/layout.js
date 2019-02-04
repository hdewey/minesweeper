import Link from 'next/link';
import Head from 'next/head';
import { StyleProvider } from 'cf-style-nextjs';
import { createComponent } from 'cf-style-container';

const Center = createComponent(({ theme }) => ({
  //margin: '0px',
  //margin: theme.space[4],
  color: '#C7E8F3',
  backgroundColor: '#587291',
  textAlign: 'center',
  display: 'center',
  width: '100%',
  height: '100%',
}));

export default ({ children, title = 'Minesweeper' }) => (
  <StyleProvider>
    <Center>
        <h1>{title}</h1>
        {children}
    </Center>
  </StyleProvider>
);
