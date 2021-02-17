import SilverWare from '../SilverWare/SilverWare'

function DinnerSupplies({ count }) {
  return (
    <div>
      <h2>Dinner Supplies</h2>
      <SilverWare name="Spoons" count={count} />
      <SilverWare name="Forks" count={count} />
      <SilverWare name="Knives" count={count} />
    </div>
  );
}

export default DinnerSupplies;