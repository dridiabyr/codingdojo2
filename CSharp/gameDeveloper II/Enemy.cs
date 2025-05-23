using System;
using System.Collections.Generic;

public class Enemy
{
    public string Name;
    protected int health = 100;
    public List<Attack> AttackList;

    public int Health
    {
        get { return health; }
    }

    public Enemy(string name)
    {
        Name = name;
        AttackList = new List<Attack>();
    }

    public void AddAttack(Attack newAttack)
    {
        AttackList.Add(newAttack);
    }

    public virtual void PerformAttack(Enemy target, Attack chosenAttack)
    {
        if (health <= 0)
        {
            Console.WriteLine($"{Name} cannot attack because they are defeated!");
            return;
        }

        if (chosenAttack == null)
        {
            Console.WriteLine($"{Name} has no valid attack to perform.");
            return;
        }

        target.health -= chosenAttack.DamageAmount;
        Console.WriteLine($"{Name} attacks {target.Name} with {chosenAttack.Name}, dealing {chosenAttack.DamageAmount} damage! {target.Name}'s health is now {target.Health}.");
    }

    public Attack RandomAttack()
    {
        if (AttackList.Count == 0)
        {
            Console.WriteLine($"{Name} has no attacks.");
            return null;
        }

        Random rand = new Random();
        int index = rand.Next(AttackList.Count);
        return AttackList[index];
    }

    public void TakeHealing(int amount)
    {
        if (health <= 0)
        {
            Console.WriteLine($"{Name} cannot be healed because they are defeated.");
            return;
        }

        health = Math.Min(100, health + amount);
    }
}
