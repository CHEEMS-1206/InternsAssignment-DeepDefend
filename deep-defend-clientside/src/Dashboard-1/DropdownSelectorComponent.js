import DropdownComponent from "../Components/DropdownComponent";

function DropdownSelectorComponent() {

  return (
    <div className="DropdownSelectorComponent">
      <DropdownComponent
        options={[
          { label: "All scenarios", value: "AllScenarios" },
          { label: "Newly read", value: "Newlyread" },
          { label: "Newly added", value: "Newlyadded" },
        ]}
      />
      <DropdownComponent
        options={[
          { label: "Past 30 Days", value: "30Days" },
          { label: "Past 60 Days", value: "60Days" },
          { label: "Past 90 Days", value: "90Days" },
          { label: "Past 120 Days", value: "120Days" },
        ]}
      />
    </div>
  );
}

export default DropdownSelectorComponent;
