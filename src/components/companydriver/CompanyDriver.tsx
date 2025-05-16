import { useState } from "react"
import OwnerJobDescription from "../owneroperater/OwnerJobDescription"
import AboutCompanyDriver from "./AboutCompanyDriver"
import CompanyDriverHero from "./CompanyDriverHero"
import CompanyDriverRequirement from "./CompanyDriverRequirement"
import OwnerOperatorForm from "../owneroperater/OwnerOperatoeForm"


const CompanyDriver = () => {
     const [showForm, setShowForm] = useState(false);
  
    const handleApplyNowClick = () => {
      setShowForm(true);
    };
  return (
    <div>
      <CompanyDriverHero />
      <AboutCompanyDriver />
      {showForm ? (
        <OwnerOperatorForm />
      ) : (
        <>
                <CompanyDriverRequirement />
          <OwnerJobDescription handleApplyNowClick={handleApplyNowClick} />
        </>
      )}
    </div>
  )
}

export default CompanyDriver