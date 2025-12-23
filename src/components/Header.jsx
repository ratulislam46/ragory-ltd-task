const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        
        <div>
          <h1 className="text-xl font-semibold">
            Dynamic Data Table
          </h1>
          <p className="text-sm text-gray-500">
            React JS Developer Intern Hiring Task
          </p>
        </div>

        <div className="text-sm text-gray-600">
          Company: <span className="font-medium text-blue-500">Ragory LTD</span>
        </div>

      </div>
    </header>
  );
};

export default Header;
