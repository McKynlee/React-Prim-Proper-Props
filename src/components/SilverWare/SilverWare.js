function SilverWare({ name, count }) {
  let silverWareName;
  if (name === 'Spoons') {
    silverWareName = 'Spoons'
  } else if (name === 'Forks') {
    silverWareName = 'Forks'
  } else {
    silverWareName = 'Knives'
  }

  return (
    <div>
      <div>
        {silverWareName}: {count * 2}
      </div>
    </div>
  );
}

export default SilverWare;