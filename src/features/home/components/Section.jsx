export const Section = ({ children }) => {
  return (
    <>
      <section className="mt-10">{children}</section>
      <hr className="my-10 text-gray-300" />
    </>
  );
};
