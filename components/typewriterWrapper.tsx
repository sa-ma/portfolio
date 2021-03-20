import Typewriter from 'typewriter-effect';

const TypewriterWrapper = () => {
  return (
    <Typewriter
      onInit={() => {}}
      options={{
        strings: [
          "I'm Samaila Bala",
          "I'm Human...",
          "I'm a Software Engineer.",
          "I'm a Technical Writer.",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterWrapper;
