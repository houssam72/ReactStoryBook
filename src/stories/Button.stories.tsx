import type { Meta, StoryObj } from '@storybook/react';
import {Button} from "@mui/material";


const meta = {
  title: 'Form/Control/Button',
  component: Button,
  args:{
    variant:"contained",
    children:"Button Children Global Args"
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text:Story={render:()=> <Button variant="text">Text</Button>}

export const Contained:Story={render:()=> <Button variant="contained">Contained</Button>}

export const Outlined:Story={render:()=> <Button variant="outlined">Outlined</Button>}

export const TextArg:Story={
  args:{
    variant:"text",
    children:"Text Args"
  }
}
export const LongTextArg:Story={
  args:{
    ...TextArg.args,
    children:"Long Text Args"
  }
}

export const GlobalTextArg:Story={
  args:{
    color:"secondary"
  }
}




