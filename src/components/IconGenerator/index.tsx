import React from 'react';

declare type Props = {
  type: string;
  sizeClass?: string;
}

function checkIconIntegrity(type: string) {
  if (
    type !== 'all' &&
    type !== 'shop' &&
    type !== 'finance' &&
    type !== 'work' &&
    type !== 'web' &&
    type !== 'chart' &&
    type !== 'messages' &&
    type !== 'clipboard' &&
    type !== 'tag') {
    console.warn(`"${type}" icon not found!`);
  }
}

export function IconGenerator({ type, sizeClass }: Props) {
  checkIconIntegrity(type);

  if (type === 'all') {
    return <svg xmlns="http://www.w3.org/2000/svg" className={ sizeClass ? sizeClass : 'app-nav-icon'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>;
  }

  if (type === 'shop') {
    return <svg xmlns="http://www.w3.org/2000/svg" className={ sizeClass ? sizeClass : 'app-nav-icon'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>;
  }

  if (type === 'finance') {
    return <svg xmlns="http://www.w3.org/2000/svg" className={ sizeClass ? sizeClass : 'app-nav-icon'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>;
  }

  if (type === 'work') {
    return <svg xmlns="http://www.w3.org/2000/svg" className={ sizeClass ? sizeClass : 'app-nav-icon'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>;
  }

  if (type === 'web') {
    return <svg xmlns="http://www.w3.org/2000/svg" className={ sizeClass ? sizeClass : 'app-nav-icon'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>;
  }

  if (type === 'chart') {
    <svg xmlns="http://www.w3.org/2000/svg" className={ sizeClass ? sizeClass : 'app-nav-icon'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>;
  }

  if (type === 'messages') {
    return <svg xmlns="http://www.w3.org/2000/svg" className={ sizeClass ? sizeClass : 'app-nav-icon'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
    </svg>;
  }

  if (type === 'clipboard') {
    return <svg xmlns="http://www.w3.org/2000/svg" className={ sizeClass ? sizeClass : 'app-nav-icon'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>;
  }

  if (type === 'tag') {
    return <svg xmlns="http://www.w3.org/2000/svg" className={ sizeClass ? sizeClass : 'app-nav-icon'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>;
  }

  return <svg xmlns="http://www.w3.org/2000/svg" className={ sizeClass ? sizeClass : 'app-nav-icon'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>;
}
