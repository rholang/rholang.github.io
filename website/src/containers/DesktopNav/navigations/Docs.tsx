import React from 'react';
import PageIcon from '@atlaskit/icon/glyph/page';
import { Directory } from '../../../types';
import renderNav from '../utils/renderNav';
import buildNavGroups from '../utils/buildNavGroups';

export type DocsNavProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  pathname: string;
  docs: Directory;
};

export default function DocsNav({ pathname, docs, onClick }: DocsNavProps) {
  console.log(docs)
  const groups = buildNavGroups('docs', PageIcon, pathname, docs);
  return <div>{renderNav(groups, { pathname, onClick })}</div>;
}
