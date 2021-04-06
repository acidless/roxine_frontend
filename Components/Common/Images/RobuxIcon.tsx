function RobuxIcon({ rarity = "uncommon" }: { rarity: string }) {
  return (
    <div className={`${rarity} robux-icon`}>
      <span>R$</span>
    </div>
  );
}

/*====================*/

export default RobuxIcon;
