const EmptyState = ({ message = "No data found." }: { message?: string }) => {
  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 py-8 flex justify-center items-center h-64">
      <p className="text-gray-600">{message}</p>
    </section>
  );
};

export default EmptyState;