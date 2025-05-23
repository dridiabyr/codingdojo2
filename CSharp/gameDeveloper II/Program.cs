class Program
{
    static void Main()
    {
        MeleeFighter melee = new MeleeFighter("Conan");
        RangedFighter ranged = new RangedFighter("Legolas");
        MagicCaster caster = new MagicCaster("Gandalf");

        melee.PerformAttack(ranged, melee.AttackList[1]); // Kick
        melee.Rage(caster);

        ranged.PerformAttack(melee, ranged.AttackList[0]); // Too close
        ranged.Dash();
        ranged.PerformAttack(melee, ranged.AttackList[0]); // Should work now

        caster.PerformAttack(melee, caster.AttackList[0]); // Fireball
        caster.Heal(ranged);
        caster.Heal(caster);
    }
}
