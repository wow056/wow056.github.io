'use client';

import classNames from 'classnames';
import { Minus } from 'lucide-react';

export function Section(props: {
  num: number;
  title: string;
  className?: string;
  id?: string;
  titleId?: string;
}) {
  return (
    <a
      id={props.id}
      href={`#${props.title}`}
      className={classNames(
        'flex items-center justify-between md:h-[112px] h-[54px] sticky z-10',
        props.className
      )}
    >
      <h3 className="flex gap-8 px-5 md:px-[100px] items-center">
        <p className="text-[10px] md:text-[14px] font-semibold leading-[1.3em]">
          {String(props.num).padStart(2, '0')}
        </p>
        <p id={props.titleId} className="font-semibold leading-[1.3em] p-title">
          {props.title}
        </p>
      </h3>
      <Minus size={24} className="mr-5 md:mr-[108px] " />
    </a>
  );
}
