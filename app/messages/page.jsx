import { Wrench, HardHat } from 'lucide-react';

const MessagePage = () => {
  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24 max-w-6xl">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0 text-center">
          <div className="flex justify-center mb-4 animate-bounce">
            <HardHat className="w-12 h-12 text-yellow-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Messages Page is Being Built
          </h1>
          <p className="text-gray-600 mb-6">
            We’re working hard to bring this feature to you. Please check back soon!
          </p>
          <div className="flex justify-center space-x-4 animate-pulse">
            <Wrench className="w-10 h-10 text-gray-500" />
            <HardHat className="w-10 h-10 text-yellow-500" />
            <Wrench className="w-10 h-10 text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagePage;