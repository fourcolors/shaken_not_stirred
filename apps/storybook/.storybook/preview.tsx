import type { Preview } from '@storybook/react';
import React from 'react';

// Import design tokens
import '@shaken/ui/styles';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'acid-lounge',
      values: [
        {
          name: 'acid-lounge',
          value: '#000000',
        },
        {
          name: 'surface',
          value: '#1E1E28',
        },
        {
          name: 'elevated',
          value: '#1A1A24',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    layout: 'centered',
  },

  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          color: '#ffffff',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'acid-lounge',
      toolbar: {
        icon: 'paintbrush',
        items: ['acid-lounge', 'light'],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
