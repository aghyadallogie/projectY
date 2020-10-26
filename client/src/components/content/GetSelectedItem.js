import React, { Fragment } from "react";

export const GetSelectedItem = ({ target }) => {
  const handleTargetObject = (target) => {
    let listItems = [];
    // delete target._id;
    for (const [key, value] of Object.entries(target)) {
      listItems.push(
        <li key={key}>
          {key.split(/(?=[A-Z])/).join(" ")}: {value}
        </li> // splitted on Uppercase letters
      );
    }
    return listItems;
  };

  return (
    <Fragment>
      <ul className="targetsInfos">{handleTargetObject(target)}</ul>
    </Fragment>
  );
};
