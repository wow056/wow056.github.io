'use client';
import { JSX } from 'react';
import * as React from 'react';
import { Dialog } from 'radix-ui';

export function ProjectButton(props: { children: JSX.Element }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          {props.children}
        </button>
      </Dialog.Trigger>
      
    </Dialog.Root>
  );
}
