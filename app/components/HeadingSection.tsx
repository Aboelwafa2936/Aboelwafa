interface HeadingSectionProps {
    title: string;
  }
  
  const HeadingSection: React.FC<HeadingSectionProps> = ({ title }) => {
    return (
      <h1 className="dark:text-white text-center text-3xl mb-6 font-bold text-gray-800">{title}</h1>
    );
  }
  
  export default HeadingSection;
