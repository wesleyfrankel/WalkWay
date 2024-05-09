import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const UnitSelect = () => {
  const [metric, setMetric] = useState(true);
  const [standard, setStandard] = useState(false);

  const handleMetric = () => {
    setMetric(true);
    setStandard(false);
  };

  const handleStandard = () => {
    setMetric(false);
    setStandard(true);
  };

  return (
    <Form>
      <div className="mb-3">
        <Form.Check // prettier-ignore
          type="radio"
          id="metric"
          label="Metric"
          checked={metric}
          onChange={handleMetric}
        />

        <Form.Check
          type="radio"
          label="Standard"
          id="standard"
          checked={standard}
          onChange={handleStandard}
        />
      </div>
    </Form>
  );
};

export default UnitSelect;
