import { useState } from "react";

export default function Tab() {
  const [activeTab, setActiveTab] = useState(1);

  function renderContent() {
    if (activeTab === 1) return <p>This is the content for Tab 1</p>;
    if (activeTab === 2) return <p>This is the content for Tab 2</p>;
    if (activeTab === 3) return <p>This is the content for Tab 3</p>;
  }

  return (
    <>
      <ul>
        <li onClick={() => setActiveTab(1)}>Tab 1</li>
        <li onClick={() => setActiveTab(2)}>Tab 2</li>
        <li onClick={() => setActiveTab(3)}>Tab 3</li>
      </ul>

      {renderContent()}
    </>
  );
}
