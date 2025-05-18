using System;
using System.Collections.Generic;

public class Enemy
{
    public string Name;
    private int health = 100;
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

    public Attack RandomAttack()
    {
        if (AttackList.Count == 0)
        {
            Console.WriteLine($"{Name} has no attacks.");
            return null;
        }

        Random rand = new Random();
        int index = rand.Next(AttackList.Count);
        Attack chosen = AttackList[index];

        Console.WriteLine($"{Name} performs {chosen.Name} which does {chosen.DamageAmount} damage!");
        return chosen;
    }
}
