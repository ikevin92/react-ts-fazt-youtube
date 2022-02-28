import { ChangeEvent } from 'react';

export interface Task {
  id?: number;
  title: string;
  description: string;
  completed?: boolean;
}


export type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;