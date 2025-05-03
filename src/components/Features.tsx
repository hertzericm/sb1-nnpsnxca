import React from 'react';
import { Code, Database, Shield, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-blue-600 dark:text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover what makes our GitHub-inspired site stand out
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Code className="h-8 w-8" />}
            title="Clean Code"
            description="Well-structured, modular code that's easy to maintain and scale."
          />
          <FeatureCard 
            icon={<Zap className="h-8 w-8" />}
            title="Fast Performance"
            description="Optimized for speed with modern web technologies and best practices."
          />
          <FeatureCard 
            icon={<Shield className="h-8 w-8" />}
            title="Secure Design"
            description="Built with security in mind to protect your data and privacy."
          />
          <FeatureCard 
            icon={<Database className="h-8 w-8" />}
            title="Data Management"
            description="Efficient data handling and storage solutions for your projects."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;