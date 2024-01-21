import type { Meta, StoryObj } from '@storybook/react';
import { StyledButton } from '../components/StyledButton';

const meta = {
  title: 'StyledButton',
  component: StyledButton,
} satisfies Meta<typeof StyledButton>;

export default meta;
type Story = StoryObj<typeof StyledButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'primary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    text: 'success',
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    text: 'transparent',
  },
};
