export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  const ButtonsContainer = buttonsContainer; // :) like
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
