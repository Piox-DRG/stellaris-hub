import React from 'react';
import { EmpirePreviewProps } from './EmpirePreviewProps';

export interface EmpireData {
  name: string;
  // Add other properties of the empire data here
}

const EmpirePreview: React.FC<EmpirePreviewProps> = ({ empireData }) => {
  return (
    <div className="bg-green-200 p-4 rounded-lg">
      <h2 className="text-2xl mb-4">{empireData.name}</h2>
      <div className="flex justify-between">
        <div>
          <img src={empireData.planetImage} alt="Planet" />
          <img src={empireData.cityImage} alt="City" />
          <p>Room Type: {empireData.roomType}</p>
          <img src={empireData.leaderImage} alt="Leader" />
          <img src={empireData.flagImage} alt="Flag" />
        </div>
        <div>
          <img src={empireData.planetImage} alt="Planet" />
          <p>{empireData.planetName}</p>
          <p>Climate: {empireData.climate}</p>
        </div>
        <div>
          <div>
            <img src={empireData.govIcon} alt="Government Type" />
            <p>{empireData.govName}</p>
            {empireData.civics.map((civic) => (
              <div key={civic.id}>
                <img src={civic.icon} alt={civic.name} />
                <p>{civic.name}</p>
              </div>
            ))}
            {empireData.ethics.map((ethic) => (
              <div key={ethic.id}>
                <img src={ethic.icon} alt={ethic.name} />
                <p>{ethic.name}</p>
              </div>
            ))}
          </div>
          <div>
            <img src={empireData.speciesImage} alt="Species" />
            <p>{empireData.speciesName}</p>
            {empireData.traits.map((trait) => (
              <div key={trait.id}>
                <img src={trait.icon} alt={trait.name} />
                <p>{trait.name}</p>
              </div>
            ))}
          </div>
          <div>
            <img src={empireData.shipImage} alt="Ship Type" />
            <img src={empireData.originIcon} alt="Origin" />
            <p>{empireData.originName}</p>
            <p>{empireData.biography}</p>
          </div>
        </div>
      </div>
      {/* Add tooltips for each component */}
      <Tooltip target={/* Specify the component to target */}>
        {/* Tooltip content */}
      </Tooltip>
    </div>
  );
};

export default EmpirePreview;
