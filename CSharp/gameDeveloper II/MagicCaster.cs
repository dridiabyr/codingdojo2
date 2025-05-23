using System;

public class MagicCaster : Enemy
{
    public MagicCaster(string name) : base(name)
    {
        health = 80;  
        AttackList.Add(new Attack("Fireball", 25));
        AttackList.Add(new Attack("Lightning Bolt", 20));
        AttackList.Add(new Attack("Staff Strike", 10));
    }

    public override void PerformAttack(Enemy target, Attack chosenAttack)
    {
        Console.WriteLine($"{Name} casts {chosenAttack.Name}!");
        base.PerformAttack(target, chosenAttack);
    }

    public void Heal(Enemy target)
    {
        int healedAmount = 40;
        target.TakeHealing(healedAmount);
        Console.WriteLine($"{Name} heals {target.Name} for {healedAmount} HP. {target.Name}'s health is now {target.Health}.");
    }
}
