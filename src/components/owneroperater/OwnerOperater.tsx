import { useState } from "react";
import HomeContactUs from "../homepage/HomeContactUs";
import AboutOwnerOperator from "./AboutOwnerOperator";
import OwnerJobDescription from "./OwnerJobDescription";
import OwnerOperatorForm from "./OwnerOperatoeForm";
import OwnerOperatorHero from "./OwnerOperatorHero";
import Requirement from "./Requirement";

const OwnerOperater = () => {
  const [showForm, setShowForm] = useState(false);

  const handleApplyNowClick = () => {
    setShowForm(true);
  };
  return (
    <div>
      <OwnerOperatorHero />
      <AboutOwnerOperator handleApplyNowClick={handleApplyNowClick} />

      {showForm ? (
        <OwnerOperatorForm />
      ) : (
        <>
          <Requirement />
          <OwnerJobDescription handleApplyNowClick={handleApplyNowClick} />
        </>
      )}

      <HomeContactUs />
    </div>
  );
};

export default OwnerOperater;
