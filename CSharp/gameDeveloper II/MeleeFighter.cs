public class MeleeFighter : Enemy
{
    public MeleeFighter(string name) : base(name)
    {
        this.health = 120;
        AttackList.Add(new Attack("Punch", 20));
        AttackList.Add(new Attack("Kick", 15));
        AttackList.Add(new Attack("Tackle", 25));
    }

    public void Rage(Enemy target)
    {
        Attack rageAttack = RandomAttack();
        rageAttack.DamageAmount += 10;
        PerformAttack(target, rageAttack);
        rageAttack.DamageAmount -= 10; // Reset after attack
    }
}
