import { Box, Button, Flex, Heading, HStack, Image } from '@chakra-ui/react';
import { ColorModeSwitch } from './components/ColorModeSwitch';

const App = () => {
  const openDialog = async () => {
    const filePath = await window.electronAPI.openFile();
    alert(filePath);
  };

  const clipboardCopy = async () => {
    await window.electronAPI.clipboardCopy(['hoge', 'fuga']);
  };

  const getJsonPlaceHolder = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();

    console.info({ data });
  };

  return (
    <Flex
      minH={'100vh'}
      flexDir={'column'}
      // bgGradient='linear(to-b, gray.800, gray.400)'
    >
      <Box
        position={'absolute'}
        top={4}
        right={4}
      >
        <ColorModeSwitch />
      </Box>
      <Heading
        p={2}
        textAlign={'center'}
      >
        Vite Electron React Boilerplate
      </Heading>
      <Flex
        flex={1}
        flexDir={'column'}
        justify={'center'}
        align={'center'}
      >
        <Image
          alt='vite'
          src='../assets/logo.svg'
          style={{ width: 100, height: 100 }}
        />
        <HStack>
          <Button onClick={openDialog}>OPEN FILE DIALOG</Button>
          <Button onClick={clipboardCopy}>CLIPBOARD COPY</Button>
          <Button onClick={getJsonPlaceHolder}>GET API DATA</Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default App;
