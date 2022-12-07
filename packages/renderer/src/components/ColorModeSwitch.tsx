import { Box, HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { useDeferredValue } from 'react';

export const ColorModeSwitch = () => {
  const { colorMode, setColorMode } = useColorMode();
  const deferredValue = useDeferredValue(colorMode === 'dark' ? 32 : 0);

  return (
    <HStack
      bgColor={'blackAlpha.300'}
      borderRadius={'full'}
      position={'relative'}
    >
      <IconButton
        aria-label='light'
        icon={<SunIcon />}
        onClick={() => setColorMode('light')}
        variant={'ghost'}
        borderRadius={'full'}
        size={'xs'}
        color={colorMode !== 'dark' ? 'yellow.200' : '#fff'}
        _hover={{ bgColor: 'translate' }}
        _active={{ bgColor: 'translate' }}
      />
      <IconButton
        aria-label='dark'
        icon={<MoonIcon />}
        onClick={() => setColorMode('dark')}
        variant={'ghost'}
        borderRadius={'full'}
        size={'xs'}
        color={colorMode === 'dark' ? 'yellow.400' : '#fff'}
        _hover={{ bgColor: 'translate' }}
        _active={{ bgColor: 'translate' }}
      />
      <Box
        as={motion.div}
        position={'absolute'}
        bgColor={'blue.400'}
        borderRadius={'full'}
        width={6}
        height={6}
        left={-2}
        zIndex={-1}
        transform={`translateX(${deferredValue}px)`}
        transition='0.5s linear'
      />
    </HStack>
  );
};
