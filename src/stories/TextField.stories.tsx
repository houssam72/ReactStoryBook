import type { Meta, StoryObj } from '@storybook/react';
import {TextField} from "@mui/material";


const meta = {
    title: 'Form/TextField',
    component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined:Story={ name:"OutlinedTextField", render:()=> <TextField id="outlined-basic" label="Outlined" variant="outlined" />}

export const Filled:Story={render:()=><TextField id="filled-basic" label="Filled" variant="filled" />}

export const Standard:Story={render:()=> <TextField id="standard-basic" label="Standard" variant="standard" />}


