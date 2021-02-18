var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];
//Solution with spread

const deskTypesSpread = desks.reduce((acc, desk) => {
    if (desk.type === 'sitting') return { ...acc, sitting: acc.sitting + 1};
    if (desk.type === 'standing') return { ...acc, standing: acc.standing + 1};
    return acc;
}, { sitting: 0, standing: 0 });//?

// accepted by udemy
const deskTypes = desks.reduce((acc, desk) => {
  if (desk.type === 'sitting') return { standing: acc.standing, sitting: acc.sitting + 1};
  if (desk.type === 'standing') return { sitting: acc.sitting, standing: acc.standing + 1};
  return acc;
}, { sitting: 0, standing: 0 });//?
